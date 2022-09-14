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

const messageForm = document.getElementsByName('leave_message')[0];
console.log(messageForm);
messageForm.addEventListener('submit', myEvent => {
    myEvent.preventDefault();
    const name = myEvent.target.name;
    const email = myEvent.target.email;
    const message = myEvent.target.message;

    console.log("form submitted");

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const span = document.createElement("span");
    span.textContent = message;
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto: ${email.value}" target ="_blank">${name.value}</a><span> wrote: ${message.value} </span>`

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", (e) => {
        const entry = e.target.parentNode;
        const ul = entry.parentNode;
        ul.removeChild(entry);
        newMessage.appendChild(removeButton);
    });

    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageForm.reset();
});

fetch("https://api.github.com/users/TatianaUT/repos") 
  .then((response) => {

    return response.json(); 
  })
  .then((repositories) => {
   
    //Display Repositories in the browser
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");
      let linkProject = document.createElement("a");

      linkProject.innerText = repositories[i].name;
      project.className = "projects-li";
      projectList.appendChild(project);
      project.appendChild(linkProject);
    }
  })
  .catch((err) => {
    //fire a function when there is an error
    console.log("rejected", err.message);
  });