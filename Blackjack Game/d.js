let cards = [{name: "2 of Clubs", value: 2, img: "/Cards/Clubs/2 of Clubs.jpg"},
    {name: "3 of Clubs", value: 3, img: "/Cards/Clubs/3 of Clubs.jpg"},
    {name: "4 of Clubs", value: 4, img: "/Cards/Clubs/4 of Clubs.jpg"},
    {name: "5 of Clubs", value: 5, img: "/Cards/Clubs/5 of Clubs.jpg"},
    {name: "6 of Clubs", value: 6, img: "/Cards/Clubs/6 of Clubs.jpg"},
    {name: "7 of Clubs", value: 7, img: "/Cards/Clubs/7 of Clubs.jpg"},
    {name: "8 of Clubs", value: 8, img: "/Cards/Clubs/8 of Clubs.jpg"},
    {name: "9 of Clubs", value: 9, img: "/Cards/Clubs/9 of Clubs.jpg"},
    {name: "10 of Clubs", value: 10, img: "/Cards/Clubs/10 of Clubs.jpg"},
    {name: "Ace of Clubs", value1: 1, value2: 11, img: "/Cards/Clubs/Ace of Clubs.jpg"},
    {name: "Jack of Clubs", value: 10, img: "/Cards/Clubs/Jack of Clubs.jpg"},
    {name: "King of Clubs", value: 10, img: "/Cards/Clubs/King of Clubs.jpg"},
    {name: "Queen of Clubs", value: 10, img: "/Cards/Clubs/Queen of Clubs.jpg"},

    {name: "2 of Diamonds", value: 2, img: "/Cards/Diamonds/2 of Diamonds.jpg"},
    {name: "3 of Diamonds", value: 3, img: "/Cards/Diamonds/3 of Diamonds.jpg"},
    {name: "4 of Diamonds", value: 4, img: "/Cards/Diamonds/4 of Diamonds.jpg"},
    {name: "5 of Diamonds", value: 5, img: "/Cards/Diamonds/5 of Diamonds.jpg"},
    {name: "6 of Diamonds", value: 6, img: "/Cards/Diamonds/6 of Diamonds.jpg"},
    {name: "7 of Diamonds", value: 7, img: "/Cards/Diamonds/7 of Diamonds.jpg"},
    {name: "8 of Diamonds", value: 8, img: "/Cards/Diamonds/8 of Diamonds.jpg"},
    {name: "9 of Diamonds", value: 9, img: "/Cards/Diamonds/9 of Diamonds.jpg"},
    {name: "10 of Diamonds", value: 10, img: "/Cards/Diamonds/10 of Diamonds.jpg"},
    {name: "Ace of Diamonds", value1: 1, value2: 11, img: "/Cards/Diamonds/Ace of Diamonds.jpg"},
    {name: "Jack of Diamonds", value: 10, img: "/Cards/Diamonds/Jack of Diamonds.jpg"},
    {name: "King of Diamonds", value: 10, img: "/Cards/Diamonds/King of Diamonds.jpg"},
    {name: "Queen of Diamonds", value: 10, img: "/Cards/Diamonds/Queen of Diamonds.jpg"},

    {name: "2 of Hearts", value: 2, img: "/Cards/Hearts/2 of Hearts.jpg"},
    {name: "3 of Hearts", value: 3, img: "/Cards/Hearts/3 of Hearts.jpg"},
    {name: "4 of Hearts", value: 4, img: "/Cards/Hearts/4 of Hearts.jpg"},
    {name: "5 of Hearts", value: 5, img: "/Cards/Hearts/5 of Hearts.jpg"},
    {name: "6 of Hearts", value: 6, img: "/Cards/Hearts/6 of Hearts.jpg"},
    {name: "7 of Hearts", value: 7, img: "/Cards/Hearts/7 of Hearts.jpg"},
    {name: "8 of Hearts", value: 8, img: "/Cards/Hearts/8 of Hearts.jpg"},
    {name: "9 of Hearts", value: 9, img: "/Cards/Hearts/9 of Hearts.jpg"},
    {name: "10 of Hearts", value: 10, img: "/Cards/Hearts/10 of Hearts.jpg"},
    {name: "Ace of Hearts", value1: 1, value2: 11, img: "/Cards/Hearts/Ace of Hearts.jpg"},
    {name: "Jack of Hearts", value: 10, img: "/Cards/Hearts/Jack of Hearts.jpg"},
    {name: "King of Hearts", value: 10, img: "/Cards/Hearts/King of Hearts.jpg"},
    {name: "Queen of Hearts", value: 10, img: "/Cards/Hearts/Queen of Hearts.jpg"},

    {name: "2 of Spades", value: 2, img: "/Cards/Spades/2 of Spades.jpg"},
    {name: "3 of Spades", value: 3, img: "/Cards/Spades/3 of Spades.jpg"},
    {name: "4 of Spades", value: 4, img: "/Cards/Spades/4 of Spades.jpg"},
    {name: "5 of Spades", value: 5, img: "/Cards/Spades/5 of Spades.jpg"},
    {name: "6 of Spades", value: 6, img: "/Cards/Spades/6 of Spades.jpg"},
    {name: "7 of Spades", value: 7, img: "/Cards/Spades/7 of Spades.jpg"},
    {name: "8 of Spades", value: 8, img: "/Cards/Spades/8 of Spades.jpg"},
    {name: "9 of Spades", value: 9, img: "/Cards/Spades/9 of Spades.jpg"},
    {name: "10 of Spades", value: 10, img: "/Cards/Spades/10 of Spades.jpg"},
    {name: "Ace of Spades", value1: 1, value2: 11, img: "/Cards/Spades/Ace of Spades.jpg"},
    {name: "Jack of Spades", value: 10, img: "/Cards/Spades/Jack of Spades.jpg"},
    {name: "King of Spades", value: 10, img: "/Cards/Spades/King of Spades.jpg"},
    {name: "Queen of Spades", value: 10, img: "/Cards/Spades/Queen of Spades.jpg"},
]

for(let i = 0; i < 1; i++){

    if(cards.length != -1){
       
let c =  Math.floor(Math.random()*cards.length)

   const x = cards.splice(c, 1);
        console.log(x)
        console.log(x[0].name)
console.log(cards.length)
console.log(cards)}}