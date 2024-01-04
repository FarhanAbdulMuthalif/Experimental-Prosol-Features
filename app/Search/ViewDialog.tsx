import {
  Characteristic,
  RootObjectTypes,
  Vendorsuppliers,
} from "@/BULK_JSON_TYPES";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import "./ViewDialog.scss";
type ViewDialogProps = {
  open: boolean;
  data: RootObjectTypes | null;
  handleClose: () => void;
};
export default function ViewDialog({
  open,
  data,
  handleClose,
}: ViewDialogProps) {
  const itemDataKeyArr = [
    "Itemcode",
    "Materialcode",
    "Legacy",
    "Shortdesc",
    "Longdesc",
    "Noun",
    "Modifier",
    "Additionalinfo",
  ];
  const equipmentDataKeyArr = [
    "Name",
    "Manufacturer",
    "Modelno",
    "Tagno",
    "Serialno",
    "Additionalinfo",
  ];
  const tableStyle = {
    fontSize: "12px",
    fontWeight: "600",
    border: ".5px solid #e3e3e3",
  };
  const vendorDataKeyArr = ["Name", "Type"];
  console.log(data);
  return (
    <Dialog maxWidth="xl" fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle sx={{ padding: "5px 10px" }}>
        Material Specifications
      </DialogTitle>
      <DialogContent dividers={true} sx={{ padding: "0" }}>
        <main className="dialog-grid-section-wrapper">
          <section className="dialog-grid-section">
            <div className="heading-onreport-vew-details">
              <p>ITEM DATA</p>
            </div>
            {itemDataKeyArr.map((dta) => (
              <div key={dta} className="content-onreport-vew-details">
                <p className="key-onreport-vew-details">{dta}</p>
                <p className="value-onreport-vew-details">
                  {data ? (data as any)[dta] : ""}
                </p>
              </div>
            ))}
            <div className="heading-onreport-vew-details">
              <p>VENDOR SUPPLIERS </p>
            </div>

            {data && (data as any).Vendorsuppliers
              ? (data as any).Vendorsuppliers.map((vData: Vendorsuppliers) => (
                  <>
                    <div
                      key={vData.Name}
                      className="content-onreport-vew-details"
                    >
                      <p className="key-onreport-vew-details">Name</p>
                      <p className="value-onreport-vew-details">{vData.Name}</p>
                    </div>
                    <div
                      key={vData.Name}
                      className="content-onreport-vew-details"
                      style={{ marginBottom: "8px" }}
                    >
                      <p className="key-onreport-vew-details">Type</p>
                      <p className="value-onreport-vew-details">{vData.Type}</p>
                    </div>
                  </>
                ))
              : ""}

            <div className="heading-onreport-vew-details">
              <p>CODE LOGICS</p>
            </div>

            <div className="content-onreport-vew-details">
              <p className="key-onreport-vew-details">UNSPSC</p>
              <p className="value-onreport-vew-details">
                {data ? (data as any)["Unspsc"] : ""}
              </p>
            </div>
            <div className="content-onreport-vew-details">
              <p className="key-onreport-vew-details">HSNID</p>
              <p className="value-onreport-vew-details">
                {data ? (data as any)["HSNID"] : ""}
              </p>
            </div>
          </section>
          <section className="dialog-grid-section">
            <div className="heading-onreport-vew-details">
              <p>ATTRIBUTE DETAILS</p>
            </div>
            <TableContainer>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={tableStyle} align="left">
                      Attribute
                    </TableCell>
                    <TableCell sx={tableStyle} align="left">
                      Value
                    </TableCell>
                    <TableCell sx={tableStyle} align="left">
                      Unit
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    (data as any)?.Characteristics?.map(
                      (row: Characteristic) => (
                        <TableRow key={row.Characteristic}>
                          <TableCell sx={tableStyle} align="left">
                            {row.Characteristic}
                          </TableCell>
                          <TableCell sx={tableStyle} align="left">
                            {row.Value}
                          </TableCell>
                          <TableCell sx={tableStyle} align="left">
                            {row.UOM}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="heading-onreport-vew-details">
              <p>EQUIPMENT DETAILS</p>
            </div>
            {equipmentDataKeyArr.map((dta) => (
              <div key={dta} className="content-onreport-vew-details">
                <p className="key-onreport-vew-details">{dta}</p>
                <p className="value-onreport-vew-details">
                  {data && (data as any).Equipment
                    ? (data as any).Equipment[dta]
                    : ""}
                </p>
              </div>
            ))}
          </section>
          <section className="dialog-grid-section">
            <div className="heading-onreport-vew-details">
              <p>PLANT</p>
            </div>

            <div className="content-onreport-vew-details">
              <p className="key-onreport-vew-details">Plant</p>
              <p className="value-onreport-vew-details">
                {data ? (data as any)["Plant"] : ""}
              </p>
            </div>

            <div className="heading-onreport-vew-details">
              <p>IMAGE PREVIEW</p>
            </div>
            <div className="image-dlg-detals-wrapper">
              <Image
                src={"/Images/boltsnuts.jpg"}
                alt={`Bold preview`}
                height={150}
                width={250}
              />
            </div>
          </section>
        </main>
      </DialogContent>
      <DialogActions sx={{ padding: "5px 10px" }}>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
