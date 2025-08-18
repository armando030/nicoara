let Sections;
let content;
let clase;

function showSection(Sections,clase) {
     content = document.getElementsByClassName(clase); 

    /* Hide all sections by default */
for (i=0; i < content.length; i++) {
    content[i].style.display = 'none';
}

    document.getElementById(Sections).style.display = 'flex';
}