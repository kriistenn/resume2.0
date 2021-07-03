import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Routers} from 'react-router-dom'
import Routes from 'routes';
import './index.css';
import Navbar from './Components/Navbar'
import PageWrapper from './Components/PageWrapper';
import Router from './Components/Routes';

const App = () => {
  return (
    <div>
     <Routers>
       <PageWrapper>
          <Router/>
       </PageWrapper>
     </Routers>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);