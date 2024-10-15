/** @format */

import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

interface TableProps {
  data: any[];
  fields: string[];
  action: (row: number) => void;
}

function accessorKeyGenerator(obj: any, prefix = ""): string[] {
  let keys: string[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newPrefix = prefix ? `${prefix}.${key}` : key;

      if (typeof value === "object" && value !== null) {
        keys = keys.concat(accessorKeyGenerator(value, newPrefix));
      } else {
        keys.push(newPrefix);
      }
    }
  }

  return keys;
}

//nested data is ok, see accessorKeys in ColumnDef below

const FeaturedTable: React.FC<TableProps> = ({ data, fields, action }) => {
  const accessorKeys = accessorKeyGenerator(data[0]);

  const columns = fields.map((field, index) => {
    if (field === "Actions") {
      return {
        id: "action",
        header: "Actions",
        // size: 100,
        Cell: ({ row }: { row: any }) => (
          <button onClick={() => action(row.index)}>Edit</button>
        ),
      };
    }

    return {
      accessorKey: accessorKeys[index],
      header: field.toUpperCase(),
    };
  });

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnFilters: false,
    enableGlobalFilter: false,
    enableColumnActions: false,
    enableDensityToggle: false,
    enableColumnResizing: true,
    enableFullScreenToggle: false,
  });

  return <MaterialReactTable table={table} />;
};

export default FeaturedTable;
