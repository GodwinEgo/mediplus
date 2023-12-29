import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home, Register} from "./pages"

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App