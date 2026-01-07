const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// ---------- HOME ROUTE ----------
app.get("/", (req, res) => {
    res.send("SmartGrocer Backend is Running 🚀");
});

// ---------- GET BUDGET ----------
app.get("/api/budget", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json"));
    res.json({ budget: data.budget });
});

// ---------- ADD EXPENSE ----------
app.post("/api/expense", (req, res) => {
    const { item, amount } = req.body;
    const data = JSON.parse(fs.readFileSync("data.json"));

    data.expenses.push({ item, amount });
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    res.json({ message: "Expense added successfully!" });
});

// ---------- GET ANALYTICS ----------
app.get("/api/analytics", (req, res) => {
    const data = JSON.parse(fs.readFileSync("data.json"));

    let totalSpent = data.expenses.reduce((sum, e) => sum + e.amount, 0);

    res.json({
        totalExpenses: data.expenses.length,
        totalSpent: totalSpent
    });
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});