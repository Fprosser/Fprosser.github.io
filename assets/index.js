
const main = () => {
    loadProjects();
    console.log("Hello, World");
}

async function loadProjects() {
    const response = await fetch("assets\projects.json");
    const jsonData = await response.json();
    console.log(jsonData);
    
}
