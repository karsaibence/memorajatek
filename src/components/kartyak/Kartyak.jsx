import React from "react";
import { adatok } from "../../adatok";
import Kartya from "../kartya/Kartya";
import "./kartyak.css"

const Kartyak = (props) => {
  return (
    <div className="kartyak">
      {props.lista.map((e, i) => {
        return <Kartya key={i} nev={adatok[e].nev} src={adatok[e].src} id={adatok[e].id}/>;
      })}
    </div>
  );
};

export default Kartyak;
