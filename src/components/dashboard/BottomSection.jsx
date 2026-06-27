import { Grid } from "@mui/material";

import RecentActivity from "../activity/RecentActivity";
import AllocationChart from "../charts/AllocationChart";

function BottomSection() {
  return (
    <Grid
      container
      spacing={4}
      alignItems="stretch"
    >
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{
          display: "flex",
        }}
      >
        <RecentActivity />
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{
          display: "flex",
        }}
      >
        <AllocationChart />
      </Grid>
    </Grid>
  );
}

export default BottomSection;