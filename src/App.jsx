import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './routes';
import Sidebar from '@containers/sidebar';

function App() {
  return (
    <>
      <ToastContainer />
      <main>
        <Sidebar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </main>
    </>
  )
}

function AppWrapper() {

  return (
      <Router>
        <App />
      </Router>
  )
}

export default AppWrapper
