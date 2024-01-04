import { Characteristic, RootObjectTypes } from "@/BULK_JSON_TYPES";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function AttributeDetails({
  data,
}: {
  data: RootObjectTypes | null;
}) {
  const tableStyle = {
    fontSize: "10px",
    fontWeight: "600",
    border: ".5px solid #e3e3e3",
  };
  const tableHeaderStyle = {
    fontSize: "12px",
    fontWeight: "600",
    border: ".5px solid #e3e3e3",
    padding: "0 10px",
  };
  const tblData = (data as any)?.Characteristics;
  const moreFieldsCheck = tblData?.length > 7;
  const moreFieldsFirstTbl = tblData?.slice(0, 7);
  const moreFieldsSecondTbl = tblData?.slice(7);
  // console.log(moreFieldsCheck);
  // console.log(moreFieldsFirstTbl);
  // console.log(moreFieldsSecondTbl);
  // console.log(tblData);
  return (
    <section className="without-height-section">
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeaderStyle} align="left">
                Attribute
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="left">
                Value
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="left">
                Unit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {moreFieldsFirstTbl &&
              moreFieldsFirstTbl?.map((row: Characteristic) => (
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
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {moreFieldsSecondTbl?.length > 0 ? (
        <TableContainer>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={tableHeaderStyle} align="left">
                  Attribute
                </TableCell>
                <TableCell sx={tableHeaderStyle} align="left">
                  Value
                </TableCell>
                <TableCell sx={tableHeaderStyle} align="left">
                  Unit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moreFieldsSecondTbl &&
                moreFieldsSecondTbl?.map((row: Characteristic) => (
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
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </section>
  );
}
