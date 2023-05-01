import "./App.css";
import { Header, Home, Order, Topping, Base, Modal } from "./Components";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setshowModal] = useState(false);
  const location = useLocation();
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <div className="App">
      <Header />
      <Modal showModal={showModal} setshowModal={setshowModal} />
      <div>
        <div className="App-Content">
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => setshowModal(false)}
          >
            <Routes location={location} key={location.key}>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/order"
                element={<Order pizza={pizza} setshowModal={setshowModal} />}
              />
              <Route
                exact
                path="/topping"
                element={<Topping pizza={pizza} addTopping={addTopping} />}
              />
              <Route
                exact
                path="/base"
                element={<Base pizza={pizza} addBase={addBase} />}
              />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
