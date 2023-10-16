import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light-mode')

  const clickData = (data) => {
    setTheme(data ? 'light-mode' : 'dark-mode')
  }

  return (
    <div>
      <Header clickData={clickData}/>
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
