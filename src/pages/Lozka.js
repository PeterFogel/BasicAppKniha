import React, { useContext } from "react";
import LozkaTable from "../tables/LozkaTable";
import "./css/pages.css";

import AppContext from "../helpers/AppContext";
import ModalContext from "../helpers/ModalContext";

export default function Lozka() {
  const { id, name, role } = useContext(AppContext);
  const { showModal } = useContext(ModalContext);

  const openNoveLozka = () => {
    showModal("noveLozko", {
      lozko: { id, name },
      spolocnost: { id: id, name: name }
    });
  };

  return (
    <div className="lozka">
      <div className="header">
        <div className="nadpis">Databáza lôžok</div>
        <div className="buttons">
          <button onClick={openNoveLozka}>Pridať lôžko</button>
          <button>Vyhľadať</button>
        </div>
      </div>
      <div className="content">
        <LozkaTable />
      </div>
    </div>
  );
}
