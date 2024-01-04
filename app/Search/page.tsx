"use client";
import {
  Autocomplete,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { SelectChangeEvent } from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import React, { ChangeEvent, useMemo, useState } from "react";
import { RootObjectTypes } from "../../BULK_JSON_TYPES";
import MaterialJSON from "../../MATERIAL_DATA.json";
import UserJSON from "../../USER_DATA.json";

import {
  MaterialSearchColumn,
  UserSearchColumn,
} from "../components/TableSource";
import ConfigDialog from "./ConfigDialog";
import "./style.scss";
type UserProps = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
  plant: string;
};
type MaterialProps = {
  Itemcode: string;
  Materialcode: string;
  Noun: string;
  Modifier: string;
  UOM: string;
  Legacy: string;
  Shortdesc: string;
  Longdesc: string;
  Additionalinfo: string;
  ItemStatus: string;
};
type TableDataProps = {
  User: UserProps[];
  Material: MaterialProps[];
};
export default function Search() {
  const [SelectedMtlData, setSelectedMtlData] =
    useState<RootObjectTypes | null>(null);
  // const [ViewDialod, setViewDialod] = useState(false);
  // const DialogSelectedViewHandler = () => {
  //   setViewDialod(!ViewDialod);
  // };
  const [ViewConfigDialog, setViewConfigDialog] = useState(false);
  const DialogConfigViewHandler = () => {
    setViewConfigDialog(!ViewConfigDialog);
  };

  const [selectTable, setselectTable] = useState<string>("Material");
  const handleChangeTable = (e: SelectChangeEvent) => {
    setselectTable(e.target.value as string);
    setselectFields("");
    setsubSelectedFields("");
  };
  const [text, setText] = useState("");
  const HandleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const [selectFields, setselectFields] = useState("Noun");
  const [subSelectedFields, setsubSelectedFields] = useState("Shortdesc");
  const handleChangeFields = (e: SelectChangeEvent) => {
    setselectFields(e.target.value);
  };
  const handleChangeSubFields = (e: SelectChangeEvent) => {
    setsubSelectedFields(e.target.value);
  };
  const materialArrayHeading = [
    "Itemcode",
    "Materialcode",
    "Noun",
    "Modifier",
    "UOM",
    "Legacy",
    "Shortdesc",
    "Longdesc",
    "Additionalinfo",
    "ItemStatus",
  ];
  const userArrayHeading = [
    "first_name",
    "last_name",
    "email",
    "gender",
    "ip_address",
    "plant",
  ];
  const TableTotalList = ["User", "Material", "SampData"];
  const selectMenuItemStyle = {
    fontSize: "14px",
    color: "brown",
  };
  const userJSONWithType: readonly UserProps[] = UserJSON;
  const materialJSONWithType: readonly MaterialProps[] = MaterialJSON;
  const SampDataJSON: RootObjectTypes[] = require("../../sam_data.json");

  // Explicit type assertion
  const sampDataJSONWithType = SampDataJSON as RootObjectTypes[];
  console.log(typeof SampDataJSON, SampDataJSON instanceof Array);
  const TableValue = {
    User: userJSONWithType,
    Material: materialJSONWithType,
    SampData: sampDataJSONWithType,
  };
  const TableFields = {
    User: userArrayHeading,
    Material: materialArrayHeading,
    SampData: materialArrayHeading,
  };
  // Type guard to check if selectTable is a valid key
  const isValidTable = (key: string): key is keyof typeof TableFields => {
    return TableTotalList.includes(key);
  };

  // Use type guard to access the property
  const SelctTblFld = isValidTable(selectTable)
    ? TableFields[selectTable] ?? []
    : [];

  const subSelctTblFld = SelctTblFld.filter((data) => data !== selectFields);

  const SuggestTblDta = TableValue[selectTable as keyof typeof TableValue] as (
    | UserProps
    | MaterialProps
  )[];
  const ColumnSelect =
    selectTable === "User" ? UserSearchColumn : MaterialSearchColumn;

  const Compo = ({ higlight, value }: { higlight: any; value: any }) => {
    return <p>{getHighlightedText(value, higlight)}</p>;
  };

  function getHighlightedText(text: any, higlight: any) {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text?.toString().split(new RegExp(`(${higlight})`, "gi"));
    return parts?.map((part: any, index: number) => (
      <React.Fragment key={index}>
        {part.toLowerCase() === higlight.toLowerCase() ? (
          <b /* style={{ backgroundColor: "#e8bb49" }} */>{part}</b>
        ) : (
          part
        )}
      </React.Fragment>
    ));
  }
  const actionSampDataColumn: GridColDef[] = [
    {
      field: "view",
      headerName: "View",
      headerClassName: "super-app-theme--header",
      flex: 1,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={() => {
              setSelectedMtlData(params.row);
              // DialogSelectedViewHandler();
              DialogConfigViewHandler();
            }}
          >
            <VisibilityIcon sx={{ fontSize: "1rem", color: "#16537e" }} />
          </IconButton>
        );
      },
    },
  ];
  // Utility function to remove special characters from a string
  const removeSpecialCharacters = (str: string): string => {
    return str?.replace(/[^\w\s]/gi, ""); // Replace any non-word characters (excluding spaces)
  };
  const FilteredData = useMemo(() => {
    // return SuggestTblDta?.filter((data) => {
    //   return (data as Record<string, string>)["Longdesc"]
    //     ?.toLowerCase()
    //     .includes(text?.toLocaleLowerCase());
    // });
    const searchTerms = text
      .toLowerCase()
      .split(/[ ,]+/) // Split the search text by spaces and commas
      .filter((term) => term.trim() !== ""); // Remove empty terms

    return SuggestTblDta?.filter((data) => {
      const longdesc = (data as Record<string, string>)[
        "Longdesc"
      ]?.toLowerCase();

      // Check if all search terms are present in the Longdesc
      return searchTerms.every((term) => longdesc?.includes(term));
    });
  }, [SuggestTblDta, text]);
  const sgstTenText = FilteredData?.slice(0, 6);
  return (
    <div className="Search-wrapper-whole-div">
      <div className="top-search-wrapper-section">
        <Autocomplete
          options={sgstTenText ?? []}
          forcePopupIcon={false}
          autoHighlight
          getOptionLabel={(option: string | UserProps | MaterialProps) => {
            if (typeof option === "string") {
              return option;
            } else {
              return selectFields in option
                ? (option as Record<string, string>)["Longdesc"]
                : "";
            }
          }}
          fullWidth
          renderOption={(props, option: string | UserProps | MaterialProps) => (
            <li
              style={{
                fontSize: "12px",
                width: "100%",
              }}
              {...props}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {typeof option === "string" ? (
                  option
                ) : (
                  <>
                    {selectFields in option ? (
                      <Compo
                        key={(option as Record<string, string>)[selectFields]}
                        value={(option as Record<string, string>)[selectFields]}
                        higlight={text}
                      />
                    ) : (
                      ""
                    )}

                    <p
                      style={{
                        marginLeft: "10px",
                        opacity: "0.6",
                        color: "brown",
                        fontSize: "12px",
                        textAlign: "left",
                        width: "50%",
                      }}
                    >
                      {(option as Record<string, string>)[subSelectedFields]}
                    </p>
                  </>
                )}
              </div>
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search here..."
              id="Search-input-unique-id"
              value={text}
              onChange={HandleSearchText}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "14px", // Set your desired font size
                },
                "& input::placeholder": {
                  color: "#8B4513",
                  opacity: ".8",
                  fontSize: "14px", // Set your desired placeholder font size
                },
              }}
              size="small"
              fullWidth
            />
          )}
        />

        <Select
          value={selectTable}
          onChange={handleChangeTable}
          sx={{ width: "20rem", height: "38px", fontSize: "14px" }}
          renderValue={(value) =>
            value.length > 0 ? value.toString() : "Select Table"
          }
        >
          <MenuItem sx={selectMenuItemStyle} value={""} disabled>
            Select Table
          </MenuItem>
          {TableTotalList.map((data) => {
            const CplData = data.charAt(0).toUpperCase() + data.slice(1);
            return (
              <MenuItem sx={selectMenuItemStyle} key={data} value={data}>
                {CplData}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          value={selectFields}
          onChange={handleChangeFields}
          sx={{ width: "20rem", height: "38px", fontSize: "14px" }}
          renderValue={(value) =>
            value.length > 0 ? value.toString() : "Select Fields"
          }
        >
          <MenuItem sx={selectMenuItemStyle} value={""} disabled>
            Select Fields
          </MenuItem>
          {SelctTblFld?.map((data: string) => (
            <MenuItem sx={selectMenuItemStyle} key={data} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
        {selectFields.length > 0 ? (
          <Select
            value={subSelectedFields}
            onChange={handleChangeSubFields}
            sx={{ width: "20rem", height: "38px", fontSize: "14px" }}
            renderValue={(value) =>
              value.length > 0 ? value.toString() : "Select SubField"
            }
          >
            <MenuItem sx={selectMenuItemStyle} value={""} disabled>
              Select SubField
            </MenuItem>
            {subSelctTblFld?.map((data: string) => (
              <MenuItem sx={selectMenuItemStyle} key={data} value={data}>
                {data}
              </MenuItem>
            ))}
          </Select>
        ) : (
          ""
        )}
        {/* <IconButton
          onClick={() => {
            // DialogConfigViewHandler();
            DialogSelectedViewHandler();
          }}
        >
          <SettingsIcon sx={{ fontSize: "1.3rem", color: "#535353" }} />
        </IconButton> */}
      </div>
      {selectTable.length > 0 ? (
        <Paper
          style={{
            width: "99%",
            height: "90%",
            padding: 0,
            margin: 0,
          }}
        >
          <DataGrid
            rows={FilteredData ?? []}
            columns={ColumnSelect.concat(actionSampDataColumn)}
            sx={{ fontSize: "12px" }}
            getRowId={(row) => row.Itemcode}
            disableRowSelectionOnClick
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[10, 25, 50, 100]}
          />
        </Paper>
      ) : (
        ""
      )}
      {/* <ViewDialog
        open={ViewDialod}
        handleClose={DialogSelectedViewHandler}
        data={SelectedMtlData}
      /> */}
      <ConfigDialog
        open={ViewConfigDialog}
        handleClose={DialogConfigViewHandler}
        data={SelectedMtlData}
      />
    </div>
  );
}
