import createServer from "./server";

const app = createServer();
const port = process.env.PORT || 4000;

app.get("/api/dashboard/lookup", (req, res) => {
  const transactions = [
    {
      id: 1,
      label: "A",
    },
    {
      id: 2,
      label: "B",
    },
    {
      id: 3,
      label: "C",
    },
    {
      id: 4,
      label: "D",
    },
  ];
  console.log(req.headers);
  res.json({ result: transactions });
});

app.listen(port, async () => {
  console.log(`App is running in port ${port}`);
});
