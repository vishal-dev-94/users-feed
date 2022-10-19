import React from "react";

export default function UserCard(props) {
  // console.log("props", props);

  return (
    <div className="card col-md-4 col-lg-5 m-4" style={{ width: "18rem" }}>
      <img
        src={props.userItem.picture.large}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.userItem.name.first}</h5>
        <p className="card-text">{props.userItem.location.country}</p>
        <p>Contact:{props.userItem.phone}</p>
        <p>Gender:{props.userItem.gender}</p>
      </div>
    </div>
  );
}
