import {
  Box,
  Stack,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";

function SectorLegend({ data }) {
  const theme = useTheme();

  return (
    <Stack spacing={2.6} width="100%">
      {data.map((sector) => (
        <Box
          key={sector.name}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            transition: "0.25s ease",
            borderRadius: 2,
            px: 1,
            py: 0.6,

            "&:hover": {
              bgcolor: alpha(theme.palette.common.white, 0.04),
            },
          }}
        >
          {/* Left */}

          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
          >
            <Box
              sx={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                bgcolor: sector.color,
                flexShrink: 0,
              }}
            />

            <Typography
              sx={{
    fontSize: 14,
    fontWeight: 500,
}}
              sx={{
                fontWeight: 500,
              }}
            >
              {sector.name}
            </Typography>
          </Box>

          {/* Right */}

          <Typography
            sx={{
    fontSize: 14,
    fontWeight: 700,
}}
            fontWeight={700}
            color="text.secondary"
          >
            {sector.value}%
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

export default SectorLegend;