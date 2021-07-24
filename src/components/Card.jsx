import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div key={props.id}></div>
        <div className="top">
          <h1>{props.id}</h1>
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
