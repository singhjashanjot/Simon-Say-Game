let gamearray = [];
let userarray = [];

let btns = ["red", "yellow", "green", "purple"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("started ");
        start = true;

        levelup();
    }
})
function game_willflash(btn) {  //white color 
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);

}
function user_willflash(btn) {  //green color 
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);


}
function levelup() {
    userarray = [];
    level++;
    h2.innerText = `level ${level}`;

    let randomindex = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomindex];
    let randomebutton = document.querySelector(`.${randomcolor}`);

    gamearray.push(randomcolor);
    game_willflash(randomebutton);


}



function checkanswer(index) {
    if (userarray[index] == gamearray[index]) {
        if (userarray.length == gamearray.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b> ${level} </b> <br> Press anywhere to Start again `;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

        }, 500);

        reset();
    }
}

function reset() {
    start = false;
    gamearray = [];
    userarray = [];
    level = 0
}

function buttonpress() {
    let btn = this;
    user_willflash(btn);

    usercolor = btn.getAttribute("id");
    userarray.push(usercolor);
    checkanswer(userarray.length - 1);


}

let allbuttons = document.querySelectorAll(".btn");
for (btn of allbuttons) {
    btn.addEventListener("click",buttonpress);
}



