import React from "react";
import { Icon } from "@iconify/react";
import "./styled.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="icone">
        <Icon icon={props.icon} width="32" />
      </div>
      <span>{props.title}</span>
      <b>{props.number}</b>
    </div>
  );
}
