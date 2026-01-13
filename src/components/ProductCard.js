function ProductCard({product, addToCart}) {

    return(

        <div className="card">
            <div className="image-container">
                <img src={product.image} alt={product.title} />
            </div>
            
            <h3>{product.title}</h3>
            <p>Rs. {product.price}</p>
            <button onClick={()=> addToCart(product)} >Add to Cart</button>


        </div>
    )

}
export default ProductCard;