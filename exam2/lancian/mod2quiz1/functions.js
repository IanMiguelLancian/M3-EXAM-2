var kbquote = [
    '"Dedication makes dreams come true."', '"May you always remember to enjoy the road, especially when its a hard one."',
    '"The most important thing is to try and inspire people so that they can be great at whatever they want to do."',
    '"The beauty in being blessed with talent is rising above doubters to create a beautiful moment."',
    '"Great things come from hard work and perseverance. No Excuses."'
]
function kobeB() {
    var kranQuotes = Math.floor(Math.random() * (kbquote.length)); 
    document.getElementById('Kbdis').innerHTML = kbquote[kranQuotes];
}

var wsquote = [
    '"Life is lived on the edge."', '"The right people, the ones who really belong in your life, will come to you and stay."',
    '"Smiling is the best way to face every problem, to crush every fear and to hide every pain."', 
    '"Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too."',
    '"I wake up every morning believing today is going to be better than yesterday."'
]
function willS() {
    var wranQuotes = Math.floor(Math.random() * (wsquote.length)); 
    document.getElementById('Wsdis').innerHTML = wsquote[wranQuotes];
}

var djquote = [
    '"One of the most important things you can accomplish is just being yourself."',
    '"Dont focus on the pain. Focus on the progress."', '"You either play the game or let the game play you."',
    '"Be humble. Be hungry. And always be the hardest worker in the room."', 
    '"Let your actions do your talking for you."'
]
function dwayneJ() {
    var dranQuotes = Math.floor(Math.random() * (djquote.length)); 
    document.getElementById('Djdis').innerHTML = djquote[dranQuotes];
}

var scquote = [
    '"Be the best version of yourself in anything you do. You dont have to live anybody else story."',
    '"Success is born out of faith, an undying passion, and a relentless drive."',
    '"Be humble and be grateful for all the blessings in your life."',
    '"Its not about getting any of the glory for yourself, its all for God\'s glory."',
    '"Sometimes people make it seem like you have to have certain prerequisites or a crazy life story in order to be successful in this world. But the truth is you really dont."'
]
function stephenC() {
    var sranQuotes = Math.floor(Math.random() * (scquote.length)); 
    document.getElementById('Scdis').innerHTML = scquote[sranQuotes];
}

var bmquote = [
    '"Love the life you live, live the life you love."',
    '"You just cant live in that negative way.....make way for the positive day."',
    '"Man cant do without God. Just like youre thirsty, you have to drink water. You just cant go without God."',
    '"Keep calm and chive on".',
    '"Every man gotta a right to decide his own destiny."'
]
function bobM(){
    var branQuotes = Math.floor(Math.random() * (bmquote.length));
    document.getElementById('Bmdis').innerHTML = bmquote[branQuotes];
}