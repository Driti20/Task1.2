import React from "react";

const Card = (props) => (
  <>
    <div className="date">
      <h3>{props.date}</h3>
    </div>
    <div className="info">
      <div className="status" style={{backgroundColor:props.color}}><p className="statusText">{props.status}</p></div>
      <div><img src={props.img} alt="imege"/></div>
      <div><h4>{props.name}</h4></div>    
    </div>
    <div className="description">{props.description}</div>
    <div className="button">Download</div>
  </>
);

export default Card;
