import {type ReactElement, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function RedirectShortLinkPage(): ReactElement {
    const {hash} = useParams()
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };

        fetch(`http://localhost:8080/relink/api/short-links/${hash}`, requestOptions)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data => {
                console.log(data)
                window.location.href = data.url
            })
            .catch((error) => console.error("Fetch error:", error));

    }, [hash])
    return <h2>Hash: {hash}</h2>;
}
