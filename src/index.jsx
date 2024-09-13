import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Survey from './pages/Surveys/survey'
import Header from './componnent/Header';
import Error from './componnent/Error';
import Footer from './componnent/footer';
import Results from './pages/Results/results';
import Freelance from './pages/Freelance/freelance';
import Profils from './pages/ProfilPages';
import { ThemeProvider } from './utils/context/index';
import GlobalStyle from '../src/utils/styles/GlobalStyle';
import { SurveyProvider } from './utils/context/index';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SurveyProvider>
      <GlobalStyle/>
        <Router>
            <Header/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/survey/:questionNumber' element={<Survey/>}/>
              <Route path='/results' element={<Results/>}/>
              <Route path='*' element={<Error/>}/>
              <Route path='/freelance' element={<Freelance/>}/>
              <Route path='/profil/:id' element={<Profils/>} />
            </Routes>
            <Footer/>
        </Router>
      </SurveyProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
