const fs = require('fs'); // require -> mengambil module
const path = require('path');

// 1. require
// const config = require('./test.json');
// console.log(config.key);
// console.log(config['new-object']);

// 2. read file
const content = fs.readFileSync('./test.json', { encoding: 'utf-8' });
try {
    const config = JSON.parse(content);
    console.log(config['key']);
} catch (err) {
    console.log("JSON FILE FAILED TO BE READED");
}

const obj = {
    'hero': "pudge",
    ability: "hook",
}

fs.writeFileSync('mydata.json', JSON.stringify(obj, null, 4), { encoding: 'utf-8' });

// create new file
// fs.writeFileSync('./test.txt', "shoot fire\n", { encoding: 'utf8' });

// read file
// const content = fs.readFileSync('./test.txt', { encoding: 'utf8' });
// console.log(content);

// find out if a file exist or not
// if (fs.existsSync('./test.txt')) {
//     console.log("ADA");
// } else {
//     console.log("TAK ADA");
// }

// delete file
// fs.unlinkSync('./test.txt');

// delete an empty folder
// fs.rmdir('');

// delete a folder
// fs.rmSync('', { recursive: true, force: true });

// function deleteRecursively(filePath) {
    
//     if (!fs.existsSync(filePath)) { // no file inside folder
//         return;
//     }

//     if (fs.lstatSync(filePath).isDirectory()) { // if the filePath is a directory
//         const fileList = fs.readdirSync(filePath);
//         for (let file of fileList) {
//             const fullPath = path.join(filePath, file);
//             //fs.unlinkSync(fullPath);
//             deleteRecursively(fullPath);
//         }
//         fs.rmdirSync(filePath);
//     } else { // else
//         fs.unlinkSync(filePath);
//     }
// }

// deleteRecursively('myFolder');