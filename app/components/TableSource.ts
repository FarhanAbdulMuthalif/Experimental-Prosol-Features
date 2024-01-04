import { GridColDef } from "@mui/x-data-grid";
export const ImportColumns: GridColDef[] = [
  {
    field: "plantName",
    headerClassName: "super-app-theme--header",
    flex: 1,
    headerName: "Plant Name",
  },
  {
    field: "plantCode",
    headerClassName: "super-app-theme--header",
    headerName: "Pant Code",
    /*  renderCell: (params) => {
        return params.row.roles?.map((datarol: any) => datarol.name).join(", ");
      }, */
    flex: 1,
  },
  {
    field: "discription",
    headerClassName: "super-app-theme--header",
    headerName: "Discription",
    flex: 1.5,
  },
];
export const UserSearchColumn: GridColDef[] = [
  {
    field: "email",
    headerClassName: "super-app-theme--header",
    headerName: "Email",
    flex: 1.3,
  },
  {
    field: "first_name",
    headerClassName: "super-app-theme--header",
    headerName: "First Name",
    flex: 1,
  },
  {
    field: "last_name",
    headerClassName: "super-app-theme--header",
    headerName: "Last Name",
    flex: 1,
  },
  {
    field: "ip_address",
    headerClassName: "super-app-theme--header",
    headerName: "IP Adress",
    flex: 1.3,
  },
  {
    field: "plant",
    headerClassName: "super-app-theme--header",
    headerName: "Plant Name",
    flex: 1,
  },
];
export const MaterialSearchColumn: GridColDef[] = [
  {
    field: "Itemcode",
    headerClassName: "super-app-theme--header",
    headerName: "Item Code",
    flex: 1.2,
  },
  {
    field: "Noun",
    headerClassName: "super-app-theme--header",
    headerName: "Noun",
    flex: 1,
  },
  {
    field: "Modifier",
    headerClassName: "super-app-theme--header",
    headerName: "Modifier",
    flex: 1,
  },
  {
    field: "Materialcode",
    headerClassName: "super-app-theme--header",
    headerName: "Material Code",
    flex: 1.2,
  },
  {
    field: "Legacy",
    headerClassName: "super-app-theme--header",
    headerName: "Legacy",
    flex: 1.3,
  },
  {
    field: "Shortdesc",
    headerClassName: "super-app-theme--header",
    headerName: "Short Desc",
    flex: 1.5,
  },
  {
    field: "Longdesc",
    headerClassName: "super-app-theme--header",
    headerName: "Long Desc",
    flex: 2,
  },
  {
    field: "UOM",
    headerClassName: "super-app-theme--header",
    headerName: "UOM",
    flex: 0.5,
  },
  {
    field: "ItemStatus",
    headerClassName: "super-app-theme--header",
    headerName: "Item Status",
    flex: 0.5,
  },
];
export const CatalogeColumns: GridColDef[] = [
  {
    field: "item_code",
    headerClassName: "super-app-theme--header",
    flex: 1,
    headerName: "Item Code",
  },
  {
    field: "material_code",
    headerClassName: "super-app-theme--header",
    headerName: "Material Code",
    /*  renderCell: (params) => {
        return params.row.roles?.map((datarol: any) => datarol.name).join(", ");
      }, */
    flex: 1,
  },
  {
    field: "legacy",
    headerClassName: "super-app-theme--header",
    headerName: "Legacy",
    flex: 1.5,
  },
  {
    field: "short_discription",
    headerClassName: "super-app-theme--header",
    headerName: "Short Discription",
    flex: 1.5,
  },
  {
    field: "long_discription",
    headerClassName: "super-app-theme--header",
    headerName: "Long Discription",
    flex: 1.5,
  },
  {
    field: "noun",
    headerClassName: "super-app-theme--header",
    headerName: "Noun",
    flex: 1,
  },
  {
    field: "modifier",
    headerClassName: "super-app-theme--header",
    headerName: "Modifier",
    flex: 1,
  },
  {
    field: "status",
    headerClassName: "super-app-theme--header",
    headerName: "status",
    flex: 1,
  },
];
