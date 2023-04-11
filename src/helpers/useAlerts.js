import { useCallback } from "react";
import Swal from "sweetalert2";

const useAlerts = () => {
  const showConfirmationAlert = useCallback(
    async (title, text, handleOk, handleNok) => {
      const result = await Swal.fire({
        title: title,
        text: text,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "NOK"
      });

      if (result.isConfirmed) {
        handleOk();
      } else if (result.isDismissed) {
        handleNok();
      }
    },
    []
  );

  const showSuccessAlert = useCallback(async (title, text) => {
    await Swal.fire({
      title: title,
      text: text,
      icon: "success",
      confirmButtonText: "OK"
    });
  }, []);

  const showErrorAlert = useCallback(async (title, text) => {
    await Swal.fire({
      title: title,
      text: text,
      icon: "error",
      confirmButtonText: "OK"
    });
  }, []);

  const showWarningAlert = useCallback(async (title, text) => {
    await Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      confirmButtonText: "OK"
    });
  }, []);

  const showInfoAlert = useCallback(async (title, text) => {
    await Swal.fire({
      title: title,
      text: text,
      icon: "info",
      confirmButtonText: "OK"
    });
  }, []);

  const showPasswordAlert = useCallback(async (handleOk) => {
    const result = await Swal.fire({
      title: "Zadaj heslo:",
      input: "password",
      showCancelButton: true,
      confirmButtonText: "Potvrdiť",
      cancelButtonText: "Zrušiť"
    });

    if (result.isConfirmed && result.value === "heslo") {
      handleOk();
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
  }, []);

  return {
    showConfirmationAlert,
    showSuccessAlert,
    showErrorAlert,
    showWarningAlert,
    showInfoAlert,
    showPasswordAlert
  };
};

export default useAlerts;
