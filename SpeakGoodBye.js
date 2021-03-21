
(function (window) {

var byeSpeaker = {};
byeSpeaker.names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var speakWord = "Good Bye";

byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
})(window);
