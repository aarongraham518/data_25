import "./App.css";
import { data } from "./data";
import { Card } from "./Card";

// Log into codepen or create an account.
// Open and fork this (☞ ͡° ͜ʖ ͡°)☞ project.
// Using whatever web technologies you want to use, design/create a User Interface for a product list that displays 25 products (data is included in project you forked under items).
// Account for null data values.
// There should be 1 item across at a 320px screen and at least 6 across at a 1200px screen. Make sure you account for different sizes in between.
// After you're done just send us the link to your pen.

function App() {
  return (
    <>
      <p className="messageToReader">
        Note!!! THIS IS ONLY THE LAYOUT TO DISPLAY AN ARRAY OF OBJECTS ONLY.
        IDEALLY, I WOULD ADD FILTER OPTIONS TO THE LEFT, A BANNER AT the TOP,
        LOG IN, FOOTER AND A NUMBER OF ECOMMERCE FEATURES.
      </p>

      <div className="App">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
