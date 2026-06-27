import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function PortfolioChart() {
  return (
    <Card
      sx={{
        backgroundColor: "#313D52",
        border: "1px solid #334155",
        borderRadius: 4,
        width: "100%",
        maxWidth: "1500px",
        mx: "auto",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Portfolio Performance
        </Typography>

        <Box
          sx={{
            height: 260,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
          }}
        >
          Chart Coming Soon...
        </Box>
      </CardContent>
    </Card>
  );
}

export default PortfolioChart;