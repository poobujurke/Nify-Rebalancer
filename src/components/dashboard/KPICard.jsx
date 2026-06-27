import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function KPICard({
  title,
  value,
  change,
  positive,
}) {
  return (
    <Card
      sx={{
        backgroundColor: "#1E293B",
        border: "1px solid #334155",
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          p: 2,
          "&:last-child": {
            pb: 2,
          },
        }}
      >
        <Typography
          color="gray"
          fontSize={14}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          fontWeight="bold"
          mt={1}
        >
          {value}
        </Typography>

        <Box mt={1}>
          <Typography
            fontWeight="bold"
            color={positive ? "#22C55E" : "#EF4444"}
          >
            {change}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default KPICard;