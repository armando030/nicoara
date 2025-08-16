let gallerySections;
let content;
let clase;

function showSection(gallerySections,clase) {
     content = document.getElementsByClassName(clase); 

    /* Hide all sections by default */
for (i=0; i < content.length; i++) {
    content[i].style.display = 'none';
}

    document.getElementById(gallerySections).style.display = 'flex';
}