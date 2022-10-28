// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

// const tips = require('express').Router();
// const { v4: uuidv4 } = require('uuid');
// const {
//   readFromFile,
//   readAndAppend,
//   writeToFile,
// } = require('../helpers/fsUtils');

// // GET Route for retrieving all the tips
// tips.get('/', (req, res) => {
//   readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
// });


// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and 
// then return the new note to the client. 


// POST Route for a new UX/UI tip
// tips.post('/', (req, res) => {
//     console.log(req.body);
  
//     const { username, topic, tip } = req.body;
  
//     if (req.body) {
//       const newTip = {
//         username,
//         tip,
//         topic,
//         tip_id: uuidv4(),
//       };
  
//       readAndAppend(newTip, './db/tips.json');
//       res.json(`Tip added successfully 🚀`);
//     } else {
//       res.error('Error in adding tip');
//     }
//   });
  
//   module.exports = tips;