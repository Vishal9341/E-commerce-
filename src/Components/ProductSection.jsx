import React from "react";

const products = [
  {
    id: 1,
    name: "Men's Leather Jacket",
    price: "₹2499",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614"
  },
  {
    id: 2,
    name: "Women's Party Dress",
    price: "₹1999",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: "₹699",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: "₹1599",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
  },
  {
    id: 5,
    name: "Winter Hoodie",
    price: "₹1299",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    id: 6,
    name: "Formal Shirt",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Women's Top",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 8,
    name: "Men's Sneakers",
    price: "₹2299",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    id: 9,
    name: "Summer Kurti",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03"
  },
  {
    id: 10,
    name: "Track Pants",
    price: "₹1099",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80"
  }
];

const ProductSection = () => {
  return (
    <div
      className="py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')"
      }}
    >
      {/* Overlay */}
      <div className="bg-white/90 py-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Trending Products
        </h1>

        <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-blue-600 font-bold mt-1">
                  {item.price}
                </p>

                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;