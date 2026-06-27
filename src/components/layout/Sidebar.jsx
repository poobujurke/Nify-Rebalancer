import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

function Sidebar() {
  const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Portfolio", icon: <AccountBalanceWalletIcon /> },
  { text: "Stock Universe", icon: <TrendingUpIcon /> },
  { text: "Rebalancing", icon: <AutorenewIcon /> },
  { text: "Analytics", icon: <AnalyticsIcon /> },
  { text: "Reports", icon: <BarChartIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
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
    {menuItems.map((item) => (
      <ListItemButton
        key={item.text}
        sx={{
          mx: 1,
          mb: 1,
          borderRadius: 2,
          color: "#CBD5E1",

          "&:hover": {
            bgcolor: "#1E293B",
            color: "#3B82F6",
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

        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </List>
</Box>
    </Drawer>

    
  );
}

export default Sidebar;