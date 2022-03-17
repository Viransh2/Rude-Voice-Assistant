const btn = document.querySelector("button");
const content = document.querySelector(".content");


const greetings = ["i am good you little junk head", "Why do you care", "Stop sharing your nonsense with me"];

const weather = ["Why do you care you just stay and watch tv the whole day", "You should be put in a tan so you never ask me about the weather"]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("active");
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readAloud(transcript)
}


btn.addEventListener("click", () => {
    recognition.start();
});

function readAloud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I do not have the ability to answer this."

    if(message.includes("how are you")) {
       const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    } else if (message.includes("what is the weather")) {
        const finalText2 = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText2;
    }
    else if (message.includes("stop being so rude")) {
        const finalText3 = "you stupid head even a little kid would not mind my question which you think is bad" || "you stink"; 
        speech.text = finalText3;
    }

    if (message.includes("what will you do if you are angry")) {
        const wil = "i will slap you on the face";
        speech.text = wil;
    }
    else if (message.includes("you stupid head")) {
        const wil2 = "you fuss so much that is why you get in trouble in school that much.";
        speech.text = wil2;
    }
    if (message.includes("I will kill you")) {
        const go = "If i kill you first you will be dead and i will be alive.";
        speech.text = go;
    }
    if (message.includes("bye")) {
        const go2 = "Thanks now i will finally get rid out of your dumb and stupid nonsense";
        speech.text = go2;
    } else if (message.includes("you s word")) {
        const badword = "You are a big f worded a word hole";
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
