var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector("footer");
var copyright = document.createElement("p");
copyright.innerHTML = `&copy; TatianaT ${thisYear}`;
footer.appendChild(copyright);

var skills = ["HTML", "CSS", "JavaScript"];
var skillSection = document.getElementById("skills");
var skillsList  = skillSection.querySelector("ul");
for (var i=0; i<skills.length; i++){
    var skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

