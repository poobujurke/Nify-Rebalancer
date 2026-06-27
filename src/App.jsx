import { Box, Typography, Button } from "@mui/material";

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        StockNifty
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Frontend setup completed successfully 🚀
      </Typography>

      <Button variant="contained">
        Continue
      </Button>
    </Box>
  );
}

export default App;