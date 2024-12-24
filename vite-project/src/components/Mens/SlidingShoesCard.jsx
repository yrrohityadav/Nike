import React, { useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import five from "../../assets/5.jpeg"; // Example image
import six from "../../assets/6.avif";  // Example image
import seven from "../../assets/7.avif"; // Example image

const SlidingShoesCard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [comment, setComment] = useState('');
  const [productName, setProductName] = useState('');  // To hold the selected product name

  const products = [
    { id: 1, name: 'Nike Air Zoom', price: '$120', discount: '10%', image: five },
    { id: 2, name: 'Nike React Infinity', price: '$130', discount: '15%', image: six },
    { id: 3, name: 'Nike Air Max', price: '$110', discount: '5%', image: seven },
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setProductName(product.name); // Set the name of the selected product in the input
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      productName,
      size,
      color,
      deliveryDate,
      comment
    };

    try {
      const response = await axios.post('http://localhost:5000/api/orders', orderData);
      alert('Order submitted successfully');
      console.log(response.data);
    } catch (error) {
      alert('Failed to submit the order');
      console.error(error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto my-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="text-gray-600">Price: {product.price}</p>
              <p className="text-red-600">Discount: {product.discount}</p>
            </div>
          </div>
        ))}
      </Slider>

      {selectedProduct && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Customize your Order</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/3">
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  value={productName}  // This will display the name of the selected product
                  readOnly  // Make this input read-only to avoid editing
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-medium">Size</label>
                <input
                  type="text"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Size"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-medium">Color</label>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Color"
                />
              </div>
              <div className="w-1/3">
                <label className="block text-sm font-medium">Delivery Date</label>
                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your comment"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white p-2 rounded"
            >
              Submit Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SlidingShoesCard;
