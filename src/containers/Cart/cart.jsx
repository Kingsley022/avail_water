import './cart.css';
import Button from '../../components/button/button';
import { useContext } from 'react';
import { AppContext } from './../../App';
const Cart = () => {
    const {items, setItems} = useContext(AppContext);
    let total = 0;
    
    items.forEach(item => {
        total += item.prize * item.quantity;
    });

    const summaries =[
        {id:1, title: "5 ITEMS", prize: total},
        {id:2, title: "SHIPPING", prize: 'Free'},
        {id:3, title: "TOTAL", prize: total}
    ]
    

    const handleIncrement = index =>{
        const newItem = [...items]
        newItem[index].quantity++;
        setItems(newItem);
    }

    const handleDecrement = index =>{
        const newItem = [...items]
        newItem[index].quantity > 1 && newItem[index].quantity--;
        setItems(newItem);
    }

    const handleDelete = item =>{
        const newItem = items.filter(itm => itm.id !== item.id);
        setItems(newItem);
    }

   
    return (
        <div className="cartContainer">
            {items.length === 0 ? <h1>No items yet</h1> : <>
            <div className="items">
            <h1>Shopping Cart</h1>
                {items.map((item, index) => (
                    <div className="item" key={item.id}>
                        <img src={item.img}/>
                        <p className='title'>{item.title}</p>
                        <p className='prize'>₦ <span>{item.prize}</span></p>
                        <div className="btns">
                            <p className='btnn' onClick={() => handleDecrement(index)}>-</p>
                            <p className='quantity'>{item.quantity}</p>
                            <p className='btnn' onClick={() => handleIncrement(index)}>+</p>
                        </div>
                        <i className="fa fa-trash-o" onClick={() => handleDelete(item)}></i>
                    </div>
                ))}
            </div>
            <div className="summary">
                <h1>Summary</h1>

                {summaries.map(summary => (
                    <div className="totals" key={summary.id}>
                        <p>{summary.title}</p>
                        <p>{summary.prize === "Free" ? summary.prize : `₦ ${summary.prize}`}</p>
                    </div>
                ))}

                <Button placeholder={"CHECK OUT"} btn2={'sumBtn'}/>

            </div>
            </>}
        </div>
    );
}
 
export default Cart;