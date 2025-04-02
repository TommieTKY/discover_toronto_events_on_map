//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const event = require("./components/event/api");
// const map = require("./components/map/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (request, response) => {
  try {
    let events = await event.getEvents();
    response.render("index", {
      trendingEvents: events,
      mapApiKey: process.env.MAP_API_KEY,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    response.status(500).send("Internal Server Error");
  }
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
