import { RootObjectTypes } from "@/BULK_JSON_TYPES";

type ItemDataProps = {
  data: RootObjectTypes | null;
};
export default function MRPData({ data }: ItemDataProps) {
  // const numOfFieldsArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const nameOfItemField = [
    "MRP Type",
    "MRP Controller",
    "LOT Size",
    "Re-Order Point",
    "Procurement Type",
    "Safety Strgy",
    "Planning Strgy Grp",
    "Avail Check",
    "Schedule Margin",
  ];

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
