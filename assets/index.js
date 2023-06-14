
// const projectData = {
// 	"data": [
// 		{
// 			"title" : "Snake",
//             "subtitle": "C++/SDL2",
// 			"desc": "Snake game made in a custom game engine based on C++ and SDL2. The purpose was to practice using SDL2. I made all of the art and sound effects",
//             "repo": "https://github.com/Fprosser/snake_game",
//             "repo_name": "Github",
//             "pic":"https://i.imgur.com/pq8ZTta.png"
// 		},
//         {
// 			"title" : "Onboarding",
//             "subtitle": "Html/PHP/CSS/REST",
// 			"desc": "An onboarding form I made for a local startup that integrates with their ERP platform through a REST Api integration",
//             "repo": "",
//             "repo_name": "",
//             "pic":"https://i.imgur.com/olLW1Md.png"
// 		}
// 	]
// }

const main = () => {
    loadProjects();
    console.log("Hello, World");
}

async function loadProjects() {
    const response = await fetch("assets/projects.json");
    const projectData = await response.json();
    console.log(projectData);

    const list = document.getElementById("list");
    projectData.data.forEach((value) =>{
        list.innerHTML +=`
        <div class = "col-sm text-dark bg-gray">
            <div class="card" style = "width: 25rem">
            <img class="card-img-top shadow-sm" style = " height: 325px; width: 398px; overflow: hidden; border: 5px solid black;" src="${value.pic}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${value.subtitle}</h6>
                <p class="card-text">${value.desc}</p>
                <a href="${value.repo}" class="card-link">${value?.repo_name}</a>
                <a href="#" class="card-link"></a>
            </div>
        </div>
        </div>`;

        //list.append(para);
    });
    
}
