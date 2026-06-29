import { Box, Toolbar } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./components/dashboard/Dashboard";
import StockTable from "./components/table/StockTable";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <Navbar />

        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 5,
          }}
        >
          <Toolbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/stock-universe"
              element={<StockTable />}
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;