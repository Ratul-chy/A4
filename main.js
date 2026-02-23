
let interviewlist = [ ];
let rejectedlist = [];


let jobs = document.getElementById("totaljobs");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const alljobscard = document.getElementById("alljobscard");
const statusBtn = document.getElementById("statusBtn");

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


interviewlist.push("interviewed");


maincontainer.addEventListener('click', function(event) {



    if (event.target.classList.contains('interviewd')) {
        interviewlist.push("interviewed");
        calculate();
    }
    if (event.target.classList.contains('btn-error')) {
        rejectedlist.push("btn-error");
        calculate();
    }

});


document.addEventListener("DOMContentLoaded", function () {

    const interviewButtons = document.querySelectorAll(".interviewd");
    const appliedSection = document.getElementById("A-jobs");
    const emptyMessage = document.getElementById("emptyMessage");

    interviewButtons.forEach(button => {
        button.addEventListener("click", function () {

            const jobCard = this.closest(".container");


            appliedSection.classList.remove("hidden");

           
            if (emptyMessage) {
                emptyMessage.style.display = "none";
            }

            appliedSection.appendChild(jobCard);

        });
    });

});


document.addEventListener("DOMContentLoaded", function () {

    const rejectButtons = document.querySelectorAll(".btn-error");
    const rejectedSection = document.getElementById("R-jobs");
    const emptyRejected = document.getElementById("emptyRejected");

    rejectButtons.forEach(button => {
        button.addEventListener("click", function () {

            const jobCard = this.closest(".container");

           
            rejectedSection.classList.remove("hidden");

            
            if (emptyRejected) {
                emptyRejected.style.display = "none";
            }

           
            rejectedSection.appendChild(jobCard);

        });
    });

});

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interviewd')) {
        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.company-name').innerText
        const jobTitle = parenNode.querySelector('.job-title').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const status = parenNode.querySelector('.statusBtn').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.statusBtn').innerText = 'Interviewed'

        const cardInfo = {
            companyName,
            jobTitle,
            salary,
            status: 'Interviewed',
            notes
        }

        const jobExist = thrivingList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            thrivingList.push(cardInfo)
        }

        // step 2 finish
        // removing the job from struggling list
        strugglingList = strugglingList.filter(item => item.companyName != cardInfo.companyName)

        // after remove rerender the html
        if (currentStatus == 'rejected-filter-btn') {
            renderStruggling()
        }

         calculateCount()


    } else if (event.target.classList.contains('btn-error')) {
        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.company-name').innerText
        const jobTitle = parenNode.querySelector('.job-title').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const status = parenNode.querySelector('.statusBtn').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.statusBtn').innerText = 'Rejected'

        const cardInfo = {
            companyName,
            jobTitle,
            salary,
            status: 'Rejected',
            notes
        }

        const jobExist = strugglingList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            strugglingList.push(cardInfo)
        }

        // removing the job from thriving list
        thrivingList = thrivingList.filter(item => item.companyName != cardInfo.companyName)

        // console.log(thrivingList);

        // after remove rerender the html
        if (currentStatus == "interview-filter-btn") {
            renderThriving();
        }
        calculateCount()

    }

})

// step 3  html file create
function renderThriving() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let thrive of thrivingList) {
        console.log(thrive);

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${thrive.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status">${thrive.status}</p>
                     <p class="notes">New leaf unfurling by the east window.</p>

                     <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function renderStruggling() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    // crating innerHtml
    for (let struggle of strugglingList) {

        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8'
        div.innerHTML = `
         <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${struggle.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- part 3 -->
                     <p class="status">${struggle.status}</p>
                     <p class="notes">New leaf unfurling by the east window.</p>

                     <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
                </div>
        `
        filterSection.appendChild(div)
    }
}





