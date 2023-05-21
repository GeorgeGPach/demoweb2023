let dia = prompt("Ingrese el numero de día");
if(dia >= 0 && dia <7){
    alert("Es correcto");
    switch(dia){
        case 5:  alert("Viernes social");  break;
        case 6:  alert("Sábado deportivo"); break;
        case 0:  alert("Domingo familiar");   break;
        default:  alert("Día de Semana");     
    }
}else{
    alert("Ingrese un número válido");
}

