const imgFile = document.getElementById("img_file");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
var imgSrc="";

imgFile.addEventListener("change", function(e){
    const file = this.files[0];
    // console.log(file);
    // console.log(file.name);
    // console.log(file.lastModifiedDate);
    // console.log(file.size);
    // console.log(file.type);
    // console.log(e)

    // console.log(e.target)

    if(file){
        const reader = new FileReader();
        // read the binary data and encode it as base64 data url.
        reader.readAsDataURL(file);
        reader.addEventListener("load",function (){
            img1.setAttribute("src",this.result);
             imgSrc = this.result;
            // console.log(this.result + "hii");
            fetchFunction();
            // console.log("out fetch function ");
        });
        
   }
});
 function fetchFunction(){
    var data = {imgSrc};
    let url = "http://localhost:3000/send-data";
    // console.log("in fetch function ");
    // console.log(data)
    // console.log("in fetch function ");
    
   fetch(url,{
        method : 'post',
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    }).then((res1)=>{
         return res1.json();
        // console.log(res1.body)
    }).then((res2)=>{
        // console.log(" this iss responsive 2 " + res2.name);
        // img2.setAttribute("src",res2.name);
        console.log(" this iss responsive 2 " + res2);
        img2.setAttribute("src",res2);
    })
    // const res1 = await response.json();

}


// const nonBlockA = document.getElementById('non_block_a');
// const navigation = document.querySelector('.navigation');
// const newLi =  document.getElementById('new_li');
// nonBlockA.addEventListener('click',()=>{
   
//     navigation.classList.remove('navigation');
//     console.log("btn is clicked");

// })

// const newNavigation = document.querySelector('.new_navigation');

// function navbar(){
//     newNavigation.style.display='flex';

    
// }

// const label = document.getElementById('label');
// const imgFile = document.getElementById('img_file');

// function active(){
//     imgFile.click();
// }








