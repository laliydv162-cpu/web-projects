let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copydiv = document.querySelector(".copyCode");
let rgb1 = "#25ff66ff";
let rgb2 = "#ee4c67ff";

const hexvalue = () => {
   let btnhandle = "0123456789abcdef";
   let colors = "#";
   for (let i = 0; i < 6; i++) {
      Math.random();
      colors = colors + btnhandle[Math.floor(Math.random() * 16)];
   }
   return colors;
};
const btnhandle1 = () => {
   rgb1 = hexvalue();
   console.log(rgb1);
   btn1.style.backgroundColor = rgb1;
   btn1.innerText = rgb1;
   document.body.style.backgroundImage =
      `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copydiv.innerHTML = ` background-image : linear-gradient(to right,${rgb1},${rgb2})`;
};

const btnhandle2 = () => {
   rgb2 = hexvalue();
   console.log(rgb2);
   btn2.style.backgroundColor = rgb2;
   btn2.innerText = rgb2;
   document.body.style.backgroundImage =
      `linear-gradient(to right, ${rgb1},${rgb2})`;
   copydiv.innerHTML = ` background-image : linear-gradient(to right,${rgb1},${rgb2})`;
};

btn1.addEventListener("click", btnhandle1);
btn2.addEventListener("click", btnhandle2);

copydiv.addEventListener("click", () => {
   navigator.clipboard.writeText(copydiv.innerText);
});


