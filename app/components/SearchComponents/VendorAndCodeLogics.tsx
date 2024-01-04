import { RootObjectTypes, Vendorsuppliers } from "@/BULK_JSON_TYPES";

export default function VendorAndCodeLogics({
  data,
}: {
  data: RootObjectTypes | null;
}) {
  const nameOfItemField = [
    "Name",
    "Manufacturer",
    "Modelno",
    "Tagno",
    "Serialno",
    "Additionalinfo",
  ];
  return (
    <section className="without-height-section">
      <div className="vdr-cd-logis-div">
        <p className="vdr-cd-logis-div-heading">Equipment Details</p>
        {nameOfItemField.map((dta) => (
          <div className="label-select-div" key={dta}>
            <p className="label-select-div-report-field">{dta} </p>
            <span style={{ paddingRight: "5px" }}>:</span>
            <p className="label-select-div-report-text">
              {data ? (
                (data as any)["Equipment"] ? (
                  (data as any).Equipment[dta]
                ) : (
                  <p style={{ textAlign: "center" }}>-</p>
                )
              ) : (
                ""
              )}
            </p>
          </div>
        ))}
        <div
          key={data ? (data as any)["HSNID"] : ""}
          className="label-select-div"
        >
          <p className="label-select-div-report-field">HSNID </p>
          <span style={{ paddingRight: "5px" }}>:</span>
          <p className="label-select-div-report-text">
            {data ? (data as any)["HSNID"] : ""}
          </p>
        </div>
      </div>
      <div className="vdr-cd-logis-div">
        <p className="vdr-cd-logis-div-heading">Vendor Suppliers</p>
        {data && (data as any).Vendorsuppliers ? (
          (data as any)?.Vendorsuppliers?.map((vData: Vendorsuppliers) => (
            <>
              <div key={vData.Name} className="label-select-div">
                <p className="label-select-div-report-field">Name </p>
                <span style={{ paddingRight: "5px" }}>:</span>
                <p className="label-select-div-report-text">
                  {vData.Name ? vData.Name : " - "}
                </p>
              </div>
              <div
                key={vData.Name}
                className="label-select-div"
                style={{ marginBottom: "8px" }}
              >
                <p className="label-select-div-report-field">Type </p>
                <span style={{ paddingRight: "5px" }}>:</span>
                <p className="label-select-div-report-text">
                  {vData.Type ? vData.Type : " - "}
                </p>
              </div>
            </>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No Vendor Suppliers</p>
        )}
      </div>
    </section>
  );
}
