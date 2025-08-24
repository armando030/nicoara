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


function popUpOpen(Sections) {
    document.getElementById(Sections).style.display = 'block';
    document.body.style.overflow = "hidden"; //Prevenir scroll de fondo
}

function popUpClose(Sections) {
    document.getElementById(Sections).style.display = 'none';
    document.body.style.overflow = ''; // Restaurar scroll
}

// Cerrar al hacer clic fuera del modal

// Cerrar tosSection usando la tecla esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        popUpClose('tosSection');
    }
})