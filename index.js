// add solution here
const musicians = ["John Lennon", 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instruments = ['guitar', 'bass', 'guitar', 'drums'];

function theBeatlesPlay(musicians, instruments) {
  var allBeatles = [];
for (var i=0; i < musicians.length; i++) {
        allBeatles.push(musicians[i] + " plays " + instruments[i]);
    }
  return allBeatles;
}

 function johnLennonFacts() {
    const facts = ['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];
    const newFacts = [];
    var i = 0;
    while (i < newFacts.length) {
        facts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}
 function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}
