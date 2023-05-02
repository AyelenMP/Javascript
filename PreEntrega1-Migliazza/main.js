function calcular(operacion) {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado;
  
    if (operacion == '+') {
      resultado = numero1 + numero2;
    } else if (operacion == '-') {
      resultado = numero1 - numero2;
    } else if (operacion == '*') {
      var veces = parseInt(document.getElementById("veces").value);
      resultado = 1;
      for (var i = 0; i < veces; i++) {
        resultado = resultado * numero1 * numero2;
      }
    } else if (operacion == '/') {
      if (numero2 == 0) {
        resultado = "Error: no se puede dividir por cero";
      } else {
        resultado = numero1 / numero2;
      }
    } else {
      resultado = "Error: operación no válida";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }