let deck = null;

// USE THIS FUNCTION TO CREATE CardElement JAVASCRIPT OBJECTS
function CardElement(card){
    let div = document.createElement("div");
    div.classList.add("cardHolder");

    let img = document.createElement("img");
    img.classList.add("cardImage");
    img.src = card.imgUrl();

    let p = document.createElement("p");
    p.classList.add("cardInfo")
    p.innerHTML = card.toString();

    div.appendChild(img);
    div.appendChild(p);

    this.div = div;
}

function shuffle(){
    // TODO
    // 1. Create a new Deck() object and assign it to the global variable 'deck'
    // 2. Get the button element with the id 'shuffle' and remove the class 'on'
    // 3. Get the image element with the id 'deckImage'
    //      and assign the source to './cards/backs/Blue.png'
    // 4. Get the div with the id 'playerCards'
    //      and assign the innerHTML to an empty string
    deck = new Deck();
    var shuffli = document.getElementById("shuffle");
    shuffli.classList.remove("on");

    var image = document.getElementById("deckImage");
    image.src = "./cards/backs/Blue.png";

    var playerCard = document.getElementById("playerCards");
    playerCard.innerHTML = " ";
}

function drawCard(){
    // TODO:
    // 1. If deck is null OR if deck.cards.length is less than 1
    //      - Get the image element with the id 'deckImage'
    //          and assign the source to './cards/backs/Red.png'
    //      - Get the button element with the id 'shuffle'
    //          and add the class 'on'
    //      - return
    // 2. Call deck.cards.pop()
    //      and assign the returned value to a variable called 'card'
    // 3. Create a new CardElement using the 'card' variable,
    //      and assign it to a a variable called 'element'
    // 4. Get the div with the id 'playerCards' and append 'element.div' 
    if(deck === null || deck.cards.length < 1){
        var image = document.getElementById("deckImage");
        image.src = './cards/backs/Red.png';
        var shuffling = document.getElementById("shuffle");
        shuffling.classList.add("on");
        return;
    }
    var card = deck.cards.pop();
    var element = new CardElement(card);
    var x = document.getElementById("playerCards");
    x.appendChild(element.div);
}

window.addEventListener("load", function(){
    // TODO:
    // 1. Call the shuffle() function defined above
    // 2. Add a "click" event listener to the image element with the id "deckImage"
    //    This listener will call the drawCard function defined above
    // 3. Add a "click" event listener to the button element with the id "shuffle"
    //    This listener will call the shuffle function defined above
    shuffle();
    var deckImg = document.getElementById("deckImage");
    deckImg.addEventListener("click",drawCard);
    
    var shuffly = document.getElementById("shuffle");
    shuffly.addEventListener("click",shuffle);
});
