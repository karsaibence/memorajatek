import React, { useState } from "react";
import "./kartya.css";

const Kartya = (props) => {
  const [mutat, setMutat] = useState(false);
  function kartyaMutat() {
    let tempMutat = mutat;
    setMutat(!tempMutat);
  }
  return (
    <div
      className="kartya"
      onClick={() => {
        kartyaMutat();
      }}
    >
      <div className={mutat ? "mutat" : "fed"}>
        <img src={"/kepek/" + props.src} alt={props.nev} />
      </div>
    </div>
  );
};

export default Kartya;
