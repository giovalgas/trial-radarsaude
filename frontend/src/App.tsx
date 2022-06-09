import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';

import { MainLayoutComponent } from "./components/layout/MainLayoutComponent";
import {ManagePersonPageComponent,} from "./components/pages/ManagePersonPageComponent";
import { StatisticsPageComponent } from "./components/pages/StatisticsPageComponent";
import { PersonListPageComponent } from "./components/pages/listperson/PersonListPageComponent";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'


function App() {
    return (
        <Router>
            <MainLayoutComponent>
                <Routes>
                    <Route path={"/"}>
                        <Route path={"/"} element={<PersonListPageComponent />} />
                        <Route path={"/people"} element={<PersonListPageComponent />} />
                        <Route path={"/register-person"} element={<ManagePersonPageComponent />} />
                        <Route path={"/edit-person/:id"} element={<ManagePersonPageComponent isEditing={true} />} />
                        <Route path={"/statistics"} element={<StatisticsPageComponent />} />
                    </Route>
                </Routes>
            </MainLayoutComponent>
        </Router>
    );
}

export default App;
