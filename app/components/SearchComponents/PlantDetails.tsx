import { RootObjectTypes } from "@/BULK_JSON_TYPES";

type ItemDataProps = {
  data: RootObjectTypes | null;
};
export default function PlantDetails({ data }: ItemDataProps) {
  const nameOfItemField = [
    "Plant",
    "Profit Center",
    "Storage Location",
    "Storage Bin",
    "Valuation Class",
    "Valuation Type",
    "Price Control",
    "Standard Price",
    "Standard Price",
    "Moving Avg Price",
    "Valuation",
    "Cattegory",
    "Variance key",
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
