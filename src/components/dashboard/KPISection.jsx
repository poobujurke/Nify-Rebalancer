import { Box } from "@mui/material";

import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";

import KPICard from "./KPICard";

const portfolioSparkline = [
  { value: 8 },
  { value: 10 },
  { value: 9 },
  { value: 12 },
  { value: 11 },
  { value: 14 },
  { value: 13 },
  { value: 16 },
  { value: 15 },
  { value: 18 },
];

const pnlSparkline = [
  { value: 6 },
  { value: 8 },
  { value: 7 },
  { value: 10 },
  { value: 9 },
  { value: 13 },
  { value: 12 },
  { value: 15 },
  { value: 14 },
  { value: 18 },
];

const returnSparkline = [
  { value: 5 },
  { value: 7 },
  { value: 6 },
  { value: 8 },
  { value: 10 },
  { value: 9 },
  { value: 12 },
  { value: 11 },
  { value: 14 },
  { value: 16 },
];

const holdingsBars = [
  { value: 6 },
  { value: 2 },
  { value: 8 },
  { value: 4 },
  { value: 5 },
  { value: 3 },
  { value: 7 },
  { value: 2 },
  { value: 9 },
  { value: 5 },
];

function KPISection() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 260 }}>
        <KPICard
          title="Portfolio Value"
          value="₹12,45,320"
          change="2.34%"
          subtitle="vs last 6 months"
          positive
          icon={<AccountBalanceWalletRoundedIcon />}
          iconColor="#3B82F6"
          sparklineData={portfolioSparkline}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 260 }}>
        <KPICard
          title="Today's P&L"
          value="+₹12,850"
          change="1.62%"
          subtitle="vs yesterday"
          positive
          icon={<ShowChartRoundedIcon />}
          iconColor="#22C55E"
          sparklineData={pnlSparkline}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 260 }}>
        <KPICard
          title="Total Return"
          value="18.74%"
          change="5.21%"
          subtitle="vs last 6 months"
          positive
          icon={<PieChartRoundedIcon />}
          iconColor="#8B5CF6"
          sparklineData={returnSparkline}
        />
      </Box>

      <Box sx={{ flex: 1, minWidth: 260 }}>
        <KPICard
          title="Active Holdings"
          value="20"
          change=""
          subtitle="Stocks"
          positive
          icon={<LayersRoundedIcon />}
          iconColor="#F59E0B"
          sparklineData={holdingsBars}
          chartType="bar"
        />
      </Box>
    </Box>
  );
}

export default KPISection;