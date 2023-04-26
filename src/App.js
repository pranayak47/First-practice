import logo from './logo.svg';
import './App.css';
import List from './component/list'

function App() {
  const productDetailsList = [
    {
      productId: '1',
      productPic: 'product1.jpg',
      productName: 'Shoes',
      brand: 'Adidas',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$7',
      rating: 4
    },
    {
      productId: '2',
      productPic: 'product2.jpg',
      productName: 'T-Shirt',
      brand: 'Nike',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$10',
      rating: 3
    },
    {
      productId: '3',
      productPic: 'product3.jpg',
      productName: 'Backpack',
      brand: 'Puma',
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$20',
      rating: 5
    },
    
  ];
  const productCards = productDetailsList.map(productDetail => (
    <Card key={productDetail.productId} productDetail={productDetail} />
  ));
  return (
    <div className="App">
      {productCards}
    </div>
  );
}

export default App;
