const express = require('express');
const app = express();
const jimp = require('jimp');
const path = require('path');
var bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
var base64ToImage = require('base64-to-image');

// const imageFile =  document.getElementById("image_file");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json({limit:'1mb'}));
app.get('/',(req,res)=>{
    res.status(200);
    // res.sendFile(path.join(__dirname,"public","index.html"));
});

var imgSrc1;
app.post("/send-data",(req,res)=>{
    imgSrc1 = req.body.imgSrc;
    var base64Str = imgSrc1;
var path ='./';
var optionalObj = {'fileName': 'imageFileName', 'type':'png'};
    base64ToImage(base64Str,path,optionalObj)


    jimp.read('imageFilename.png')
  .then(lenna => {
    
    return lenna
      .resize(256, 256) // resize
      .quality(60) // set JPEG quality
      .greyscale(); // set greyscale
      // var abhi = {"abhi1":lenna.write('abhishek.png')}
      // console.log(abhi)
      // res.send(JSON.stringify(lenna.write('abhishek.png')))
      // .write('lena-small-bw9.jpg'); // save
      // console.log(lenna.write('lena-small-bw9.jpg'))
  }).then((e)=>{
    //  console.log("this is then",e);
    const bufferData = (e.bitmap.data);
    const b64_data = e.toString('base64');

    // console.log(typeof b64_data)
    // console.log("this is base64 " , (e.bitmap.data).toString('base64'))
    // res.send(JSON.stringify(e))
  //  console.log(typeof JSON.stringify(e))
  const data = { "name" : b64_data};
    res.send(JSON.stringify(data))
  })
  .catch(err => {
    console.error(err);
  });
});
// console.log(imgSrc1 + 'hii am i ');

// jimp.read(imgSrc1)
//   .then(lenna => {
//     return lenna
//       .resize(256, 256) // resize
//       .quality(60) // set JPEG quality
//       .greyscale() // set greyscale
//       .write('lena-small-bw1.jpg'); // save
//   })
//   .catch(err => {
//     console.error(err);
//   });

app.listen(port,()=>{
    console.log("listening");
})



