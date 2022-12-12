import React from "react";
import "./styled.css";
let aulas = [
  {
    codigo: "0134699-75.2021.8.05.0001",
    cliente: "Maria Luiza Santana",
    cpf: "123.456.759-38",
    link: "http://google.com",
  },
  {
    codigo: "0134699-75.2021.8.05.0001",
    cliente: "Igor Lima Rocha",
    cpf: "123.456.759-38",
    link: "http://google.com",
  },
  {
    codigo: "0134699-75.2021.8.05.0001",
    cliente: "Luis Carlos Reis",
    cpf: "123.456.759-38",
    link: "http://google.com",
  },
];

export default function Tabela(props) {
  return (
    <div className="tabela">
      <table className={props.estilo}>
        <thead>
          <tr>
            <th>Codigo Processo</th>
            <th>Cliente</th>
            <th>Cpf</th>
            <th>Link</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {aulas.map((aula, index) => (
            <tr key={index}>
              <td>{aula.codigo}</td>
              <td>{aula.cliente}</td>
              <td>{aula.cpf}</td>
              <td>{aula.link}</td>
              <td className="botao">Ver mais</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
