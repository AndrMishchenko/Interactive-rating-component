import './App.css';
import {useState} from 'react'
import iconStar from './iconStar.svg'
import success from './success.svg'


function App() {

  const [raiting, setRaiting] = useState('');

  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);

  console.log(raiting)

  /*logic of raiting*/
    const setOne = () => {
      setRaiting(document.getElementById('one').textContent);
      const elemOne = document.getElementById('one');
        if(elemOne.classList.contains('one')){
          elemOne.classList.add('one-active')
          elemOne.classList.remove('one')
        }else if(elemOne.classList.contains('one-active')){
          elemOne.classList.add('one')
          elemOne.classList.remove('one-active')
        }
    }

    const setTwo = () => {
      setRaiting(document.getElementById('two').textContent)
      const elemOne = document.getElementById('two');
        if(elemOne.classList.contains('two')){
          elemOne.classList.add('two-active')
          elemOne.classList.remove('two')
        }else{
          elemOne.classList.add('two')
          elemOne.classList.remove('two-active')
        }
    }

    const setThree = () => {
      setRaiting(document.getElementById('three').textContent);
      const elemOne = document.getElementById('three');
        if(elemOne.classList.contains('three')){
          elemOne.classList.add('three-active')
          elemOne.classList.remove('three')
        }else{
          elemOne.classList.add('three')
          elemOne.classList.remove('three-active')
        }
      }

    const setFour = () => {
      setRaiting(document.getElementById('four').textContent)
      const elemOne = document.getElementById('four');
        if(elemOne.classList.contains('four')){
          elemOne.classList.add('four-active')
          elemOne.classList.remove('four')
        }else{
          elemOne.classList.add('four')
          elemOne.classList.remove('four-active')
        }
      }

    const setFive = () => {
      setRaiting(document.getElementById('five').textContent);
      const elemOne = document.getElementById('five');
        if(elemOne.classList.contains('five')){
          elemOne.classList.add('five-active')
          elemOne.classList.remove('five')
        }else{
          elemOne.classList.add('five')
          elemOne.classList.remove('five-active')
        }
    }

    const rt = () => {
      if (raiting !== ''){
        setForm1(false)
        setForm2(true)
      }else{
        alert('Please you`r choise')
        setForm1(true)
        setForm2(false)
      }
    }

    const back = () => {
      if(form2 === true){
        setForm1(true)
        setForm2(false)
      }
    }

  return (
    <>
      {form1 && (
        <div className='rating-form'>
          <div className='rating-form-star'>
            <img src={iconStar}></img>
          </div>
          <h2 className='rating-title'>How did we do?</h2>
          <p className='rating-text'>Please let us know how we did with your support request. All feedback id appreciated to help us improve our offering!</p>
          <div className='raiting-block'>
            <p onClick={setOne} id='one' className='one'>1</p>
            <p onClick={setTwo} id='two' className='two'>2</p>
            <p onClick={setThree} id='three' className='three'>3</p>
            <p onClick={setFour} id='four' className='four'>4</p>
            <p onClick={setFive} id='five' className='five'>5</p>          
          </div>
          <div className='bloc-btn'>
            <button className='submit' onClick={rt}>Submit</button>
          </div>
        </div>
      )}
      
      {form2 && (
        <div className='view-raiting'>
          <img onClick={back} className='view-raiting-success-image' src={success}></img>
          <p className='view-raiting-box-selected'>
            You selected {raiting} out of 5
          </p>
            <h2 className='view-raiting-title'>Thank you!</h2>
            <p className='view-raiting-text'>We appreciate you the time to give a raiting. If you ever need nore support, don`t hesitate to get in touch!</p>
        </div>
        
      )}
    </>
  );
}

export default App;
