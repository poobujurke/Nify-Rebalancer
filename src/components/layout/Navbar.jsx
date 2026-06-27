import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Avatar,
  Badge,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1E293B",
        borderBottom: "1px solid #334155",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 72,
          px: 3,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mr: 4,
            cursor: "pointer",
          }}
        >
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>

          <ShowChartIcon color="primary" />

          <Typography
            variant="h6"
            fontWeight="bold"
            color="primary"
          >
            StockNifty
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#0F172A",
            px: 2,
            py: 0.5,
            borderRadius: 5,
            border: "1px solid #334155",
            width: {
              xs: 160,
              sm: 220,
              md: 320,
            },
          }}
        >
          <SearchIcon
            sx={{
              color: "gray",
              mr: 1,
            }}
          />

          <InputBase
            placeholder="Search stocks, ETFs..."
            sx={{
              color: "white",
              width: "100%",
            }}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right Side Icons */}
        <IconButton color="inherit">
          <DarkModeOutlinedIcon />
        </IconButton>

        <IconButton color="inherit">
          <Badge badgeContent={3} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        <Avatar
          sx={{
            ml: 2,
            bgcolor: "primary.main",
          }}
        >
          JV
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;