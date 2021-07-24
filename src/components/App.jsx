import React from "react";
import Card from "./Card";
import { contacts } from "../contacts.js";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <Avatar img="https://images.dog.ceo/breeds/cairn/n02096177_424.jpg" />
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
