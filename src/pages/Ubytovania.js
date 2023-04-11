import React, { useContext } from "react";
import UbytovaniaTable from "../tables/UbytovaniaTable";
import "./css/pages.css";

import AppContext from "../helpers/AppContext";
import ModalContext from "../helpers/ModalContext";

export default function Ubytovania() {
  const { id, name } = useContext(AppContext);
  const { showModal } = useContext(ModalContext);

  const openNovyNajomnik = () =>
    showModal("novyNajomnik", { id: id, name: name });

  const openNoveUbytovanie = () =>
    showModal("tabulkaUbytovania", { id: { id }, name: { name } });

  return (
    <div className="ubytovania">
      <div className="header">
        <div className="nadpis">Ubytovania</div>
        <div className="buttons">
          <button onClick={openNovyNajomnik}>Pridať nájomníka</button>
          <button onClick={openNoveUbytovanie}>Pridať ubytovanie</button>
          <button>Vyhľadať</button>
        </div>
      </div>
      <div className="content">
        <UbytovaniaTable />
      </div>
    </div>
  );
}
