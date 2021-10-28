const messages = [
    "Miguel",
    "Gexania",
    "Oscar",
    "Deymar",
    "Gabriel",
    "Atenea",
    "Andrea",
    "Gabriela"
];


const randomMsg = () => {

    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);

}


module.exports = { randomMsg };