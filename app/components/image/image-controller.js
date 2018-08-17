//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js";
let iS = new ImageService 

function drawImage(image){
    let template = ""
    for (let i in image){
        template = `
        <div>
        <img class="imagfe" src="${image.url}" alt="">
        
        </div>
        `;
        document.getElementById("body").innerHTML = template
    }
}
export default class ImageController {

constructor(){
    this.getImage()
}
getImage() {
    iS.getImage(image =>{
        drawImage(image)
        console.log(image)

    })
}



}







