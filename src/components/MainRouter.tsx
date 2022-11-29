import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary';
import Loding from './Loding';
import Home from '../pages/Home'
import NewUser from '../pages/NewUser';
import MainLayout from './MainLayout';

const Users = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
        () =>
            Math.floor(Math.random() * 10) >= 4
                ? import('../pages/Users')
                : Promise.reject(new Error())
    );
});



const MainRouter = () => {
    return (
        <ErrorBoundary>
            <React.Suspense fallback={<Loding />}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/' element={<MainLayout />} >
                            <Route path='/users' element={<Users />} />
                            <Route path='/user/create' element={<NewUser />} />

                        </Route>
                    </Routes>

                </BrowserRouter>
            </React.Suspense>

        </ErrorBoundary>

    );
}

export default MainRouter;