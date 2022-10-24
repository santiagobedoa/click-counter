import './App.css';
import Button from './components/Button';
import Counter from './components/Counter'
import freecodecampLogo from './images/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  const [clickNum, setNum] = useState(0);

  const clickHandler = () => {
    setNum(clickNum + 1);
  };

  const clearCounter = () => {
    setNum(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo-image'
          src={freecodecampLogo}
          alt='freecodecamp logo'/>
      </div>
      <div className='main-container'>
        <Counter clickNum={clickNum}/>
        <Button 
          text='Click'
          isClickButton={true}
          clickHandler={clickHandler}/>
        <Button 
          text='Clear'
          isClickButton={false}
          clickHandler={clearCounter}/>
        </div>
      </div>
  );
}

export default App;
