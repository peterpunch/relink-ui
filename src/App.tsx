import './App.css'
import CreateShortLinkPage from "./CreateShortLinkPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RedirectShortLinkPage from "./RedirectShortLinkPage.tsx";

function Home() {
    return <CreateShortLinkPage/>;
}

function Redirect() {
    return <RedirectShortLinkPage/>;
}

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:hash" element={<Redirect/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
