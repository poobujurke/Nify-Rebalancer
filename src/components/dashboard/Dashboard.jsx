import { Box, Typography } from "@mui/material";

import KPISection from "./KPISection";
import PortfolioChart from "../charts/PortfolioChart";
import BottomSection from "./BottomSection";

function Dashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1600px",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
      >
        Dashboard
      </Typography>

<Box
  sx={{
    mt: 3,
  }}
>
  <KPISection />
</Box>

      {/* Portfolio Chart */}
      <Box
  sx={{
    mt: 6,
  }}
>
  <PortfolioChart />
</Box>

      {/* Bottom Section */}
      <Box
        sx={{
          mt: 6,
        }}
      >
        <BottomSection />
      </Box>
    </Box>
  );
}

export default Dashboard;