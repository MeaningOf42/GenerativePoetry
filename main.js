function createPoem() {
  var poem_txt = "fire <br /> <br />";
  var poem_girl = `
match on tinder there was a spark
deep hot red burning in the heart
your like a campfire - a pleasant warmth that burns too close
embers of a once love that had been inferno long ago
turn too ash; lose hope`;
  var poem_fire = `
A fire is a living being you care for
Just like a lover,  flames can warm you, protect you, or hurt you more than anything
A beauty too as she dances
Tired now shes almost gone
But the wind may blow life into the flames once more, and the embers may again become a roaring furnace!`;

  for (var i = 0; i<poem_girl.split("\n").length; i++) {
    poem_txt += [poem_girl, poem_fire][Math.floor(Math.random()*2)].split("\n")[i];
    poem_txt += "<br />";
  }
  document.getElementById("poem").innerHTML = poem_txt;
}
