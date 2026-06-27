import { Box } from "@mui/material";
import KPICard from "./KPICard";

function KPISection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: 3,
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 220 }}>
        <KPICard
          title="Portfolio Value"
          value="₹12,45,320"
          change="+2.34%"
          positive={true}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 220 }}>
        <KPICard
          title="Today's P&L"
          value="+₹12,850"
          change="+1.62%"
          positive={true}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 220 }}>
        <KPICard
          title="Total Return"
          value="18.74%"
          change="+5.21%"
          positive={true}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 220 }}>
        <KPICard
          title="Active Holdings"
          value="20"
          change="Stocks"
          positive={true}
        />
      </Box>
    </Box>
  );
}

export default KPISection;