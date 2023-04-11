import React, { useMemo, useContext } from "react";
import MaterialReactTable from "material-react-table";
import data from "../assets/jsonData/lozka.json";

// import AppContext from "../helpers/AppContext";
import ModalContext from "../helpers/ModalContext";

export default function LozkaTable() {
  // const { id, name } = useContext(AppContext);
  const { showModal } = useContext(ModalContext);

  const columns = useMemo(
    () => [
      {
        accessorKey: "roomCode",
        header: "Room Code"
      },
      {
        accessorKey: "type",
        header: "Type"
      },
      {
        accessorKey: "entrance",
        header: "Entrance"
      },
      {
        accessorKey: "floor",
        header: "Floor"
      },
      {
        accessorKey: "appartement",
        header: "Appartement"
      },
      {
        accessorKey: "bed",
        header: "Bed"
      },
      {
        accessorKey: "typeApp",
        header: "Type App"
      },
      {
        accessorKey: "roomStatus",
        header: "Room Status"
      },
      {
        accessorKey: "comment",
        header: "Comment"
      },
      {
        accessorKey: "uid",
        header: "UID"
      },
      {
        accessorKey: "dateStart",
        header: "Date Start"
      },
      {
        accessorKey: "dateEnd",
        header: "Date End"
      }
    ],
    []
  );

  const openNovyNajomnik = (id, name) => {
    showModal("novyNajomnik", {
      lozko: { id, name },
      spolocnost: { id, name }
    });
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      // enableRowSelection
      enableColumnOrdering
      enableGlobalFilter={false}
      enableRowActions={false}
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => {
          const id = row.original.id;
          const name = row.original.name;
          openNovyNajomnik(id, name);
        },

        sx: {
          cursor: "pointer"
        }
      })}
    />
  );
}
