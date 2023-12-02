//https://teachablemachine.withgoogle.com/models/VYHtgMnCx/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VYHtgMnCx/model.json", modelready)
}

function modelready(){
    classifier.classify(gotResults)
}

function gotResults(){
    
}