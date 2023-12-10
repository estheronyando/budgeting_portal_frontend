import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Cstatus from "../login/cstatus";

export const Search = (props) => {
  const [projectId, setProjectId] = useState("");
  const myProjectId = useRef("");

  const mcc = React.useContext(Cstatus);
  const { setMcname } = React.useContext(Cstatus);
  const [projectList, setProjectList] = useState([]);

  const handleSearchTicket = (e) => {
    setProjectId(e.target.value);
  };

  useEffect(() => {
    // ... other useEffect logic if needed
  }, [projectList]);

  const fetchBudgetDetails = async (projectId) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/projects/details",
        { projectId }
      );

      if (response.status === 200) {
        const combinedDetails = {
          project: response.data.project,
          budget: response.data.budget,
        };

        // Update project list with combined details
        setProjectList([combinedDetails]);

        // Set route and other details if needed
        const mv = {
          statu: mcc.mcname["statu"],
          menu: mcc.mcname["menu"],
          company: mcc.mcname["company"],
          login: mcc.mcname["login"],
          user: mcc.mcname["user"],
          manager: mcc.mcname["managerstatus"],
          admin: mcc.mcname["adminstatus"],
          myroute: 9, // Update with the actual route number
          incidentno: projectId,
        };
        setMcname(mv);
      } else {
        // Handle unexpected response status
        alert("Error fetching budget details");
        setProjectList([]);
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching budget details");
      setProjectList([]);
    }
  };

  const handleSearch = () => {
    setProjectList([]); // Clear project list

    if (projectId.length > 3) {
      let p = "";
      if (projectId.length > 0) p = projectId[0];

      if (projectId.length === 15 && p === "B") {
        // Search project by budget
        fetchBudgetDetails(projectId);
      } else {
        alert("Invalid project ID");
      }
    }
  };

  const searchIcon = () => {
    handleSearch();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <TextField
        value={projectId}
        label="Search project ID"
        variant="outlined"
        onChange={handleSearchTicket}
        sx={{ width: 250 }}
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment: (
            <IconButton onClick={searchIcon}>
              <FaSearch className="fa-solid fa-coffee fa-xl cursor-default w-7 h-7 text-green-600" />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};