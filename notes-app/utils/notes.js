const fs = require("fs");
const chalk = require("chalk");

let loadNotes = () => {
  try {
    let notesBuffer = fs.readFileSync("./notes.json");
    let noteString = notesBuffer.toString();
    return JSON.parse(noteString);
  } catch {
    return [];
  }
};

let saveNote = notes => {
  fs.writeFileSync("./notes.json", JSON.stringify(notes));
  console.log(chalk.green("Updated."))
};

let addNote = (title, body) => {
  let notes = loadNotes();
  let duplicateNotes = notes.filter(note => note.title == title);
  if (duplicateNotes.length > 0) {
    console.log(chalk.red("Duplicate Title. Try again."));
  } else {
    notes.push({ title, body });
    saveNote(notes);
  }
};

let removeNote = title => {
    let notes = loadNotes();
    let duplicateNotes = notes.filter(note => note.title == title);
    if(duplicateNotes.length > 0){
        let updatedNotes = notes.filter(note => note.title != title);
        saveNote(updatedNotes);
    }else{
        console.log(chalk.red('Title not found.'))
    }
}

let readNote = title => {
    let notes = loadNotes();
    let duplicateNotes = notes.filter(note => note.title == title);
    if(duplicateNotes.length > 0){
        duplicateNotes.forEach(note => {
            console.log("--------------------")
            console.log(chalk.grey('Title : ' + note.title))
            console.log(chalk.grey('Body : ' + note.body))
        })
    }else{
        console.log(chalk.red('Title not found.'))
    }
}

let listNote = () => {
    let notes = loadNotes();
    console.log(chalk.inverse.blue("Notes List"));
    console.log("--------------------------")
    notes.forEach(note => {
        console.log(chalk.grey('Title : ' + note.title))
        console.log(chalk.grey('Body : ' + note.body))
        console.log("--------------------------")
    })
 } 

module.exports = {
  addNote, removeNote, readNote, listNote
};
