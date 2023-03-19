import css from './App.module.css';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { useAuth } from 'hooks/useAuth';
import { Layout } from 'components/Layout/Layout';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';


const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const PhonebookPage = lazy(() => import('./pages/PhonebookPage'));

const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();
  
    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);

    return (
        <div className={css.container} >
        <Suspense fallback={<Loader />}>
        {!isRefreshing && (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute />}>
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/contacts" element={<PhonebookPage />} />
                </Route>
              </Route>
            </Routes>
          )}
        </Suspense>
        </div>
    )
}

export default App;