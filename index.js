const getProjects = async () => {
  const selectedProjects = [
    "lookahead",
    "plugpkg",
    "do-it-lazy",
    "techesta-webslinger",
    "automated-marksheet-generator",
    "teddytags",
  ];
  const res = await (
    await fetch("https://api.github.com/users/obnoxiousnerd/repos?type=all")
  ).json();
  const projects = Array.from(res)
    .filter((node) => selectedProjects.includes(node.name))
    .map((node) => {
      const data = {};
      data.name = node.name;
      data.description = node.description || "";
      data.url = node.html_url;
      return data;
    });
  return projects;
};

getProjects().then((projects) => {
  const templateNode = document.querySelector("template.project-list-item");
  const projectListNode = document.querySelector(".project-list");
  projects.forEach((project) => {
    const projectNode = templateNode.content.cloneNode(true);
    projectNode.querySelector("h3").innerHTML = project.name;
    projectNode.querySelector("p").innerHTML = project.description;
    projectNode.querySelector(".goto-url").href = project.url;
    projectListNode.appendChild(projectNode);
  });
});
