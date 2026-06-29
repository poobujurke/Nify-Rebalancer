import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { NavLink, useLocation } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      path: "/",
    },
    {
      text: "Portfolio",
      icon: <AccountBalanceWalletIcon />,
      path: "/portfolio",
    },
    {
      text: "Stock Universe",
      icon: <TrendingUpIcon />,
      path: "/stock-universe",
    },
    {
      text: "Rebalancing",
      icon: <AutorenewIcon />,
      path: "/rebalancing",
    },
    {
      text: "Analytics",
      icon: <AnalyticsIcon />,
      path: "/analytics",
    },
    {
      text: "Reports",
      icon: <BarChartIcon />,
      path: "/reports",
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      path: "/settings",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#111827",
          borderRight: "1px solid #334155",
          color: "white",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ mt: 2 }}>
        <List>
          {menuItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <ListItemButton
                key={item.text}
                component={NavLink}
                to={item.path}
                sx={{
                  mx: 1,
                  mb: 1,
                  borderRadius: 2,

                  color: active ? "#60A5FA" : "#CBD5E1",

                  bgcolor: active ? "#1E293B" : "transparent",

                  borderLeft: active
                    ? "4px solid #3B82F6"
                    : "4px solid transparent",

                  "&:hover": {
                    bgcolor: "#1E293B",
                    color: "#60A5FA",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "inherit",
                    minWidth: 40,
                  }}
                >
                  {item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: active ? 600 : 400,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;