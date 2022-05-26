import React, {Fragment} from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Characters from './routes/Characters';
import './styles/App.css'
import ViewCharacter from './page/ViewCharacter';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <header className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container-fluid'>
              <h5>Rick and Morty</h5>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav mx-3'>
                  <Link className=' active' to='/' >Home</Link>
                  <Link className=' ' to='#' >Characters</Link>
                  <Link className=' ' to='#' >Developer</Link>
                  <Link className='' to='#' >Docs</Link>
                </div>
              </div>
            </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/characters' element={<Characters/>}/>
        <Route path='/character/:id' element={<ViewCharacter/>}/>
      </Routes>
      </BrowserRouter>
      
    </Fragment>
  );
}

export default App;
