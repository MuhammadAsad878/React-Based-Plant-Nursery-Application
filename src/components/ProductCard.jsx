// import '../components/ProductCard.css';

// // eslint-disable-next-line react/prop-types
// export default function ProductCard( {image, title, description, cost, onAddToCart,cartItems} ) {
//   ProductCard.defaultProps = {
//     image: "default.jpg",
//     title: "Default Plant",
//     description: "No description available.",
//     cost: "0.00",
//   };
//   return (
//     <div className="card">
//       <img src={image} alt={title} className="card_image" />
//       <div className="card_content">
//         <h3 className="card_title">{title}</h3>
//         <p className="card_description">{description}</p>
//         <p className="card_price">{cost}</p>
//         <button
//               onClick={() => onAddToCart(plant)}
//               disabled={cartItems.includes(plant)}
//             >
//               {cartItems.includes(plant) ? "Added to Cart" : "Add to Cart"}
//             </button>
//       </div>
//     </div>
//   );
// }
