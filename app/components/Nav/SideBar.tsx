"use client";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SideBar.scss";

export default function SideBar({ OpenSideBar }: { OpenSideBar: boolean }) {
  const currentRoute = usePathname();

  return (
    <div className={OpenSideBar ? "full-side-bar" : "side-bar"}>
      {OpenSideBar ? (
        <>
          <header>
            <TextField
              size="small"
              id="search-sidebar"
              variant="standard"
              placeholder="Search here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#535353", marginTop: "15px" }} />
                  </InputAdornment>
                ),
                type: "search",
              }}
            />
          </header>
          <nav className="NavBar-links">
            <p>Tool Configration </p>
            <ul>
              {/* <li className="active-ul-li">Create User</li> */}
              <li
                className={
                  currentRoute === "/MaterialMaster" ? "active-ul-li" : ""
                }
              >
                <Link href="/MaterialMaster">Dynamic Form</Link>
              </li>
              <li
                className={
                  currentRoute === "/AssetMaster" ? "active-ul-li" : ""
                }
              >
                <Link href="/AssetMaster">Form Table</Link>
              </li>
              <li
                className={
                  currentRoute === "/WorkflowConfiguration"
                    ? "active-ul-li"
                    : ""
                }
              >
                <Link href="/WorkflowConfiguration">Workflow Config</Link>
              </li>
              <li className={currentRoute === "/Search" ? "active-ul-li" : ""}>
                <Link href="/Search">Search</Link>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
