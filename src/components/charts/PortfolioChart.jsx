import dayjs from "dayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Card,
  CardContent,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Menu,
  CircularProgress,
  Alert,
  useTheme,
  alpha,
} from "@mui/material";

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  useMemo,
  useState,
  useCallback,
} from "react";

import PortfolioTooltip from "./PortfolioTooltip";
import portfolioChartData from "../../data/portfolioChartData";

const RANGE_OPTIONS = [
  { label: "1W", value: "1W" },
  { label: "1M", value: "1M" },
  { label: "3M", value: "3M" },
  { label: "6M", value: "6M" },
  { label: "1Y", value: "1Y" },
  { label: "ALL", value: "ALL" },
];

function PortfolioChart({
  data = portfolioChartData,
  selectedRange = "6M",
  onRangeChange,
  loading = false,
  error = null,
}) {
  const theme = useTheme();

  const [range, setRange] = useState(selectedRange);

  const [calendarAnchor, setCalendarAnchor] = useState(null);

  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleRangeChange = useCallback(
    (_, newRange) => {
      if (!newRange) return;

      setRange(newRange);

      if (onRangeChange) {
        onRangeChange(newRange);
      }
    },
    [onRangeChange]
  );

  const handleCalendarOpen = (event) => {
    setCalendarAnchor(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setCalendarAnchor(null);
  };

  const chartData = useMemo(() => {
    switch (range) {
      case "1W":
        return data.slice(-7);

      case "1M":
        return data.slice(-30);

      case "3M":
        return data.slice(-90);

      case "6M":
        return data.slice(-180);

      case "1Y":
        return data.slice(-365);

      default:
        return data;
    }
  }, [data, range]);

  if (loading) {
    return (
      <Card
        sx={{
          minHeight: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <CircularProgress />
      </Card>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Card
      elevation={0}
      sx={{
        background: theme.palette.background.paper,
        border: `1px solid ${alpha(theme.palette.divider, 0.35)}`,
        borderRadius: 6,
        transition: ".35s",

        "&:hover": {
          boxShadow: `0 18px 45px ${alpha(
            theme.palette.primary.main,
            0.08
          )}`,
        },
      }}
    >
      <CardContent sx={{ p: 5 }}>

        {/* Header */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 5,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                letterSpacing: "-0.5px",
              }}
            >
              Portfolio Performance
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mt: 1.5,
              }}
            >
              Track your portfolio against NIFTY 50
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <ToggleButtonGroup
              exclusive
              value={range}
              onChange={handleRangeChange}
              size="small"
              sx={{
                backgroundColor: alpha(
                  theme.palette.common.white,
                  0.03
                ),
                borderRadius: 3,

                "& .MuiToggleButton-root": {
                  border: "none",
                  color: theme.palette.text.secondary,
                  px: 2.5,
                  py: 0.9,

                  "&.Mui-selected": {
                    backgroundColor: alpha(
                      theme.palette.primary.main,
                      0.18
                    ),
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                  },
                },
              }}
            >
              {RANGE_OPTIONS.map((item) => (
                <ToggleButton
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <IconButton
              onClick={handleCalendarOpen}
              sx={{
                width: 44,
                height: 44,
                borderRadius: 3,
                border: `1px solid ${alpha(
                  theme.palette.divider,
                  0.5
                )}`,
              }}
            >
              <CalendarMonthRoundedIcon />
            </IconButton>
          </Box>
        </Box>

        <Menu
          anchorEl={calendarAnchor}
          open={Boolean(calendarAnchor)}
          onClose={handleCalendarClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
              sx={{
                p: 2,
                width: 280,
              }}
            >
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                  handleCalendarClose();
                }}
                sx={{
                  width: "100%",
                }}
              />
            </Box>
          </LocalizationProvider>
        </Menu>

        <Box mt={5}>
        
        <ResponsiveContainer
  width="100%"
  height={460}
>
  <ComposedChart
    data={chartData}
    margin={{
      top: 20,
      right: 20,
      left: 20,
      bottom: 15,
    }}
  >
    {/* ---------- Gradients ---------- */}

    <defs>
      <linearGradient
        id="portfolioGradient"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop
          offset="5%"
          stopColor="#3B82F6"
          stopOpacity={0.22}
        />

        <stop
          offset="95%"
          stopColor="#3B82F6"
          stopOpacity={0}
        />
      </linearGradient>

      <linearGradient
        id="niftyGradient"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop
          offset="5%"
          stopColor="#22C55E"
          stopOpacity={0.25}
        />

        <stop
          offset="95%"
          stopColor="#22C55E"
          stopOpacity={0}
        />
      </linearGradient>
    </defs>

    {/* ---------- Grid ---------- */}

    <CartesianGrid
      strokeDasharray="3 5"
      stroke="#263244"
      vertical={false}
    />

    {/* ---------- X Axis ---------- */}

    <XAxis
      dataKey="label"
      axisLine={false}
      tickLine={false}
      tick={{
        fill: theme.palette.text.secondary,
        fontSize: 13,
      }}
    />

    {/* ---------- Left Y Axis ---------- */}

<YAxis
  yAxisId="portfolio"
  orientation="left"
  width={95}
  axisLine={false}
  tickLine={false}
  tickMargin={15}
  tickFormatter={(value) =>
    `₹${(value / 100000).toFixed(1)}L`
  }
  tick={{
    fill: "#60A5FA",
    fontSize: 15,
    fontWeight: 500,
  }}
/>

    {/* ---------- Right Y Axis ---------- */}

<YAxis
  yAxisId="nifty"
  orientation="right"
  width={95}
  axisLine={false}
  tickLine={false}
  tickMargin={15}
  tick={{
    fill: "#4ADE80",
    fontSize: 15,
    fontWeight: 500,
  }}
/>

    {/* ---------- Tooltip ---------- */}

    <Tooltip
      cursor={{
        stroke: "#94A3B8",
        strokeWidth: 1,
        strokeDasharray: "4 4",
      }}
      content={<PortfolioTooltip />}
    />

    {/* ---------- Legend ---------- */}

    <Legend
      verticalAlign="top"
      align="left"
      iconType="circle"
      wrapperStyle={{
        paddingBottom: 25,
        fontSize: 15,
      }}
    />

    {/* ---------- NIFTY ---------- */}

    <Area
      yAxisId="nifty"
      type="monotone"
      dataKey="nifty"
      name="NIFTY 50"
      legendType="circle"
      stroke="#22C55E"
      strokeWidth={2.8}
      fill="url(#niftyGradient)"
      dot={false}
      activeDot={{
        r: 6,
        fill: "#22C55E",
        stroke: "#fff",
        strokeWidth: 2,
      }}
      animationDuration={1200}
    />

    {/* ---------- Portfolio Gradient ---------- */}

    <Area
      yAxisId="portfolio"
      type="monotone"
      dataKey="portfolio"
      fill="url(#portfolioGradient)"
      stroke="none"
      legendType="none"
      isAnimationActive={false}
    />

    {/* ---------- Portfolio Line ---------- */}

    <Line
      yAxisId="portfolio"
      type="monotone"
      dataKey="portfolio"
      name="Portfolio"
      legendType="circle"
      stroke="#3B82F6"
      strokeWidth={3.5}
      dot={false}
      activeDot={{
        r: 7,
        fill: "#3B82F6",
        stroke: "#ffffff",
        strokeWidth: 2,
      }}
      animationDuration={1200}
    />
  </ComposedChart>
</ResponsiveContainer>
        </Box>

        {/* Footer */}

        <Box
          sx={{
            mt: 3,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <InfoOutlinedIcon
            sx={{
              fontSize: 18,
              color: theme.palette.text.secondary,
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            Data as of 31 May 2026
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
}

export default PortfolioChart;