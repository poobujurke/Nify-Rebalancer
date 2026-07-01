const startDate = new Date("2025-01-01");

let portfolio = 980000;
let nifty = 21480;

const portfolioChartData = Array.from({ length: 365 }, (_, index) => {
  const currentDate = new Date(startDate);
  currentDate.setDate(startDate.getDate() + index);

  // Simulate realistic market fluctuations
  portfolio += Math.floor(Math.random() * 4500 - 1200);
  nifty += Math.floor(Math.random() * 45 - 12);

  return {
    date: currentDate.toISOString().split("T")[0],

    label: currentDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    }),

    portfolio,

    nifty,
  };
});

export default portfolioChartData;