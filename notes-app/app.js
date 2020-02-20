const fs = require('fs')
const validator = require("validator")
const yargs = require("yargs")
const notes = require("./notes.js")
const chalk = require("chalk")

yargs.version("1.1.0")
yargs.version("1.1.0")


yargs.command({
  command: "add",
  describe: "Add a new Note (remember that title and body should have the form like: --title=`TITLE` --body=`BODY`)",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "body of note",
      demandOption: true,
      type: "string"
    }
  },
  handler: (argv) => {
    console.log("");
    notes.addNote(argv.title,argv.body)
  }
})

yargs.command({
  command: "remove",
  describe: "remove Note. Remember title should have the form like: --title=`TITLE`",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string"
    }},
  handler: (argv) => {
notes.removeNote(argv.title)
}
})

yargs.command({
  command: "show",
  describe: "list of Note",
  handler: () => {
    notes.listNotes()
}})

yargs.command({
  command: "read",
  builder: {
    title: {
      describe: "read note",
      demandOption: true,
      type: "string"
    }},
  describe: "read Note",
  handler: (argv) => {
    notes.readNotes(argv.title)}

})
yargs.parse()
