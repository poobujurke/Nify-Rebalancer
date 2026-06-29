import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";

import {
  Paper,
  Typography,
  Box,
  Divider,
  TextField,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

function StockTable() {
  const rowData = useMemo(
    () => [
      {
        symbol: "INFY",
        company: "Infosys",
        sector: "IT",
        price: 1675.5,
        change: "+1.25%",
      },
      {
        symbol: "TCS",
        company: "Tata Consultancy Services",
        sector: "IT",
        price: 3940.25,
        change: "-0.45%",
      },
      {
        symbol: "RELIANCE",
        company: "Reliance Industries",
        sector: "Energy",
        price: 2895.8,
        change: "+0.82%",
      },
      {
        symbol: "HDFCBANK",
        company: "HDFC Bank",
        sector: "Banking",
        price: 1760.1,
        change: "+0.55%",
      },
      {
        symbol: "ICICIBANK",
        company: "ICICI Bank",
        sector: "Banking",
        price: 1425.9,
        change: "-1.10%",
      },
    ],
    []
  );

  const columnDefs = useMemo(
    () => [
      {
        headerName: "Symbol",
        field: "symbol",
        width: 120,
      },
      {
        headerName: "Company",
        field: "company",
        flex: 2,
      },
      {
        headerName: "Sector",
        field: "sector",
        flex: 1,
      },
      {
        headerName: "Price",
        field: "price",
        width: 140,
        valueFormatter: (params) =>
          `₹${params.value.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`,
      },
      {
        headerName: "Change",
        field: "change",
        width: 130,
        cellRenderer: (params) => {
          const positive = params.value.startsWith("+");

          return (
            <span
              style={{
                color: positive ? "#22c55e" : "#ef4444",
                fontWeight: "bold",
              }}
            >
              {positive ? "▲ " : "▼ "}
              {params.value}
            </span>
          );
        },
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
    }),
    []
  );

  const [searchText, setSearchText] = useState("");

  // Summary Statistics
  const totalStocks = rowData.length;
  const totalSectors = new Set(rowData.map((stock) => stock.sector)).size;
  const gainers = rowData.filter((stock) =>
    stock.change.startsWith("+")
  ).length;
  const losers = rowData.filter((stock) =>
    stock.change.startsWith("-")
  ).length;

  const stats = [
    {
      title: "Total Stocks",
      value: totalStocks,
      color: "white",
    },
    {
      title: "Sectors",
      value: totalSectors,
      color: "white",
    },
    {
      title: "Gainers",
      value: gainers,
      color: "#22c55e",
    },
    {
      title: "Losers",
      value: losers,
      color: "#ef4444",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 4,
        width: "100%",
      }}
    >
      {/* Header */}

      <Typography
        variant="h5"
        fontWeight="bold"
        color="white"
      >
        Stock Universe
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mt: 1,
          mb: 3,
        }}
      >
        Track and analyze all available stocks in one place.
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* Summary Cards */}

      <Grid
        container
        spacing={3}
        sx={{ mb: 4 }}
      >
        {stats.map((item) => (
          <Grid
            key={item.title}
            size={{ xs: 12, sm: 6, md: 3 }}
          >
            <Card
              elevation={4}
              sx={{
                borderRadius: 4,
                bgcolor: "#2D3748",
                color: "white",
                textAlign: "center",
                transition: "0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 8,
                },
              }}
            >
              <CardContent sx={{ py: 3 }}>
                <Typography
                  variant="body2"
                  color="gray"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mt: 1,
                    color: item.color,
                  }}
                >
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Search + Export */}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          mb: 3,
        }}
      >
        <TextField
          fullWidth
          placeholder="Search by symbol, company or sector..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            height: 56,
            minWidth: 170,
          }}
        >
          Export CSV
        </Button>
      </Box>

      {/* Stock Table */}

      <Box
        className="ag-theme-alpine"
        sx={{
          height: 500,
          width: "100%",
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          quickFilterText={searchText}
          pagination
          paginationPageSize={5}
          animateRows
          rowSelection="single"
        />
      </Box>
    </Paper>
  );
}

export default StockTable;