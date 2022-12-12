import React from "react";
import "./styled.css";
import { Icon } from "@iconify/react";

export default function SideNav(props) {
  return (
    <div className="side">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="contentLinks">
        <div className="links" onClick={() => props.funcao("Clientes")}>
          <Icon icon="ic:baseline-perm-contact-calendar" height="32" />
          <span>Clientes</span>
        </div>
        <div className="links" onClick={() => props.funcao("Processos")}>
          <Icon icon="ic:baseline-perm-contact-calendar" height="32" />

          <span>Processos</span>
        </div>
        <div className="links" onClick={() => props.funcao("Agendamento")}>
          <Icon icon="icon-park-solid:doc-search" height="32" />

          <span>Agendamento</span>
        </div>
        <div className="links" onClick={() => props.funcao("Fluxo de Caixa")}>
          <Icon icon="mdi:cash-register" height="32" />

          <span>Fluxo de Caixa</span>
        </div>
        <div className="links" onClick={() => props.funcao("Usuarios")}>
          <Icon icon="teenyicons:users-solid" height="22" />
          <span>Usuarios</span>
        </div>
      </div>
      <div className="rodape">
        <div>
          <span>Conta</span>
        </div>
        <div>
          <span>Informações</span>
        </div>
        <div>
          <span>Sair</span>
        </div>
      </div>
    </div>
  );
}
