// generate package.json file
    //  - npm init -y
// install yargs and chalk and save the reference
    // - npm i yargs chalk --save
// require and verify yargs and chalk in app.js

const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./utils/notes");

yargs.command({
    command : 'add',
    description : "To add the new note",
    builder : {
        title : {
            type : 'string',
            demandOption : true,
            description : "Title of the Note"
        },
        body : {
            type : 'string',
            demandOption : true,
            description : "Body of the Note"
        }
    },
    handler : (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command : 'remove',
    description : "To remove the new note",
    builder : {
        title : {
            type : 'string',
            demandOption : true,
            description : "Title of the Note"
        }
    },
    handler : (argv) => {
        notes.removeNote(argv.title);
    }
});


yargs.command({
    command : 'read',
    description : "To remove the new note",
    builder : {
        title : {
            type : 'string',
            demandOption : true,
            description : "Title of the Note"
        }
    },
    handler : (argv) => {
        notes.readNote(argv.title);
    }
});


yargs.command({
    command : 'list',
    description : "To remove the new note",
    handler : (argv) => {
        notes.listNote();
    }
})

yargs.parse();

// node app.js add --title="" --body=""
// node app.js remove --title=""
// node app.js read --title=""
// node app.js list 