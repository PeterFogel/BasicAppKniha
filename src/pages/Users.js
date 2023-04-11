import React, { useContext } from "react";
import AppContext from "../helpers/AppContext";
import ModalContext from "../helpers/ModalContext";

const Users = () => {
  const { id, name } = useContext(AppContext);
  const { showModal } = useContext(ModalContext);

  const handleClick = () => {
    showModal(
      <div>
        <h2>Detaily produktu: {id}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
          libero ligula. Nam nec velit euismod, faucibus urna eget, laoreet
          eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin pretium, dolor sed dictum facilisis,
          mauris magna iaculis velit, nec porttitor mauris nisl ut nisi. Sed
          volutpat elit ut quam vehicula iaculis. Ut at ante nisi.{" "}
        </p>
        <p>
          Aliquam erat volutpat. Fusce eget diam fringilla, viverra elit nec,
          mattis elit. Fusce pharetra urna non libero dignissim commodo. Sed
          commodo diam diam, non scelerisque metus dictum vel. In dapibus tortor
          nec quam ultricies, nec laoreet tortor blandit. Fusce ullamcorper
          ornare volutpat. Pellentesque in nisl dolor.{" "}
        </p>
        <ul>
          <li>Velmi kvalitné spracovanie</li>
          <li>Moderný design</li>
          <li>Vhodný pre použitie doma aj v práci</li>
        </ul>
        <button>Kúpiť produkt</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Užívatelia</h1>
      <p>ID: {id}</p>
      <p>Meno: {name}</p>
      <button onClick={handleClick}>zobraz modal</button>
      <button
        onClick={() => {
          showModal(<div>Iny modal s ID: {id}</div>);
        }}
      >
        zobraz modal2
      </button>
    </div>
  );
};

export default Users;
