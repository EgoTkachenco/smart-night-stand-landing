const { readdirSync, rename } = require('fs')
const { resolve } = require('path')

// Get path to image directory
const imageDirPath = resolve(__dirname, 'public/table-3-360/')

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath)

// Loop through each file that was retrieved
files.forEach((file, i) => {
  // let newName = file.replace('-', '.').split('.')
  // newName[1] = Number(newName[1])
  // newName = newName.join('.').replace('.', '-')
  rename(imageDirPath + `/${file}`, imageDirPath + `/360-${i}.png`, (err) =>
    console.log(err)
  )
})
