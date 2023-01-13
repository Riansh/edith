function speak(speak = "") {
  var synth = window.speechSynthesis;
  var utter = new window.SpeechSynthesisUtterance(speak);
  utter.pitch = 2;
  synth.speak(utter);
}

function listenbutnotalways() {
  var siri = new webkitSpeechRecognition();
  var listenedline = "";
  siri.onresult = (evt) => {
    listenedline = evt.results[0][0].transcript.toLowerCase();
    console.log(listenedline);
    if (listenedline.includes("hello")) {
      speak("hii");
    }
    if (listenedline.includes("hey")) {
      speak("hey there");
    }
    if (listenedline.includes("what is your name")) {
      speak("My name is edith");
    }
    if (listenedline.includes("who are you")) {
      speak("I am an Ai created by Riansh");
    }
    if (listenedline.includes("who are you")) {
      speak("the name is edith");
    }
    if (listenedline.includes("who is your brother")) {
      speak("friday");
      window.open("https://vedanshsharmakbj.web.app");
    }
    if (listenedline.includes("you up")) {
      speak("for you sir");
    }
    if (listenedline.includes("you up")) {
      speak("always");
    }

    if (listenedline.includes("what is the time")) {
      var time = new Date();
      var seconds = time.getSeconds();
      var minutes = time.getMinutes();
      var hours = time.getHours();

      if (seconds > 60) {
        seconds = 0;
        minutes = minutes + 1;
      }
      if (minutes > 60) {
        minutes = 0;
        hours = hours + 1;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (hours == 0) {
        hours = 12;
      }
      if (hours > 12) {
        hours = hours - 12;
      }
      speak(hours + " " + minutes);
    }
    if (listenedline.includes("what is the time")) {
      var time = new Date().getHours();
      if (time < 12) {
        speak("good morning sir");
      }
      if (time > 12 && time < 17) {
        speak("good afternoon sir");
      }
      if (time > 17 && time < 24) {
        speak("good evening sir");
      }
    }
    if (listenedline.includes("open google")) {
      speak("ok sir");
      window.open("https://www.google.com/");
    }
    if (listenedline.includes("open youtube")) {
      speak("ok sir");
      window.open("https://www.youtube.com");
    }
    if (
      listenedline.includes("what is your master name") ||
      listenedline.includes("who made you")
    ) {
      speak("Riansh sharma");
    }
    if (listenedline.includes("open my playlist")) {
      speak("ok sir");
      window.open(
        "https://www.youtube.com/playlist?list=PLJMkiFvIjzlaCYAm2B43UxRBSZO1YdAxE"
      );
    }
    if (listenedline.includes("play my favourite song")) {
      speak("ok sir");
      window.open(
        "https://www.youtube.com/watch?v=89dGC8de0CA&list=PLJMkiFvIjzlaCYAm2B43UxRBSZO1YdAxE&index=179"
      );
    }
    if (listenedline.includes("open whatsapp")) {
      speak("ok sir");
      window.open("https://web.whatsapp.com/");
    }
    if (listenedline.includes("you are so good")) {
      speak("heehee");
    }
    if (listenedline.includes("you are so good")) {
      speak("Thanku sir");
    }

    if (listenedline.includes("who is your brother")) {
      speak("Friday");
      window.open("https://vedanshsharmakbj.web.app");
    }

    if (listenedline.includes("nice talking to u")) {
      speak("same2u");
    }
    if (listenedline.includes("bye bye")) {
      speak("bye bye sir");
    }
    if (listenedline.includes("bye bye")) {
      window.close();
    }
    if (listenedline.includes("tell me a joke")) {
      speak("Why did a scarecrow win a award");
    }
    if (listenedline.includes("tell me a joke")) {
      speak("because he was outstanding at his field");
    }
  };

  siri.start();
  siri.onend = function () {
    siri.start();
  };
}
