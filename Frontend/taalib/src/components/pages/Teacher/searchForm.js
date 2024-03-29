import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchForm() {
    const navigate = useNavigate();
    const [searchString, setSearchString] = useState("");

    const handleSearch = async (e) => {
    
        let token = localStorage.getItem("user");
        token = JSON.parse(token);
        token = token.token
    e.preventDefault();

    const data = {
      employeeId: String(searchString),
      };

    try {
      const response = await axios.get(
        `http://localhost:3001/api/teacher/retrieve/${data.employeeId}`,
        {
          headers: { Authorization: token },
        }
      );
    
      localStorage.setItem("teacher", JSON.stringify(response.data));
      navigate("/ManageTeacher/ViewTeacher/SearchResult");
    } catch (error) {
      alert("Teacher not found");
    }
  };

  return (
    <div className="container">
      <br />
      <h1>View Teacher Details</h1>
      <h2>Search Teacher</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="name">Employee ID</label>
          <input
            type="String"
            className="form-control"
            id="employeeId"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
         </form>
    </div> 
  );
}

export default SearchForm;
