import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function AllocationChart() {
  return (
<Card
  sx={{
    backgroundColor: "#2B3648",
    border: "1px solid #334155",
    borderRadius: 4,

    width: "100%",
    display: "flex",
    flexDirection: "column",
  }}
>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Sector Allocation
        </Typography>

        <Box
          sx={{
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gray",
          }}
        >
          Pie Chart Coming Soon...
        </Box>
      </CardContent>
    </Card>
  );
}

export default AllocationChart;