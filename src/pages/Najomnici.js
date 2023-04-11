import React, { useContext } from "react";
import NajomniciTable from "../tables/NajomniciTable";
import "./css/pages.css";

import AppContext from "../helpers/AppContext";
import ModalContext from "../helpers/ModalContext";

export default function Najomnici() {
  const { id, name } = useContext(AppContext);
  const { showModal } = useContext(ModalContext);

  const openNovyNajomnik = () =>
    showModal("novyNajomnik", {
      lozko: { id, name },
      spolocnost: { id: id, name: name }
    });

  return (
    <div className="najomnici">
      <div className="header">
        <div className="nadpis">Nájomníci</div>
        <div className="buttons">
          <button onClick={openNovyNajomnik}>Pridať nájomníka</button>
          <button>Vyhľadať</button>
        </div>
      </div>
      <div className="content">
        <NajomniciTable />
      </div>
    </div>
  );
}
