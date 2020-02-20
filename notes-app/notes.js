const fs = require("fs")
const chalk = require("chalk")

function getNotes(text) {
  console.log(`Your notes...${text}`);
}

const addNote = function(title, body) {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
debugger
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green("Note Added"));
  } else {
    console.log(chalk.keyword('orange')("Note title taken!"));
  }


}

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function() {
  try {

    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch (e) {
    console.log(chalk.red("Missing notes. Creating one."));
    return []
  }

}

const removeNote = function(title) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if (duplicateNotes.length === 1) {
    notes.shift({
      title: title
    })
    console.log(chalk.green("Note Removed"));
    saveNotes(notes)
  } else {
    console.log(chalk.keyword('orange')("No such note!"));
  }
}

const listNotes = function() {
  const notes = loadNotes()
  console.log(chalk.inverse("Your notes"))
  notes.forEach((note) => {
    console.log(note.title);
  })
};

const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
}
