const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static("public"));


app.get("/api/notes", (req, res) =>
res.sendFile(path.join(__dirname, "./db/db.json"))
);

app.get("/notes", (req, res) =>
res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("*", (req, res) =>
res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.post("/api/notes", (req, res) => {
    const note = {
        id: newNote.length+1,
        title: req.body.title,
        text: req.body.text,
    }

    newNote.push(note);
     fs.writeFileSync("./db/db.json" , JSON.stringify(newNote));
     res.send(newNote);  
}
);

app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
