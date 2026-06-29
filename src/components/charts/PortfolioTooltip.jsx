import { Box, Divider, Typography, useTheme, alpha } from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";

function PortfolioTooltip({ active, payload, label }) {
  const theme = useTheme();

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const portfolio = payload.find(
    (item) => item.dataKey === "portfolio"
  );

  const nifty = payload.find(
    (item) => item.dataKey === "nifty"
  );

  return (
    <Box
      sx={{
        minWidth: 220,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
        borderRadius: 3,
        p: 2,
        boxShadow: "0 12px 32px rgba(0,0,0,.35)",
      }}
    >
      <Typography
        variant="subtitle2"
        fontWeight={700}
        mb={1}
      >
        {label}
      </Typography>

      <Divider sx={{ mb: 1.5 }} />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1.2}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <TrendingUpRoundedIcon
            sx={{
              color: "#3B82F6",
              fontSize: 20,
            }}
          />

          <Typography variant="body2">
            Portfolio
          </Typography>
        </Box>

        <Typography
          fontWeight={700}
          color="#3B82F6"
        >
          ₹
          {portfolio?.value?.toLocaleString("en-IN")}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          gap={1}
        >
          <ShowChartRoundedIcon
            sx={{
              color: "#22C55E",
              fontSize: 20,
            }}
          />

          <Typography variant="body2">
            NIFTY 50
          </Typography>
        </Box>

        <Typography
          fontWeight={700}
          color="#22C55E"
        >
          {nifty?.value?.toLocaleString("en-IN")}
        </Typography>
      </Box>
    </Box>
  );
}

export default PortfolioTooltip;