import React, { useMemo, useContext } from "react";
import MaterialReactTable from "material-react-table";
import data from "../assets/jsonData/najomnici.json";

// import AppContext from "../helpers/AppContext";
import ModalContext from "../helpers/ModalContext";

export default function NajomniciTable() {
  // const { id, name } = useContext(AppContext);
  const { showModal } = useContext(ModalContext);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID"
      },
      {
        accessorKey: "uid",
        header: "UID"
      },
      {
        accessorKey: "name",
        header: "Name"
      },
      {
        accessorKey: "surname",
        header: "Surname"
      },
      {
        accessorKey: "birthDate",
        header: "Birth Date"
      },
      {
        accessorKey: "sex",
        header: "Sex"
      },
      {
        accessorKey: "nationality",
        header: "Nationality"
      },
      {
        accessorKey: "phone",
        header: "Phone"
      },
      {
        accessorKey: "address",
        header: "Address"
      },
      {
        accessorKey: "roomCode",
        header: "Room Code"
      },
      {
        accessorKey: "company",
        header: "Company"
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
