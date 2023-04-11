import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AppContext from "./helpers/AppContext";

import Ubytovania from "./pages/Ubytovania";
import Najomnici from "./pages/Najomnici";
import Lozka from "./pages/Lozka";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { Sidebar } from "./components/Sidebar";
import GlobalModal from "./components/GlobalModal";

const ProtectedRoute = ({ to, element }) => {
  const { isLoggedIn } = useContext(AppContext);

  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to={`/login?redirect=${to}`} />;
  }
};

const App = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <>
      {isLoggedIn && <Sidebar />}
      <GlobalModal />
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/ubytovania"
            element={
              <ProtectedRoute to="/ubytovania" element={<Ubytovania />} />
            }
            index
          />
          <Route
            path="/najomnici"
            element={<ProtectedRoute to="/najomnici" element={<Najomnici />} />}
          />
          <Route
            path="/lozka"
            element={<ProtectedRoute to="/lozka" element={<Lozka />} />}
          />
          <Route
            path="/users"
            element={<ProtectedRoute to="/users" element={<Users />} />}
          />
          <Route
            path="/settings"
            element={<ProtectedRoute to="/settings" element={<Settings />} />}
          />
          {/* Pridajte ďalšie chránené trasy tu */}
          <Route path="/" element={<Navigate to="/ubytovania" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
