// Task 1: Decode the Reversed Messages
const reversedMessages = [
    " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC",
    "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB",
    "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY",
    ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
];

console.log("🔓 Decoded Messages:\n");

for (let msg of reversedMessages) {
    let decoded = msg.split('').reverse().join('');
    console.log(decoded + "\n");
}

// Task 2: Create and Encode Your Own Messages
const myMessages = [
    "Believe in your skills.",
    "Every expert was once a beginner.",
    "Progress takes time.",
    "Failure is part of learning."
];

console.log("🔁 Reversed Messages:\n");

for (let msg of myMessages) {
    let reversed = msg.split('').reverse().join('');
    console.log(reversed + "\n");
}
