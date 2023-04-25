import './productcart.css'

export default function product() {
    return(
    <div class="product-card">
        <img src="productPic.jpg" alt="Product Image">
            <h3 class="product-name">Product Name</h3>
            <p class="product-brand">Brand Name</p>
            <p class="product-description">Product Description</p>
            <p class="product-price">Price: $7</p>
            <p class="product-rating">Rating: 4</p>
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
    </div>
    )

}