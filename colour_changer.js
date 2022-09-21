var color = ['RED','BLUE','GREEN','BROWN','YELLOW','BLACK','WHITE','PURPLE','ORANGE','PINK','TOMATO'];
var colorIdx = 1;
function changeColor(){
    const backColor = document.getElementById("colors")
    const color_name = document.getElementById("color_name");
    backColor.style.backgroundColor = color[colorIdx];
    color_name.innerHTML = "BACKGROUND COLOUR: "+color[colorIdx]
    colorIdx ++;
    if (colorIdx == color.length){
        colorIdx = 0;
    };
};