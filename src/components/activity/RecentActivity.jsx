import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
  Divider,
  Avatar,
  Button,
  useTheme,
  alpha,
} from "@mui/material";

import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import SyncRoundedIcon from "@mui/icons-material/SyncRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import recentActivityData from "../../data/recentActivityData";

function RecentActivity() {
  const theme = useTheme();

  const getActivityConfig = (type) => {
    switch (type) {
      case "BUY":
        return {
          icon: <ShoppingCartRoundedIcon />,
          iconBg: alpha("#22C55E", 0.18),
          iconColor: "#22C55E",
          badgeBg: alpha("#22C55E", 0.18),
          badgeColor: "#22C55E",
        };

      case "SELL":
        return {
          icon: <SellRoundedIcon />,
          iconBg: alpha("#EF4444", 0.18),
          iconColor: "#EF4444",
          badgeBg: alpha("#EF4444", 0.18),
          badgeColor: "#EF4444",
        };

      case "INFO":
        return {
          icon: <SyncRoundedIcon />,
          iconBg: alpha("#3B82F6", 0.18),
          iconColor: "#3B82F6",
          badgeBg: alpha("#3B82F6", 0.18),
          badgeColor: "#3B82F6",
        };

      default:
        return {
          icon: <PaymentsRoundedIcon />,
          iconBg: alpha("#8B5CF6", 0.18),
          iconColor: "#8B5CF6",
          badgeBg: alpha("#8B5CF6", 0.18),
          badgeColor: "#8B5CF6",
        };
    }
  };

  return (
    <Card
      elevation={0}
      sx={{
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",

        background: theme.palette.background.paper,
        border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
        borderRadius: 5,
        transition: "0.3s",

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
      flex: 1,
    }}
  >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2.5}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Recent Activity
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

        <Stack
      spacing={0}
      sx={{
        flex: 1,
        width: "100%",
      }}
    >
        {recentActivityData.map((activity, index) => {
  const config = getActivityConfig(activity.type);

  return (
    <Box key={activity.id}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: 1,
          borderRadius: 3,
          transition: "0.25s",

          "&:hover": {
            bgcolor: alpha(theme.palette.common.white, 0.03),
          },
        }}
      >
        {/* Left Section */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Avatar
            sx={{
              bgcolor: config.iconBg,
              color: config.iconColor,
              width: 46,
              height: 46,
            }}
          >
            {config.icon}
          </Avatar>

          <Box>
            <Typography
              fontWeight={700}
              fontSize={16}
            >
              {activity.type === "BUY" && `Bought ${activity.stock}`}
              {activity.type === "SELL" && `Sold ${activity.stock}`}
              {activity.type === "INFO" && activity.stock}
              {activity.type === "DIV" && "Dividend Received"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={0.4}
            >
              {activity.description}
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              minWidth: 90,
              textAlign: "right",
            }}
          >
            {activity.time}
          </Typography>

          <Chip
            label={activity.type}
            size="small"
            sx={{
              minWidth: 62,
              fontWeight: 700,
              bgcolor: config.badgeBg,
              color: config.badgeColor,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>

      {index !== recentActivityData.length - 1 && (
        <Divider
          sx={{
            borderColor: alpha(
              theme.palette.divider,
              0.4
            ),
          }}
        />
      )}
    </Box>
  );
})}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default RecentActivity;