import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  useTheme,
  alpha,
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";

function KPICard({
  title,
  value,
  change,
  subtitle,
  positive = true,
  icon,
  iconColor,
  sparklineData,
  chartType = "line",
}) {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        background: theme.palette.background.paper,
        border: `1px solid ${alpha(theme.palette.divider, 0.35)}`,
        borderRadius: 4,
        height: "100%",
        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 28px ${alpha(
            iconColor,
            0.18
          )}`,
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          "&:last-child": {
            pb: 3,
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box flex={1}>
            <Avatar
              sx={{
                width: 42,
                height: 42,
                mb: 2,
                bgcolor: alpha(iconColor, 0.18),
                color: iconColor,
              }}
            >
              {icon}
            </Avatar>

            <Typography
              variant="body2"
              color="text.secondary"
              mb={1}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight={700}
            >
              {value}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              mt={1.5}
              gap={0.8}
            >
              {positive ? (
                <TrendingUpRoundedIcon
                  sx={{
                    color: "#22C55E",
                    fontSize: 18,
                  }}
                />
              ) : (
                <TrendingDownRoundedIcon
                  sx={{
                    color: "#EF4444",
                    fontSize: 18,
                  }}
                />
              )}

              <Typography
                fontWeight={700}
                color={
                  positive
                    ? "#22C55E"
                    : "#EF4444"
                }
              >
                {change}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: 90,
              height: 60,
            }}
          >

          {chartType === "line" ? (
  <ResponsiveContainer
    width="100%"
    height="100%"
  >
    <LineChart data={sparklineData}>
      <Line
        type="monotone"
        dataKey="value"
        stroke={iconColor}
        strokeWidth={2.5}
        dot={false}
        isAnimationActive
      />
    </LineChart>
  </ResponsiveContainer>
) : (
  <ResponsiveContainer
    width="100%"
    height="100%"
  >
    <BarChart data={sparklineData}>
      <Bar
        dataKey="value"
        fill={iconColor}
        radius={[2, 2, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
)}

          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default KPICard;