
let questions = [
    {
        id: 1,
        question: "apa kepanjangan dari RAM?",
        answer:"Random Access Memory",
        options: [
            "Run Accept Memory",
            "Random All Memory",
            "Random Access Memory",
            "tidak ada yang benar"
        ]   
    },
    {
        id: 2,
        question: "apa kepanjangan dari CPU?",
        answer: "Central Processing Unit",
        options: [
          "Central Program Unit",
          "Central Processing Unit",
          "Central Preload Unit",
          "tidak ada yang benar"
        ]
      },
      {
        id: 3,
        question: "apa kepanjangan dari E-mail",
        answer: "Electronic Mail",
        options: [
          "Electronic Mail",
          "Electric Mail",
          "Engine Mail",
          "tidak ada yang benar"
        ]
      },
      {
        id: 4,
        question: "'DB' dalam komputer berarti?",
        answer: "DataBase",
        options: [
          "Double Byte",
          "Data Block",
          "DataBase",
          "tidak ada yang benar"
        ]
      },
      {
        id: 5,
        question: "apa itu FMD?",
        answer: "Fluorescent Multi-Layer Disc",
        options: [
          "Fluorescent Multi-Layer Disc",
          "Flash Media Driver",
          "Fast-Ethernet Measuring Device",
          "tidak ada yang benar"
        ]
      },
      {
        id: 6,
        question: "berapa banyak bit dalam 1 byte?",
        answer: "8",
        options: [
          "32",
          "16",
          "8",
          "64"
        ]
      },
      {
        id: 7,
        question: "JPG berarti :",
        answer: "A format for an image file",
        options: [
          "format untuk file gambar",
          "A Jumper Programmed Graphic",
          "jenis Harddisk",
          "satuan ukur untuk memory"
        ]
      },
      {
        id: 8,
        question: "mana yang merupakan komputer mainframe awal?",
        answer: "ENIAC",
        options: [
          "ENIAC",
          "EDVAC",
          "UNIC",
          "ABACUS"
        ]
      },
      {
        id: 9,
        question: "papan sirkuit utama dalam komputer adalah:",
        answer: "Mother board",
        options: [
          "Harddisk",
          "Mother board",
          "Microprocessor",
          "tidak ada yang benar"
        ]
      },
      {
        id: 10,
        question: "ISP berarti:",
        answer: "Internet Service Provider",
        options: [
          "Internet Survey Period",
          "Integreted Service Provider",
          "Internet Security Protocol",
          "Internet Service Provider"
          
        ]
      },
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}