import Home from './containers/Home/home';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Header from './containers/Header/header';
import Cart from './containers/Cart/cart';
import { createContext, useState} from 'react';
import './App.css';

export const AppContext = createContext();

function App() {

const[items, setItems] = useState([]);

const handleAddItem = (item) =>{
  const newItem = {
    id: items.length === 0 ? 1 : items[items.length -1].id +1,
    img: item.img,
    title: item.title,
    prize: item.prize, 
    quantity: 1
  }
  const newList = [...items, newItem]
  setItems(newList);
}

  return (
    <BrowserRouter>
    < AppContext.Provider value={{items, setItems, handleAddItem}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    </AppContext.Provider>

    </BrowserRouter>
  );
}

export default App;
