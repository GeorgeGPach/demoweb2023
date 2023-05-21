var a = new Date();
dia=a.getDay();
switch (dia) {
  case 5:  alert("Viernes social");  break;
  case 6:  alert("Sábado deportivo"); break;
  case 0:  alert("Domingo familiar");   break;
  default:  alert("Día de Semana");
}
