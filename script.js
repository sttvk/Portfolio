async function includeHTML(sectionId, filePath) {
  const response = await fetch(filePath);
  const content = await response.text();
  document.querySelector(sectionId).innerHTML = content;
}

includeHTML("#profile-section", "./markups/profile.html");
includeHTML("#about-section", "./markups/about.html");
includeHTML("#projects-section", "./markups/projects.html");
includeHTML("#contact-section", "./markups/contact.html");
