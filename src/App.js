import React from 'react';
//import Logo from './Components/Logo';
import SearchField from './Components/Searchbox';
import Header from './Components/Header';
import Nav from './Components/Nav';
import ResultsList from './Components/ResultsList';
import AddSong from './Components/AddSong';
import SignInForm from './Components/SignInForm';

function App() {
  let style = {
    "max-height": "100vh",
    "overflow": "hidden",
    height: "100vh"
  };
  let hidden = {
    display: "none"
  };
  
  return (
    <div className='ba w-100 flex flex-column justify-between' style={style}>
      <div className='ba flex justify-end'>
        <div className='ba w5'>
          <Nav />
        </div>
      </div>
      <div className='ba w-100 flex justify-center'>
        <div className='ba'>
          <Header />
        </div>
      </div>
      <div className='ba w-100 flex justify-center'>
        <div className='ba'>
          <SearchField />
        </div>
      </div>
      <div className='ba w-100 flex justify-center b--red' style={{height:"70%"}} >
        <div className='ba'>
          <ResultsList />
        </div>
      </div>
      <div className='ba w-100' style={hidden}>
        <div className='ba flex justify-center'>
          <SignInForm />
          <AddSong />
        </div>
      </div>
      <div className='ba w-100 flex justify-center'>
        <div className='ba'>
          <h3>All lyrics are a property of their owners.</h3>
        </div>
      </div>
      
    </div>
  );
}

export default App;
