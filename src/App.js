import './App.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTexts } from './redux/textSlice';
import { setParas } from './redux/textSlice'

function App() {
  const texts=useSelector((state)=>state.texts.items);
  const paras = useSelector((state) => state.texts.paras);
  const dispatch =useDispatch();
  useEffect(()=>{
    dispatch(fetchTexts({paras: paras}))
  }, [dispatch ,  paras])
  return (
    <div className="App">
      <div className='contentcss'>
      <div className='header' >
        <h1>React sample text generator app</h1>
      </div>
      <hr></hr>
      <div className='middle'>
        <div>
          <div>Paragraf</div>
          <input type="number" value={paras} onChange={(e) => dispatch(setParas(Number(e.target.value)))}></input>
        </div>
        <div>
          <div>Inculude Html</div>
          <select className='selectcss'>
            <option value='html'>Yes</option>
            <option value='text'>No</option>
          </select>
        </div>
      </div>
      <div className='footer'>
        <div className='sss'>
          <div>{texts}</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
