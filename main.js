function startClassifier(){
    navigator.mediaDevices.getUserMedia({audio:true})
    Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GLlX3alZ9/model.json",modelReady)
}
function modelReady(){
    Classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML='I can hear - '+
        results[0].label;
        document.getElementById("accuracy").innerHTML='Accuracy - '+
        (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")"
        document.getElementById("result").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_r+")"

        Alien_1=document.getElementById('alien1')
        Alien_2=document.getElementById('alien2')
        Alien_3=document.getElementById('alien3')
        Alien_4=document.getElementById('alien4')

        if(results[0].label=="clap"){
            Alien_1.src="aliens-01.gif"
            Alien_2.src="aliens-02.png"
            Alien_3.src="aliens-03.png"
            Alien_4.src="aliens-04.png"
        }
        else if(results[0].label=="Snap"){
            Alien_1.src="aliens-01.png"
            Alien_2.src="aliens-02.gif"
            Alien_3.src="aliens-03.png"
            Alien_4.src="aliens-04.png"
        }
        else if(results[0].label=="Background Noise"){
            Alien_1.src="aliens-01.png"
            Alien_2.src="aliens-02.png"
            Alien_3.src="aliens-03.gif"
            Alien_4.src="aliens-04.png"
        }
        else if(results[0].label=="Zip"){
            Alien_1.src="aliens-01.png"
            Alien_2.src="aliens-02.png"
            Alien_3.src="aliens-03.png"
            Alien_4.src="aliens-04.gif"
        }
    }
}