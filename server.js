// ## Getting Started
// On the back end, the application should include a `db.json` file that 
// will store and retrieve notes using the `fs` module.

// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// ## Bonus
// You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. 
// As a bonus, try to add the DELETE route to the application using the following guideline:
// * `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. 
// To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

// helpful lessons 12; 




const express = require("express");
const fs = require("express");
const path = require("path");
const api = require("./db/db.json");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static("public"));
app.use("/api", api);

// GET route for db.json
app.get("/", (req, res) =>
res.sendFile(path.join(__dirname, "/db/db.json"))
);

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
