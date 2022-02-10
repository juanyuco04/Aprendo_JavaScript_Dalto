let cantidad = prompt("¿Cuantos alumnos tienes?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[1] = [prompt("Nombre del alumno"+(i+1)),0];
}
const tomarAsistencia = (nombre,p)=>{
    let  presencia = prompt("Nombre");
    if (presencia == "p"|| presencia == "P"){
        alumnosTotales[i][1]++;
    }
}

for (i = 0; i <30; i++) {
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado =  $(alumnosTotales[alumno][0]); <br>
    ________Presentes: ${alumnosTotales[alumno][1]} <br>
    ________Ausencias: ${30 - alumnosTotales[alumno][1]}
    ;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado++ "reprobado por inasistencia"
    }
}