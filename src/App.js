import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books";
import { books } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +quantity,
        }
      }
      else {
        return item
      }
    }))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }

  function removeBook(book) {
    // eslint-disable-next-line
    setCart(cart.filter(item => item.id !== book.id))
  }



  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route exact path="/books" element={<Books books={books} />} />
          <Route path='/books/:id' element={<BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
