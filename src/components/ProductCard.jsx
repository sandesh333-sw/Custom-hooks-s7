import {FaShoppingCart } from "react-icons/fa";



function ProductCard({product, onAddToCart}) {
  return (
    <div className="product-cart">
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}></button>
      <FaShoppingCart />Add to Cart
    </div>
  )
}

export default ProductCard
