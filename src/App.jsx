import './App.css';
import { useSelector } from 'react-redux';
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  // get user auth state from store/context instead of hardcoding
  // const isUserAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isUserAuthenticated = true;

  return (
    <>
      <ToastContainer
        position="top-right" // Position of toast
        autoClose={3000} // Auto close in ms
        hideProgressBar={false} // Show/hide progress bar
        newestOnTop={true} // Newest toast on top
        closeOnClick
        pauseOnHover
        draggable
        theme="colored" // "light" | "dark" | "colored"
      />
      {isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}

export default App;
