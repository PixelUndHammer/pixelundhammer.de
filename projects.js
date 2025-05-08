fetch('projects.json')
    .then(response => response.json())
    .then(projects => {
            const grid = document.querySelector('.project-grid');
            projects.forEach(project => {
                        const card = document.createElement('div');
                        card.classList.add('project-card');
                        if (project.wip) card.classList.add('wip');

                        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

                        card.innerHTML = `
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-img" />
          ${project.wip ? '<div class="wip-overlay">Work in Progress</div>' : ''}
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">${tagsHtml}</div>
          <div class="project-links">
            ${project.github ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
            ${project.makerworld ? `<a href="${project.makerworld}" target="_blank"><i class="fas fa-cube"></i></a>` : ''}
            ${project.instagram ? `<a href="${project.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : ''}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Fehler beim Laden der Projekte:", error);
  });