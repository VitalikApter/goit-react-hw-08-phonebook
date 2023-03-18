import { BrowserRouter } from 'react-router-dom';

import  Navigation  from '../Navigation/Navigation';

import { useSelector } from 'react-redux';
import { selectError } from 'components/redux/selectors';
import {  toast } from 'react-toastify';

import { Section } from 'components/Section/Section';

import { PhoneApp } from 'components/PhoneApp/PhoneApp';

import UserRoutes from 'components/Navigation/UserRoutes/UserRoutes';

export const App = () => {
  const error = useSelector(selectError);

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <BrowserRouter>
<Section>
<Navigation/>
<UserRoutes />
</Section>
      
      </BrowserRouter>
      <PhoneApp />
    </>
  );
};