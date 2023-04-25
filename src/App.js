import logo from './logo.svg';
import './App.css';
import productcart from './componenet/productcart'

function App() {
  const products = [
    {
      productId: '1',
      productPic: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
      productName: 'Shoes',
      brand: 'Adidas',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$7',
      rating: 4
    },
    {
      productId: '2',
      productPic: 'https://images.pexels.com/photos/5746087/pexels-photo-5746087.jpeg?auto=compress&cs=tinysrgb&w=600',
      productName: 'T-Shirt',
      brand: 'Nike',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      rating: 3
    },
    {
      productId: '3',
      productPic: 'https://media.istockphoto.com/id/1388490348/photo/white-oversize-t-shirt-mockup-hanging-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=is&k=20&c=4HCNHyQhtBPp743i7AcHqjWOHk0SWp5kYcXUqtQjKoI=',
      productName: 'T-Shirt',
      brand: 'Nike',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      rating: 3
    },
    {
      productId: '4',
      productPic: 'https://images.pexels.com/photos/386410/pexels-photo-386410.jpeg?auto=compress&cs=tinysrgb&w=600',
      productName: 'sun-glass',
      brand: 'Raben',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      rating: 4
    },
    {
      productId: '5',
      productPic: 'https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&w=600',
      productName: 'jeans',
      brand: 'killer',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      rating: 4
    }
  ]
  function addToCart(productId, brand, price) {
    alert(`Product ${productId}, which is ${brand} ${productName} of ${price} is added in the cart, please proceed to pay!!!`);
  }
  return (
    <div className="App">
      products.forEach(product => {
   const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
      <img src="${product.productPic}" alt="${product.productName}">
        <h3 class="product-name">${product.productName}</h3>
        <p class="product-brand">${product.brand}</p>
        <p class="product-description">${product.productDescription}</p>
        <p class="product-price">Price: ${product.price}</p>
        <p class="product-rating">Rating: ${product.rating}</p>
        <button class="add-to-cart" onclick="addToCart('${product.productId}', '${product.brand}', '${product.price}')">Add to Cart</button>
   `;
   productGrid.appendChild(card);
});
    </div>
  );
}

export default App;
