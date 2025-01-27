/* eslint-disable react/prop-types */
import Nav from "./Nav";
import './ProductCard.css'
import { plantsArray } from "./PlantsArray";
export default function Products({onAddToCart, cartItems, cartCount}){

  let categoryStyle = {textAlign:'center',backgroundColor:'azure',padding:'10px',borderRadius:'10px',color:'green'};
  

  return(
    <>
    <Nav  cartCount={cartCount}/>

    <div className="card_container" >
    {plantsArray.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 style={categoryStyle}>{category.category}</h2>
            <div className="category_cards">
              {category.plants.map((plant, plantIndex) => (
                 <div className="card" key={plantIndex}>
                 <img src={plant.image} alt={plant.title} className="card_image" />
                 <div className="card_content">
                   <h3 className="card_title">{plant.title}</h3>
                   <p className="card_description">{plant.description}</p>
                   <p className="card_price">{plant.cost}</p>
                   <button className= {`card_button ${(cartItems.some((cartItem)=> cartItem.id === plant.id)) ? 'added':''}`}
                   onClick={() => ( onAddToCart(plant))}
                   disabled={cartItems.some((cartItem) => cartItem.id === plant.id)}
                 
                   >
                {cartItems.some((cartItem) => cartItem.id === plant.id) ? "Added to Cart" : "Add to Cart"}
                 </button>
                 </div>
               </div>
                
              ))}
            </div>
          </div>
        ))}
    </div>
    </>
  )
}