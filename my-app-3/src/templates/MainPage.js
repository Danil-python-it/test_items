import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout.js';
import NotPage from './Pages/NotPage.js';
import CategoryList from './Pages/CategoryList.js';
import ProductionItems from './Pages/ProductionItem.js';
import MainList from './StaticElement/MainList.js';

export default class MainPage extends React.Component{
    render(){
        return (
            <>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<MainList/>} />
                        <Route path='Category/getAllproduction/:id' element={<CategoryList/>} />
                        <Route path='Production/:id' element={<ProductionItems />} />
                        <Route path='*' element={<NotPage/>} />
                    </Route>
                </Routes>
            </>
        );
    }
}
