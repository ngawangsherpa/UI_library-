import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";
import Modal from "./components/Modal";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Card />
      <Button />
      <Form />
      <Modal />
    </div>
  );
};

export default App;
