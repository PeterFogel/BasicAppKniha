import React from "react";
import Swal from "sweetalert2";

const NoContextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handlePassword = () => {
    Swal.fire({
      title: "Zadaj heslo:",
      input: "password",
      showCancelButton: true,
      confirmButtonText: "Potvrdiť",
      cancelButtonText: "Zrušiť"
    }).then((result) => {
      if (result.isConfirmed && result.value === "heslo") {
        setIsAuthenticated(true);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Akcia zrušená",
          icon: "error"
        });
      } else {
        Swal.fire({
          title: "Heslo nesprávne!",
          icon: "error"
        });
      }
    });
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <h1>Stránka bez kontextu</h1>
          <p>Pre pokračovanie na stránke je potrebné zadať heslo.</p>
          <button onClick={handlePassword}>Potvrdiť heslo</button>
        </div>
      ) : (
        <div>
          <h1>Úspešne ste sa prihlásili!</h1>
          <p>Toto je obsah stránky po prihlásení.</p>
          <p>
            Tento obsah môže byť akýkoľvek a bude sa zobrazovať iba používateľom
            s platným heslom.
          </p>
        </div>
      )}
    </div>
  );
};

export default NoContextPage;
