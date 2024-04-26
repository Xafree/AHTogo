import React from 'react';
import './styles/pages/App.css';
import HomePages from "./pages/homePages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ArticlesPages from "./pages/artilesPages";
import AboutusPages from "./pages/aboutusPages";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<HomePages />} />
          <Route path='/artciles'  element={<ArticlesPages />} />
          <Route path='/about-us'  element={<AboutusPages />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
