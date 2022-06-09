import React from 'react';
import 'antd/dist/antd.css';
import './index.css';

import { MainLayoutComponent } from "./components/layout/MainLayoutComponent";
import { AddPersonPageComponent } from "./components/pages/AddPersonPageComponent";
import { StatisticsPageComponent } from "./components/pages/StatisticsPageComponent";
import { PersonListPageComponent } from "./components/pages/listperson/PersonListPageComponent";

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'


function App() {
    return (
        <Router>
            <MainLayoutComponent>
                <Routes>
                    <Route path={"/"} >
                        <Route path={"/people"} element={<PersonListPageComponent />} />
                        <Route path={"/register-person"} element={<AddPersonPageComponent />} />
                        <Route path={"/statistics"} element={<StatisticsPageComponent />} />
                    </Route>
                </Routes>
            </MainLayoutComponent>
        </Router>
    );
}

export default App;
