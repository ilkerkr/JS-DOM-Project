//! BODY

const baba = document.querySelector("body");
baba.style.height = "95vh";
baba.style.backgroundColor = "#e0ddca";

//! HEADER

//? BAŞLIK
const baslik = document.querySelector(".tittle");

baslik.textContent = "Javascript Dom Assignmet 1";
baslik.style.color = "#9ccd62";

//? LİNKLER
const value = document.querySelectorAll(".link");

value[0].textContent = "Home";
value[0].style.textDecoration = "none";
value[0].style.color = "#9ccd62";
value[0].style.fontSize = "20px";

value[1].textContent = "Contact";
value[1].style.textDecoration = "none";
value[1].style.color = "#9ccd62";
value[1].style.marginLeft = "25px";
value[1].style.fontSize = "20px";

//? KAPSAYICI LİNK
const üstLink = document.querySelector(".links");
üstLink.style.marginTop = "20px";

//? HEADER
const headerRenk = document.querySelector("#head");

headerRenk.style.textAlign = "center";
headerRenk.style.width = "70%";
headerRenk.style.backgroundColor = "black";
headerRenk.style.margin = "15px auto";
headerRenk.style.borderRadius = "10px";
headerRenk.style.padding = "20px";
headerRenk.style.boxShadow = "10px 10px 5px #9ccd62";
headerRenk.style.fontWeight = "bold";

//! MAİN

//TODO: MAİN YERİNİN YUKARI TARAFI

//? İNPUTLARIMIN OLDUĞU YER
const form = document.querySelector(".main-top");

form.style.marginTop = "80px";
form.style.textAlign = "center";

//? BİRİNCİ İNPUTUM
const formText = document.querySelector(".firstName");

formText.setAttribute("placeholder", "Lütfen isminizi giriniz");
formText.style.textAlign = "center";
formText.style.outline = "none";
formText.style.border = "none";
formText.style.padding = "13px";
formText.style.borderRadius = "7px";
formText.style.backgroundColor = "black";
formText.style.color = "#9ccd62";

//?İKİNCİ İNPUTUM
const formPass = document.querySelector(".password");

formPass.setAttribute("placeholder", "Lütfen şifrenizi giriniz.");
formPass.style.margin = "0 10px";
formPass.style.textAlign = "center";
formPass.style.outline = "none";
formPass.style.border = "none";
formPass.style.padding = "13px";
formPass.style.borderRadius = "7px";
formPass.style.backgroundColor = "black";
formPass.style.color = "#9ccd62";

//? BUTONUM
const buton = document.querySelector(".button");

buton.textContent = "Giriş Yap";
buton.style.padding = "12px";
buton.style.outline = "none";
buton.style.border = "none";
buton.style.borderRadius = "7px";
buton.style.cursor = "pointer";
buton.style.backgroundColor = "black";
buton.style.color = "grey";
buton.style.boxShadow = "7px 7px 5px grey";

buton.onmouseover = function () {
  buton.style.backgroundColor = "grey";
  buton.style.color = "black";
  buton.style.boxShadow = "7px 7px 5px black";
};
buton.onmouseout = function () {
  buton.style.backgroundColor = "black";
  buton.style.color = "grey";
  buton.style.boxShadow = "7px 7px 5px grey";
};

//TODO: MAİN TARAFIN ALT TARAFI

//?LİSTELERİN BAŞLIĞI
const listBaslik = document.querySelector(".main-tittle");

listBaslik.textContent = "JS DOM Projects";
listBaslik.style.textAlign = "center";
listBaslik.style.width = "50%";
listBaslik.style.margin = "100px auto 0";
listBaslik.style.fontWeight = "bold";
listBaslik.style.backgroundColor = "black";
listBaslik.style.color = "#9ccd62";
listBaslik.style.padding = "10px";
listBaslik.style.borderRadius = "5px";
listBaslik.style.boxShadow = "7px 7px 5px #9ccd62"

//? LİSTELER
const listeler = document.querySelectorAll("ul li");

listeler[0].textContent = "Hello World!";
listeler[0].style.padding = "10px";
listeler[0].style.fontWeight = "600";
listeler[0].style.fontSize = "25px";
listeler[0].onmouseover = function () {
    listeler[0].style.backgroundColor = "black";
    listeler[0].style.color = "#9ccd62"
}
listeler[0].onmouseout = function () {
    listeler[0].style.backgroundColor = "#e0ddca";
    listeler[0].style.color = "black";
}


listeler[1].textContent = "Guess Number";
listeler[1].style.padding = "10px";
listeler[1].style.fontWeight = "600";
listeler[1].style.fontSize = "25px";
listeler[1].onmouseover = function () {
    listeler[1].style.backgroundColor = "black";
    listeler[1].style.color = "#9ccd62"
}
listeler[1].onmouseout = function () {
    listeler[1].style.backgroundColor = "#e0ddca";
    listeler[1].style.color = "black";
}


listeler[2].textContent = "Checkout Page";
listeler[2].style.padding = "10px";
listeler[2].style.fontWeight = "600";
listeler[2].style.fontSize = "25px";
listeler[2].onmouseover = function () {
    listeler[2].style.backgroundColor = "black";
    listeler[2].style.color = "#9ccd62"
}
listeler[2].onmouseout = function () {
    listeler[2].style.backgroundColor = "#e0ddca";
    listeler[2].style.color = "black";
}

listeler[3].textContent = "Gelir-Gider Projesi";
listeler[3].style.padding = "10px";
listeler[3].style.fontWeight = "600";
listeler[3].style.fontSize = "25px";
listeler[3].onmouseover = function () {
    listeler[3].style.backgroundColor = "black";
    listeler[3].style.color = "#9ccd62"
}
listeler[3].onmouseout = function () {
    listeler[3].style.backgroundColor = "#e0ddca";
    listeler[3].style.color = "black";
}


listeler[4].textContent = "Api Projects";
listeler[4].style.padding = "10px";
listeler[4].style.fontWeight = "600";
listeler[4].style.fontSize = "25px";
listeler[4].onmouseover = function () {
    listeler[4].style.backgroundColor = "black";
    listeler[4].style.color = "#9ccd62"
}
listeler[4].onmouseout = function () {
    listeler[4].style.backgroundColor = "#e0ddca";
    listeler[4].style.color = "black";
}


//? LİSTELERİN BAŞI UL 
const baslist = document.querySelector("ul");

baslist.style.width = "50%";
baslist.style.margin = "50px auto"
baslist.style.listStyleType = "upper-roman";