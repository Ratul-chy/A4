
let interviewlist = [ ];
let rejectedlist = [];


let jobs = document.getElementById("totaljobs");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const alljobscard = document.getElementById("alljobscard");

const maincontainer = document.querySelector('main');
console.log(maincontainer); 

console.log(alljobscard.children.length);

interviewlist.push();


function calculate() {
    jobs.innerText = alljobscard.children.length;
    interview.innerText = interviewlist.length;
    rejected.innerText = rejectedlist.length;
}

calculate();

function togglestyle(id) {

    console.log('toggled', id);

}

function showAbout(id) {
    document.getElementById("alljobscard").classList.add('hidden');
      document.getElementById("A-jobs").classList.add('hidden');
        document.getElementById("R-jobs").classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

