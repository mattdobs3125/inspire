//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js";
let iS = new ImageService 

function drawImage(image){
        document.body.style.backgroundImage = `url('${image.url}')`
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







