// const container = document.querySelector(".container-project");

// // 建立 project card（抽象化、可重用）
// function createProjectCard(project) {
//     const div = document.createElement("div");
//     div.className = "project-card";
//     div.style.backgroundImage = `url('${project.img}')`;

//     div.innerHTML = `
//         <div class="project-card-content">
//             <h1>${project.title}</h1>
//             <p>${project.description}</p>
//         </div>
//     `;
//     return div;
// }

// // OOP class
// class Portfolio {
//     constructor(projects) {
//         this.projects = projects;
//     }

//     render() {
//         const container = document.querySelector(".container-project");
//         container.innerHTML = "";
//         this.projects.forEach(p => {
//             container.appendChild(createProjectCard(p));
//         });
//     }
// }

// // 建立 portfolio 物件
// const portfolio = new Portfolio(projects);
// portfolio.render();

// // Button: 僅顯示第一個 project
// document.querySelector("#filterBtn").addEventListener("click", () => {
//     const container = document.querySelector(".container-project");
//     container.innerHTML = "";

//     if (projects.length > 0) {
//         container.appendChild(createProjectCard(projects[0]));
//     }
// });

// let expanded = false;

// document.querySelector("#filterBtn").addEventListener("click", () => {
//     const container = document.querySelector(".container-project");

//     if (!expanded) {
//         // 展開模式
//         container.innerHTML = "";
//         const bigCard = createProjectCard(projects[0]);
//         bigCard.classList.add("expanded");
//         container.appendChild(bigCard);

//         expanded = true;
//         filterBtn.textContent = "Back to All Projects";
//     } else {
//         // 返回原本頁面
//         portfolio.render();
//         expanded = false;
//         filterBtn.textContent = "Show Only First Project";
//     }
// });

const container = document.querySelector(".container-project");

// 建立 project card（抽象化、可重用）
function createProjectCard(project) {
    const div = document.createElement("div");
    div.className = "project-card";
    div.style.backgroundImage = `url('${project.img}')`;

    div.innerHTML = `
        <div class="project-card-content">
            <h1>${project.title}</h1>
            <p>${project.description}</p>
        </div>
    `;
    return div;
}

// OOP class
class Portfolio {
    constructor(projects) {
        this.projects = projects;
    }

    render() {
        const container = document.querySelector(".container-project");
        container.innerHTML = "";
        this.projects.forEach(p => {
            container.appendChild(createProjectCard(p));
        });
    }
}

const portfolio = new Portfolio(projects);
portfolio.render();

// ------------------ 展開模式（Expand Mode） ------------------

let expanded = false;

document.querySelector("#filterBtn").addEventListener("click", () => {
    const container = document.querySelector(".container-project");

    // 展開專案模式
    if (!expanded) {
        container.innerHTML = "";
        const bigCard = createProjectCard(projects[0]);
        bigCard.classList.add("expanded");  // 加上展開class
        container.appendChild(bigCard);

        expanded = true;
        filterBtn.textContent = "Back to All Projects";
    }

    // 回到全部專案
    else {
        portfolio.render();
        expanded = false;
        filterBtn.textContent = "Show Only First Project";
    }
});
