import React from "react";
import "./phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
