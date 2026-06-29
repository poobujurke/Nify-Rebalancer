import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  useTheme,
  alpha,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import sectorAllocationData from "../../data/sectorAllocationData";
import SectorLegend from "./SectorLegend";

function AllocationChart() {
  const theme = useTheme();

  const totalValue = "₹12.45L";

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",

        background: theme.palette.background.paper,

        border: `1px solid ${alpha(
          theme.palette.divider,
          0.5
        )}`,

        borderRadius: 5,

        transition: ".3s",

        "&:hover": {
          boxShadow: `0 18px 40px ${alpha(
            theme.palette.primary.main,
            0.08
          )}`,
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* Header */}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Sector Allocation
          </Typography>

          <Button
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            View All
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flex: 1,
            gap: 0.5,
            alignItems: "center",
          }}
        >
          {/* Donut Chart */}

          <Box
            sx={{
              width: "48%",
              height: 240,
            }}
          >
            <ResponsiveContainer
  width="100%"
  height="100%"
>
  <PieChart>
    <Pie
      data={sectorAllocationData}
      dataKey="value"
      innerRadius={70}
      outerRadius={105}
      paddingAngle={3}
      stroke="none"
      isAnimationActive
    >
      {sectorAllocationData.map((entry) => (
        <Cell
          key={entry.name}
          fill={entry.color}
        />
      ))}
    </Pie>

    {/* Center Text */}

    <text
      x="50%"
      y="46%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={theme.palette.text.primary}
      fontSize="24"
      fontWeight="700"
    >
      {totalValue}
    </text>

    <text
      x="50%"
      y="57%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={theme.palette.text.secondary}
      fontSize="13"
    >
      Total Value
    </text>
  </PieChart>
</ResponsiveContainer>

          </Box>

          {/* Legend */}

          <Box
            sx={{
              width: "52%",
            }}
          >
            <SectorLegend
              data={sectorAllocationData}
            />
          </Box>
        </Box>

        {/* Footer */}

        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            View Full Allocation
          </Button>
        </Box>

      </CardContent>
    </Card>
  );
}

export default AllocationChart;