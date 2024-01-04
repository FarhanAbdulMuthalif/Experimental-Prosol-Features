import { RootObjectTypes } from "@/BULK_JSON_TYPES";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
type ItemDataProps = {
  data: RootObjectTypes | null;
};
export default function ItemData({ data }: ItemDataProps) {
  const selectMenuItemStyle = {
    fontSize: "12px",
    color: "brown",
  };
  const selectStyle = {
    fontSize: "12px",
    color: "brown",
    height: "38px",
    // fontWeight: "500",
  };
  const numOfFieldsArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const nameOfItemField = [
    "Noun",
    "Modifier",
    "Itemcode",
    "Materialcode",
    "Legacy",
    "Shortdesc",
    "Longdesc",
    "Additionalinfo",
  ];
  const [ItemDataSet, setItemDataSet] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
  });
  const SelectItemDataSetHandler = (e: SelectChangeEvent, value: string) => {
    setItemDataSet((prev) => {
      return { ...prev, [value as string]: e.target.value };
    });
  };
  console.log(ItemDataSet);
  return (
    <section className="without-height-section">
      {nameOfItemField.map((dta) => (
        <section className="label-select-section" key={dta}>
          <p className="label-select-section-report-field">{dta} </p>
          <span style={{ paddingRight: "5px" }}>:</span>
          <p className="label-select-section-report-text">
            {data ? (
              (data as any)[dta] ? (
                (data as any)[dta]
              ) : (
                <p style={{ textAlign: "center" }}>-</p>
              )
            ) : (
              ""
            )}
          </p>
        </section>
      ))}
    </section>
  );
}
