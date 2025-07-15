import {type ReactElement, type SetStateAction, useState} from "react";

const urlRegexp = /https?:\/\/[^\s/$.?#].[^\s]*/;
export default function CreateShortLinkPage(): ReactElement {

    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<string | undefined>(undefined);
    const [hashValue, setHashValue] = useState<string | undefined>(undefined);

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
        setError(undefined)
    };

    const handleSubmit = async () => {
        console.log('handle submit')

        if (!urlRegexp.test(inputValue)) {
            setError(`${inputValue} is not a valid URL`)
            setHashValue(undefined)
            return false
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({url: inputValue}),
        };

        fetch('http://localhost:8080/relink/api/short-links', requestOptions)
            .then(response => {
                console.log(response)
                if (response.status !== 201) {
                    throw new Error("There is an internal error. Please try again later.")
                }
                return response.json()
            })
            .then(data => {
                setHashValue(data.hash)
            })
            .catch((error) => {
                console.error("Fetch error:", error)
                setError(error.toString())
            });

        return false
    }

    return (
        <div>
            <input
                className="input-element"
                id="destinationUrl"
                type="text"
                value={inputValue}
                placeholder="https://your-link-to-share.com"
                onChange={handleChange}
            />
            <br/>
            <button type="submit" onClick={handleSubmit}>Create Short Link</button>
            <br/>
            {hashValue !== undefined && hashValue?.length > 0 && (
                <div className="output-element">
                    <span> <a href={"http://localhost:5173/" + hashValue}
                              target="_blank">http://localhost:5173/{hashValue}</a> </span>
                </div>
            )}
            {error !== undefined && error.length > 0 && (
                <div className="error-message">
                    <span>{error}</span>
                </div>
            )}
        </div>
    )
}
