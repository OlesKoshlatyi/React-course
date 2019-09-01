import React from "react";

const InfoMsg = ({ source }) => (
  <div className="ui icon message">
    <i className={source.type}></i>
    <div className="red content">
      <div className={source.header}>There is no any games</div>
      <p>You should add some</p>
    </div>
  </div>
);

export default InfoMsg;
