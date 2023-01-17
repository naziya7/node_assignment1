const fs = require('./index')
const path = require('path')
let file1 = fs.myFileWriter(path.join(__dirname,"File.txt"),"Hello")
file1 = file1.then(()=>fs.myFileReader(path.join(__dirname,"File.txt")))
file1 = file1.then(()=>fs.myFileUpdater(path.join(__dirname,"File.txt"),"World"))
file1 = file1.then(()=>fs.myFileReader(path.join(__dirname,"File.txt")))
file1.then(()=>fs.myFileDeleter(path.join(__dirname,"File.txt")))