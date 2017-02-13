// TASK 1
/*
Access HTML element with id tag-line.
Access all headings that belong to div with the class name bg-main-content.
Create the variable collect and assign it with content of tag-line.
Loop through the array of headings and append the content of each heading to variable collect
After the loop, use alert to print collect
*/
var tagLines = document.getElementById("tag-line");
var headings = document.querySelectorAll(".bg-main-content h2");
console.log(headings);
var collect = tagLines.innerHTML + "\n --------------------- \n";
for (var i = 0; i < headings.length; i += 1) {
    collect += headings[i].innerHTML + "\n";
}
alert(collect);
//TASK 2
/*
Access 13th div with class name box that belongs to div with the class name bg-main-content. 
You can name the variable when_to_launch.

Use property children to "scoop" in array all HTML elements that belong to that div.

Create the variable collect and assign it with content of heading that belongs to gotten array.
Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.
After the loop, use alert to print collect
*/
var heading2 = document.querySelector(".bg-main-content");
var when_to_launch = heading2.getElementsByClassName("box")[12];
console.log(when_to_launch);
var scoop = when_to_launch.children;
console.log(scoop);
var collect = scoop[0].innerHTML + "\n ------------------------- \n" + "";
for (var i = 1; i < scoop.length; i += 1) {
    collect += scoop[i].innerHTML + "\n" + "\n";
}
alert(collect);