const { swaggerUi, specs } = require("./docs/swagger");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
const taskRoutes = require("./routes/taskRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");


/* ---------------- Security ---------------- */
app.use(helmet());

/* ---------------- CORS ---------------- */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

/* ---------------- Body Parser ---------------- */
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/* ---------------- Logger ---------------- */
app.use(morgan("dev"));

/* ---------------- Health Check ---------------- */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 TaskFlow API is running successfully",
  });
});

/* ---------------- Routes ---------------- */
app.use("/api/tasks", taskRoutes);

/* ---------------- 404 ---------------- */
app.use(notFound);

/* ---------------- Error Handler ---------------- */
app.use(errorHandler);

module.exports = app;