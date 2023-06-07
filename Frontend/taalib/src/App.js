import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/pages/login";
import Home from "./components/pages/home";

import ManageAccOfficer from "./components/pages/AccountOfficer/AccOffmanageScreen";
import RegisterAccOfficer from "./components/pages/AccountOfficer/registerAccOfficer";
import AccOffInfo from "./components/pages/AccountOfficer/AccOffInfo";
import DeleteAccOfficer from "./components/pages/AccountOfficer/DeleteAccOfficer";
import AccOffDelete from "./components/pages/AccountOfficer/delete";
import EditAccOfficer from "./components/pages/AccountOfficer/editAccOfficer";
import ViewAccOfficer from "./components/pages/AccountOfficer/viewAccOfficer";

///////////////////////////////////////////////////////////////////////////////////////////
import ManageAcaOfficer from "./components/pages/AcademicOfficer/AcaOffmanageScreen";
import RegisterAcaOfficer from "./components/pages/AcademicOfficer/registerAcaOfficer";
import AcaOffInfo from "./components/pages/AcademicOfficer/AcaOffInfo";
import DeleteAcaOfficer from "./components/pages/AcademicOfficer/DeleteAcaOfficer";
import AcaOffDelete from "./components/pages/AcademicOfficer/delete";
import EditAcaOfficer from "./components/pages/AcademicOfficer/editAcaOfficer";
//import ViewAcaOfficer from "./components/pages/AcademicOfficer/viewAcaOfficer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ManageAccOfficer" element={<ManageAccOfficer />} />

        <Route
          path="/ManageAccOfficer/registerAccOfficer"
          element={<RegisterAccOfficer />}
        />

        <Route
          path="/ManageAccOfficer/RegisterAccOfficer/AccOffInfo"
          element={<AccOffInfo />}
        />

        <Route path="/ManageAccOfficer/DeleteAccOfficer" element={<DeleteAccOfficer />} />
        <Route path="/ManageAccOfficer/DeleteAccOfficer/AccOffInfo" element={<AccOffDelete />} />

        <Route path="/ManageAccOfficer/EditAccOfficer" element={<EditAccOfficer />} />

        <Route
          path="/ManageAccOfficer/EditAccOfficer/AccOffInfo"
          element={<AccOffInfo />}
        />

        <Route path="/ManageAccOfficer/viewAccOfficer" element={<ViewAccOfficer />} />
        <Route
          path="/ManageAccOfficer/viewAccOfficer/SearchResult"
          element={<AccOffInfo />}
        />
///////////////////////////////////////////////////////////////////////////////////////
        <Route path="/ManageAcaOfficer" element={<ManageAcaOfficer />} />

        <Route
          path="/ManageAcaOfficer/registerAcaOfficer"
          element={<RegisterAcaOfficer />}
        />

        <Route
          path="/ManageAcaOfficer/RegisterAcaOfficer/AcaOffInfo"
          element={<AcaOffInfo />}
        />

        <Route path="/ManageAcaOfficer/DeleteAcaOfficer" element={<DeleteAcaOfficer />} />
        <Route path="/ManageAcaOfficer/DeleteAcaOfficer/AcaOffInfo" element={<AcaOffDelete />} />

        <Route path="/ManageAcaOfficer/EditAcaOfficer" element={<EditAcaOfficer />} />

        <Route
          path="/ManageAcaOfficer/EditAcaOfficer/AcaOffInfo"
          element={<AcaOffInfo />}
        />

        {/* <Route path="/ManageAcaOfficer/viewAcaOfficer" element={<ViewAcaOfficer />} />
        <Route
          path="/ManageAcaOfficer/viewAcaOfficer/SearchResult"
          element={<AcaOffInfo />}
        /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
