function calc(){
    var height = document.getElementById("heightInput").value;
    var width = document.getElementById("widthInput").value;
    var aspectRatio = document.getElementById("aspectRatioInput").value;

    var radio = document.getElementsByName('calcMode');
    var calcMode;

    radio.forEach(element => {
        if(element.checked){
            calcMode = element.value;
        }
    });

switch(calcMode){
    case calcAspectRatio:
        //math here
        break;
    case calcHeight:
        // code block
        break;
    case calcWidth:
        // code block
        break;
     default:
        // code block
}

    console.log(calcMode);
}