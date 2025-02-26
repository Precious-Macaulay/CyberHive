import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';
import Footer from './components/footer';

import Auth from './pages/auth';
import Landing from './pages/landing';
import NotFound from './pages/notFound';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<Auth />}></Route>  
            {/* <Route path='/device-model' element={<SelectDeviceModel />} />
            <Route path='/damage-option' element={<SelectDamage />} />
            <Route path='/repair-form' element={<RepairForm />} />
            <Route path='/make-payment' element={<MakePayment />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
