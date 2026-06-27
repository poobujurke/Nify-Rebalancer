import { Box, Toolbar } from "@mui/material";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
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

        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;