import { Icon } from "@iconify/react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import SideNav from "./components/SideNav";
import Tabela from "./components/Tabela";

function App() {
  const [titulo, setTitulo] = useState("Processos");
  return (
    <div className="home">
      <SideNav funcao={setTitulo} />
      <div className="body">
        <h1>Resumo</h1>
        <div className="cards">
          <Card
            icon="gridicons:multiple-users"
            title="Clientes"
            number="150254"
          />
          <Card
            icon="ic:baseline-insert-drive-file"
            title="Processos"
            number="15021"
          />
        </div>

        <h1>{titulo}</h1>
        <div className="busca">
          <input type="text" />
          <div className="buttonBusca">
            <Icon icon="ic:baseline-search" color="#bbb" width="32" />
          </div>
        </div>

        <Tabela />
      </div>
    </div>
  );
}

export default App;
