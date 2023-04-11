import React, { useContext } from "react";
import AppContext from "../helpers/AppContext";
import useAlerts from "../helpers/useAlerts";

const Settings = () => {
  const { id } = useContext(AppContext);
  const { showConfirmationAlert, showSuccessAlert } = useAlerts();

  const handleOk = () => {
    console.log("OK button clicked");
    showSuccessAlert("Úspech!", "Úspešne ste pokračovali.");
  };

  const handleNok = () => {
    console.log("NOK button clicked");
    showSuccessAlert("Úspech!", "Úspešne ste nepokračovali.");
  };

  const handleClick = () => {
    const title = "Potvrdenie";
    const text = "Chcete pokračovať?";
    showConfirmationAlert(title, text, handleOk, handleNok);
  };

  return (
    <div>
      <button onClick={handleClick}>Nastavenia pre {id}</button>
    </div>
  );
};

export default Settings;
