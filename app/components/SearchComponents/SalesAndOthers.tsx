import { RootObjectTypes } from "@/BULK_JSON_TYPES";

type ItemDataProps = {
  data: RootObjectTypes | null;
};
export default function SalesAndOthers({ data }: ItemDataProps) {
  // const numOfFieldsArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const nameOfItemField = [
    "Account Assignment Category",
    "Tax Classification Group",
    "Item Category Group",
    "Sales Organazation",
    "Distribution Channel",
    "Material Strategic Group",
    "Purchasing Group",
    "Purchasing Value Key",
  ];

  return (
    <section className="without-height-section">
      {nameOfItemField.map((dta) => (
        <section className="label-select-section" key={dta}>
          <p className="label-select-section-report-field">{dta} </p>
          <span>:</span>
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
