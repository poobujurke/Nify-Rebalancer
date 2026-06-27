import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const activities = [
  {
    title: "Bought TCS",
    subtitle: "50 shares",
  },
  {
    title: "Sold Infosys",
    subtitle: "20 shares",
  },
  {
    title: "Portfolio Rebalanced",
    subtitle: "Today",
  },
  {
    title: "Dividend Received",
    subtitle: "HDFC Bank",
  },
];

function RecentActivity() {
  return (
<Card
  sx={{
    backgroundColor: "#2B3648",
    border: "1px solid #334155",
    borderRadius: 4,

    width: "100%",
    display: "flex",
    flexDirection: "column",
  }}
>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          Recent Activity
        </Typography>

        <List>
          {activities.map((activity, index) => (
            <div key={index}>
              <ListItem disablePadding sx={{ py: 1 }}>
                <ListItemText
                  primary={activity.title}
                  secondary={activity.subtitle}
                  secondaryTypographyProps={{
                    color: "gray",
                  }}
                />
              </ListItem>

              {index !== activities.length - 1 && (
                <Divider sx={{ borderColor: "#475569" }} />
              )}
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default RecentActivity;