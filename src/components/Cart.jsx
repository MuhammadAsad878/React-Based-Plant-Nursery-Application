/* eslint-disable react/prop-types */
import Nav from "./Nav";
// import { plantsArray } from "./PlantsArray";
import { Link } from "react-router-dom";
import './cart.css';
// eslint-disable-next-line react/prop-types
export default function Cart({ cartItems, cartCount, totalPrice, setCartCount, setTotalPrice, onRemove }) {
  function handleAdd(id) {
    const item = cartItems.find(item => item.id === id);
    setCartCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + item.cost);
  }

  function handleMinus(id) {
    const item = cartItems.find(item => item.id === id);
    setCartCount((prev) => prev - 1);
    setTotalPrice((prev) => prev - item.cost);
    onRemove(item);
  }

  return (
    <div>
      <Nav cartCount={cartCount} />
      <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Total Cart Amount: ${Number(totalPrice).toFixed(2).toString()}</h1>

        <p>Total Cart Items = {cartCount}</p>

        <button style={{ backgroundColor: 'green', padding: '15px 20px', border: 'none', color: 'white', cursor: 'pointer' }}>
          <Link to="/products">Continue Shopping</Link>
        </button>
        <br /><br />

        <button style={{ backgroundColor: 'green', padding: '15px 20px', border: 'none', color: 'white', cursor: 'pointer' }}>Checkout</button>

        <table className="table">
          <thead>
            <tr>
              <th>Items ID</th>
              <th>Items Name</th>
              <th>Items Cost</th>
              <th>Items Quantity</th>
              <th>Items Description</th>
              <th>Items Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td className="button">
                  <button className="add" onClick={() => handleAdd(item.id)}>Add</button>
                  <button className="minus" onClick={() => handleMinus(item.id)}>Minus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
