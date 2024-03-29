const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connet Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/events", require("./routes/api/events"));
app.use("/api/email", require("./routes/api/email"));
app.use("/api/talleres", require("./routes/api/talleres"));
app.use("/api/vivienda", require("./routes/api/vivienda"));
app.use("/api/ninoarbol", require("./routes/api/ninoArbol"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
