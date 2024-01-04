import { RootObjectTypes, nameOfItemField } from "@/BULK_JSON_TYPES";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import Image from "next/image";
import { ReactNode, useState } from "react";
import AttributeDetails from "../components/SearchComponents/AttributeDetails";
import GeneralData from "../components/SearchComponents/GeneralData";
import ItemData from "../components/SearchComponents/ItemData";
import MRPData from "../components/SearchComponents/MRPData";
import PlantDetails from "../components/SearchComponents/PlantDetails";
import SalesAndOthers from "../components/SearchComponents/SalesAndOthers";
import VendorAndCodeLogics from "../components/SearchComponents/VendorAndCodeLogics";
import "./ConfigDialog.scss";
type ConfigDialogProps = {
  open: boolean;
  data: RootObjectTypes | null;
  handleClose: () => void;
};
type TabRenderData = {
  [key: string]: ReactNode;
};
export default function ConfigDialog({
  open,
  data,
  handleClose,
}: ConfigDialogProps) {
  const tabsData = [
    "TechnicalData",
    "AttributeDetails",
    "EquipmentAndVendorDetails",
    "Plant",
    "MRPData",
    "SalesAndOthers",
    "General",
  ];
  const tabRenderData: TabRenderData = {
    TechnicalData: <ItemData data={data} />,
    EquipmentAndVendorDetails: <VendorAndCodeLogics data={data} />,
    AttributeDetails: <AttributeDetails data={data} />,
    Plant: <PlantDetails data={data} />,
    MRPData: <MRPData data={data} />,
    SalesAndOthers: <SalesAndOthers data={data} />,
    General: <GeneralData data={data} />,
  };
  const [tabsValue, settabsValue] = useState("TechnicalData");
  const tabsValueChangeHandler = (
    _event: React.SyntheticEvent,
    newValue: string
  ) => {
    settabsValue(newValue);
  };
  return (
    <Dialog maxWidth="xl" fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle
        sx={{ padding: "5px 10px", fontSize: "18px", color: "#4c4b4bcb" }}
      >
        <p> Material Specification </p>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            padding: 0,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        dividers={true}
        sx={{
          padding: "10px 3px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <main className="config-dialog-grid-section-wrapper">
          <div className="config-dialog-grid-section-header-img-txt-div">
            <Image
              src={"/Images/boltsnuts.jpg"}
              alt={`Bold preview`}
              height={100}
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <div className="config-dialog-grid-section-header-nun-mdfr-text">
              {nameOfItemField.map((dta) => (
                <section className="label-select-section" key={dta}>
                  <p className="label-select-section-report-field">{dta} :</p>
                  <p className="label-select-section-report-text">
                    {data ? (data as any)[dta] : `No ${dta}`}
                  </p>
                </section>
              ))}
            </div>
          </div>
          <Tabs
            value={tabsValue}
            onChange={tabsValueChangeHandler}
            sx={{
              borderBottom: ".5px solid #c5ccd4",
            }}
            //   variant="fullWidth"
          >
            {tabsData.map((data: string) => (
              <Tab
                key={data}
                label={data.replace(/([a-z])([A-Z])/g, "$1 $2")}
                value={data}
              />
            ))}
          </Tabs>

          {tabRenderData[tabsValue]}
        </main>
      </DialogContent>
      <DialogActions sx={{ padding: "5px 10px" }}>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
