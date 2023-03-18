import { lazy, Suspense } from "react";



import { Routes, Route } from "react-router-dom";

const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const PhoneBookPage = lazy(() => import('../pages/PhoneBookPage'))

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/phonebook" element={<PhoneBookPage />}/>
            </Routes>
        </Suspense>
    )
}


export default UserRoutes;