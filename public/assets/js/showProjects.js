document.addEventListener('DOMContentLoaded', function () {
    const projectDetailsSection = document.getElementById('sectDetails');
    const projectName = document.getElementById('projectName');
    const projectDescription = document.getElementById('projectDescription');
    const closeButton = document.getElementById('closeDetails');
    const container = document.querySelector('.container');

    projectDetailsSection.style.display = 'none';

    document.querySelectorAll('.show-project').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const projectId = this.getAttribute('data-id');
            const project = projectsData.find(p => {
                return p.id === Number(projectId);
            });

            if (project) {
                projectName.textContent = project.name;
                projectDescription.textContent = project.description.replaceAll("-", "\u2001" + "\u2001-");
                projectDescription.style.textAlign = 'left';
                projectDescription.style.whiteSpace = 'pre-line';
                projectDetailsSection.style.display = 'block';
                projectDetailsSection.style.backgroundColor = project.color;
                container.classList.add('blurred');


                projectDetailsSection.classList.remove('close');
                projectDetailsSection.classList.add('open');

                closeButton.style.color = project.color;
            }
        });
    });

    closeButton.addEventListener('click', function () {
        projectDetailsSection.classList.remove('open');
        projectDetailsSection.classList.add('close');

        setTimeout(() => {
            projectDetailsSection.style.display = 'none';
            container.classList.remove('blurred');
        }, 800);
    });
});