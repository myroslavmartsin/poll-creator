import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
