import React from 'react'
import Navbar from "./Components/Navbar";
import ProductSection from "./Components/ProductSection";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
          <Navbar />
<div className="pt-20">
        <ProductSection />
      </div>
          <Footer />

    </div>
  )
}

export default App
rac