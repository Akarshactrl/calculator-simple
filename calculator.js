let display = document.getElementById("display");
let buttonsDiv = document.getElementById("buttons");

let buttons = [
"7","8","9","/",
"4","5","6","*",
"1","2","3","-",
"0",".","=","+",
"C","⌫"
];

for(let i = 0; i < buttons.length; i++)
{
let btn = document.createElement("button");
btn.innerText = buttons[i];

btn.onclick = function()
{
if(buttons[i] == "=")
{
display.value = eval(display.value);
}
else if(buttons[i] == "C")
{
display.value = "";
}
else if(buttons[i] == "⌫")
{
display.value = display.value.slice(0,-1);
}
else
{
display.value += buttons[i];
}
};

buttonsDiv.appendChild(btn);
}