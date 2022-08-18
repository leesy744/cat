
import Home from './pages/Home';
import Result from './pages/Result';
import Question from './pages/Question';
import {Routes, Route} from 'react-router-dom';  //route 설치함
import './App.css'; //font import

function App() {
  return (
    <Routes>    
      <Route path='/' element={<Home />} />
      <Route path='/question' element={<Question />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  );
  
}

export default App;
