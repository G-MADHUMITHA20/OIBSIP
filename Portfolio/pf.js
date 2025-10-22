function downloadMyResume() {
  const link = document.createElement("a");
  link.href = "Madhumitha_Resume.pdf";
  link.download = "Madhumitha_Resume.pdf";
  link.click();
}

let currentProject = "";

function openProjectModal(projectName) {
  currentProject = projectName;
  document.getElementById("projectModal").style.display = "flex";
}

document.getElementById("liveDemoBtn").addEventListener("click", () => {
  const links = getProjectLinks(currentProject);
  window.open(links.live, "_blank");
  closeModal();
});

document.getElementById("githubBtn").addEventListener("click", () => {
  const links = getProjectLinks(currentProject);
  window.open(links.github, "_blank");
  closeModal();
});

document.getElementById("exitBtn").addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

function getProjectLinks(projectName) {
  let github = "";
  let live = "";

  if (projectName === "notes") {
    github = "https://github.com/G-MADHUMITHA20/HTML-CSS-JAVASCRIPT";
    live = "https://madzcode.neocities.org/PointIT/";
  } else if (projectName === "todo") {
    github = "https://github.com/G-MADHUMITHA20/HTML-CSS-JAVASCRIPT";
    live = "https://madzcode.neocities.org/To_Do%20List/tdl";
  } else if (projectName === "agecalc") {
    github = "https://github.com/G-MADHUMITHA20/HTML-CSS-JAVASCRIPT";
    live = "https://madzcode.neocities.org/Age%20Calculator/ac";
  }

  return { github, live };
}



