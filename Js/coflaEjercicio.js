
dineroCofla = prompt("¿Cunto dinero tienes cofla?")
dineroRoberto = prompt("¿Cuanto dinero tienes roberto?")
dineroPedro = prompt("¿Cuanto dinero tienes Pedro?")

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla <= 1 ){
    alert("comprate el helado de agua, Cofla")
    alert("te sobran" + (dineroCofla - 0.6))
}

else if (dineroCofla >1 && dineroCofla <= 1.5){
    alert("comprate el helado de crema, Cofla")
    alert("te sobran" + (dineroCofla - 1))
}

else if (dineroCofla >1.5 && dineroCofla <= 1.8){
    alert("comprate el helado de heladix, Cofla")
    alert("te sobran" + (dineroCofla - 1.5))
}

else if (dineroCofla >1.8 && dineroCofla <= 2.5){
    alert("comprate el helado de heladovich, Cofla")
    alert("te sobran" + (dineroCofla - 1.8))
}

else if (dineroCofla >2.5 && dineroCofla <= 3){
    alert("comprate el helado de helardo, Cofla")
    alert("te sobran" + (dineroCofla - 2.5))
}

else 
  alert("No te alcanza podre de mierda")


  /* dinero roberto */

  if (dineroRoberto >= 0.6 && dineroRoberto <= 1 ){
    alert("comprate el helado de agua, Roberto")
}

else if (dineroRoberto >1 && dineroRoberto <= 1.8){
    alert("comprate el helado de crema, Roberto")
}

else if (dineroRoberto >1 && dineroRoberto <= 1.8){
    alert("comprate el helado de heladix, Roberto ")
}

else if (dineroRoberto >1.8 && dineroRoberto <= 2.5){
    alert("comprate el helado de heladovich, Roberto")
}

else if (dineroRoberto >2.5 && dineroRoberto <= 3){
    alert("comprate el helado de helardo, Roberto")
}

else 
  alert("No te alcanza podre de mierda")


/* dinero pedro  */

  if (dineroPedro >= 0.6 && dineroPedro <= 1 ){
    alert("comprate el helado de agua, Pedro")
}

else if (dineroPedro >1 && dineroPedro <= 1.8){
    alert("comprate el helado de crema, Pedro")
}

else if (dineroPedro >1 && dineroPedro <= 1.8){
    alert("comprate el helado de heladix, Pedro ")
}

else if (dineroPedro >1.8 && dineroPedro <= 2.5){
    alert("comprate el helado de heladovich, Pedro")
}

else if (dineroPedro >2.5 && dineroPedro <= 3){
    alert("comprate el helado de helardo, Pedro")
}

else 
  alert("No te alcanza podre de mierda")
