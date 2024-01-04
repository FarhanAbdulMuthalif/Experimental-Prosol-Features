import { RootObjectTypes } from "@/BULK_JSON_TYPES";
import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function EquipmentDetails({
  data,
}: {
  data: RootObjectTypes | null;
}) {
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
  const numOfFieldsArr = ["1", "2", "3", "4", "5", "6"];
  const nameOfItemField = [
    "Name",
    "Manufacturer",
    "Modelno",
    "Tagno",
    "Serialno",
    "Additionalinfo",
  ];
  const [ItemDataSet, setItemDataSet] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });
  const SelectItemDataSetHandler = (e: SelectChangeEvent, value: string) => {
    setItemDataSet((prev) => {
      return { ...prev, [value as string]: e.target.value };
    });
  };
  console.log(data);
  return (
    <>
      <section className="without-height-section">
        {nameOfItemField.map((dta) => (
          <section className="label-select-section" key={dta}>
            <p className="label-select-section-report-field">{dta} :</p>
            <p className="label-select-section-report-text">
              {data
                ? (data as any)["Equipment"]
                  ? (data as any).Equipment[dta]
                  : `No ${dta}`
                : ""}
            </p>
          </section>
        ))}
      </section>
    </>
  );
}
