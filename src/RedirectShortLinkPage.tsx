import {type ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function RedirectShortLinkPage(): ReactElement {
    const [error, setError] = useState<string | undefined>(undefined);
    const {hash} = useParams()

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch(`http://localhost:8080/relink/api/short-links/${hash}`, requestOptions)
            .then(response => {
                console.log(response)
                if (response.status === 404) {
                    setError("Short Link not found.")
                    throw new Error("Short Link not found.");
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                window.location.href = data.url
            })
            .catch((error) => {
                console.error("Fetch error:", error)
                setError(error.toString())
            });

    }, [hash])
    return <div>
        <h2>{"http://localhost:5173/" + hash}</h2>
        {error !== undefined && error.length > 0 && (
            <div className="error-message">
                <span>{error}</span>
            </div>
        )}
    </div>;
}
