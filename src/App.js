import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import BeerDetailRandom from './components/BeerDetailRandom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/beerlist' element={<BeerList />}></Route>
        <Route path='/beerlist/:details' element={<BeerDetails />}></Route>
        <Route path='/beerdetailrandom' element={<BeerDetailRandom />}></Route>
      </Routes>
    </div>
  );
}

export default App;
