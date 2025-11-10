'use strict';
const number_of_candidates = parseInt(prompt("Write number of candidates:"));
const dictionary_of_candidates = [];
for (let i = 1; i <= number_of_candidates; i++){
    let name = prompt(`Name for candidate ${i} : `);
    dictionary_of_candidates.push({ name: name, votes: 0 });
}
const number_of_voters = parseInt(prompt("Write number of voters:"));
for (let i = 1; i <= number_of_voters; i++) {
    const vote = prompt(` Voter ${i}: enter candidate you vote for: `);
    for (let candidate of dictionary_of_candidates) {
        if (vote === candidate.name) {
            candidate.votes++;
        }
    }
}
console.log("Election results:");
for (let f of dictionary_of_candidates){
     console.log(`Candidate ${f.name} has ${f.votes} votes`);
}

dictionary_of_candidates.sort((a, b) => {
   // console.log(a, b);
   return b - a;
});

console.log(`The winner is  ${dictionary_of_candidates[0].name} with ${dictionary_of_candidates[0].votes} votes.`);

