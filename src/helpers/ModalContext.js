// ModalContext
import React, { useState } from "react";
import Lozko from "../forms/Lozko";
import Najomnik from "../forms/Najomnik";
import Spolocnost from "../forms/Spolocnost";
import Ubytovanie from "../forms/Ubytovanie";

const ModalContext = React.createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const contextMap = {
    novyNajomnik: (props) => [
      () => <Najomnik {...props.najomnik} />,
      () => <Spolocnost {...props.spolocnost} />
    ],
    noveLozko: (props) => [() => <Lozko {...props.lozko} />],
    noveUbytovanie: (props) => [() => <Ubytovanie {...props.ubytovanie} />],

    tabulkaUbytovania: (props) => [
      () => <Najomnik {...props.najomnik} />,
      () => <Lozko {...props.lozko} />,
      () => <Spolocnost {...props.spolocnost} />
    ],
    tabulkaNajomnici: (props) => [
      () => <Najomnik {...props.najomnik} />,
      () => <Spolocnost {...props.spolocnost} />
    ],
    tabulkaLozka: (props) => [
      () => <Lozko {...props.lozko} />,
      () => <Najomnik {...props.najomnik} />
    ]
  };

  const showModal = (context, props) => {
    const content =
      contextMap[context]?.(props).map((Component, index) => (
        <React.Fragment key={index}>
          <Component />
        </React.Fragment>
      )) || null;

    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalOpen(false);
  };

  const value = {
    modalContent,
    modalOpen,
    showModal,
    closeModal
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContext;

//takto treba volat Modal
// const openNoveLozka = () => {
//   showModal("noveLozko", {
//     lozko: { id, name },
//     spolocnost: { id: id, name: name }
//   });
// };
