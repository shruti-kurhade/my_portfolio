function openLink(link){

window.open(link,"_blank")

}

function openCustomerVideo(){

window.open("videos/customer_behavior.mp4")

}

function openCctvVideo(){
window.open("videos/smart_cctv.mp4")
}

function openFashionVideo(){
window.open("videos/fashion.mp4")
}

function openImage(imagePath) {
    window.open(imagePath, "_blank");
}

function openModal(image){

document.getElementById("certModal").style.display="block"

document.getElementById("certImage").src=image

}

function closeModal(){

document.getElementById("certModal").style.display="none"

}