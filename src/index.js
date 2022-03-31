import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from "recoil";
import Main from "./pages/main";

const rootElement = document.querySelector("#root");
render(
    <BrowserRouter>
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </RecoilRoot>
    </BrowserRouter>,
    rootElement
);
