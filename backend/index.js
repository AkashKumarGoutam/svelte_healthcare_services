const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const servicesRoutes = require("./routes/ServicesRoutes");

// Initialize the app
const app = express();

// Use CORS middleware
app.use(cors());

// Use JSON middleware to parse incoming requests
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use("/services", servicesRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
