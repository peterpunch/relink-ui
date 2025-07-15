import {type ReactElement, type SetStateAction, useState} from "react";

export default function CreateShortLinkPage(): ReactElement {
    const [inputValue, setInputValue] = useState<string>("");
    const [hashValue, setHashValue] = useState<string | undefined>(undefined);

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = async () => {
        console.log('handle submit')
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({url: inputValue}),
        };

        fetch('http://localhost:8080/relink/api/short-links', requestOptions)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                setHashValue(data.hash)
            })
            .catch((error) => console.error("Fetch error:", error));

        return false
    }

    return (
        <div>
            <input
                id="destinationUrl"
                type="text"
                value={inputValue}
                placeholder="https://your-link-to-share.com"
                onChange={handleChange}
            />
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <br/>
            {hashValue === undefined || hashValue?.length > 0 && (
                <div>
                    <span> <a href={"http://localhost:5173/" + hashValue}
                              target="_blank">http://localhost:5173/{hashValue}</a> </span>
                </div>
            )}
        </div>
    )
}
