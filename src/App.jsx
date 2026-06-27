import { Box, Toolbar } from "@mui/material";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />

        <h1>Dashboard</h1>
      </Box>
    </Box>
  );
}

export default App;