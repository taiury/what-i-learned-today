var segundoGrau = document.getElementById("segundoGrau");
var View = document.getElementById("list");

var aElement = null;
var bElement = null;
var cElement = null;
var resultElement;

segundoGrau.onclick = function op_segundoGrau() {
  if (document.querySelectorAll("#divSegundoGrau").length <= 0) {
    elementSegundoGrau();
    aElement = null;
    bElement = null;
    cElement = null;
  } else {
    op_segundoGrauRemove();
  }
};

function elementSegundoGrau() {
  var divSegundoGrau = document.createElement("div");
  divSegundoGrau.setAttribute("id", "divSegundoGrau");
  document.body.appendChild(divSegundoGrau);

  var inputSegundoGrau = document.createElement("input");
  inputSegundoGrau.setAttribute("id", "inputSegundoGrau");
  inputSegundoGrau.setAttribute("type", "number");
  var containerInput = document.createElement("div");
  containerInput.appendChild(inputSegundoGrau);
  containerInput.setAttribute("id", "containerInput");
  divSegundoGrau.appendChild(containerInput);

  var buttonSegundoGrau = document.createElement("button");
  buttonSegundoGrau.setAttribute("id", "buttonSegundoGrau");
  buttonSegundoGrau.addEventListener("click", processoSegundoGrau);

  var textButton = document.createTextNode("enviar");
  buttonSegundoGrau.appendChild(textButton);

  var containerButton = document.createElement("div");
  containerButton.appendChild(buttonSegundoGrau);
  containerButton.setAttribute("id", "containerButton");
  divSegundoGrau.appendChild(containerButton);
}

function inputDinamico() {
  inputSegundoGrau.value = "";
  inputSegundoGrau.focus();
}

function processoSegundoGrau() {
  if (aElement === null) {
    if (inputSegundoGrau.value != 0) {
      aElement = Number(inputSegundoGrau.value);

      var txtA = document.createElement("p");
      txtA.setAttribute("id", "a");
      var textTxtA = document.createTextNode(`elemento a = ${aElement}`);
      txtA.appendChild(textTxtA);
      var containerA = document.createElement("div");
      containerA.appendChild(txtA);
      containerA.setAttribute("id", "containerA");
      divSegundoGrau.appendChild(containerA);
      inputDinamico();
    } else {
      alert("elemento a tem que ser diferente de 0");
    }
  } else if (aElement !== null && bElement === null) {
    bElement = Number(inputSegundoGrau.value);
    var txtB = document.createElement("p");
    txtB.setAttribute("id", "b");
    var textTxtB = document.createTextNode(`elemento b = ${bElement}`);

    txtB.appendChild(textTxtB);
    var containerB = document.createElement("div");
    containerB.appendChild(txtB);
    containerB.setAttribute("id", "containerB");
    divSegundoGrau.appendChild(containerB);
    inputDinamico();
  } else if (aElement !== null && bElement !== null && cElement === null) {
    cElement = Number(inputSegundoGrau.value);
    var txtC = document.createElement("p");
    txtC.setAttribute("id", "c");
    var textTxtC = document.createTextNode(`elemento c = ${cElement}`);

    txtC.appendChild(textTxtC);
    var containerC = document.createElement("div");
    containerC.appendChild(txtC);
    containerC.setAttribute("id", "containerC");
    divSegundoGrau.appendChild(containerC);

    if (aElement !== null && bElement !== null && cElement !== null) {
      var deltaB = Math.pow(bElement, 2);
      var delta = deltaB - 4 * aElement * cElement;
      if (delta >= 0) {
        var raizDelta = Math.sqrt(delta);

        if (delta == 0) {
          var x = -bElement / (2 * aElement);
          var txtResult = document.createElement("p");
          txtResult.setAttribute("id", "result");
          var textResult = document.createTextNode(`x = ${x}`);
          txtResult.appendChild(textResult);
          var containerResult = document.createElement("div");
          containerResult.appendChild(txtResult);
          containerResult.setAttribute("id", "containerResult");
          divSegundoGrau.appendChild(containerResult);
        } else {
          var x1 = (-bElement + raizDelta) / (2 * aElement);
          var x2 = (-bElement - raizDelta) / (2 * aElement);
          var txtResult = document.createElement("p");
          txtResult.setAttribute("id", "result");
          var textResult = document.createTextNode(`x1 = ${x1} & x2 = ${x2}`);
          txtResult.appendChild(textResult);
          var containerResult = document.createElement("div");
          containerResult.appendChild(txtResult);
          containerResult.setAttribute("id", "containerResult");
          divSegundoGrau.appendChild(containerResult);
        }
      } else {
        var txtResult = document.createElement("p");
        txtResult.setAttribute("id", "result");

        var textResult = document.createTextNode(`conjunto vazio`);
        txtResult.appendChild(textResult);

        var containerResult = document.createElement("div");
        containerResult.appendChild(txtResult);
        containerResult.setAttribute("id", "containerResult");

        divSegundoGrau.appendChild(containerResult);
      }
      if (
        aElement >= 0 ||
        (aElement <= 0 && bElement >= 0) ||
        (bElement <= 0 && cElement >= 0) ||
        cElement <= 0
      ) {
        var buttonReset = document.createElement("button");
        buttonReset.setAttribute("id", "reset");
        var textButtonReset = document.createTextNode("Reset");
        buttonReset.appendChild(textButtonReset);
        var containerReset = document.createElement("div");
        containerReset.appendChild(buttonReset);
        containerReset.setAttribute("id", "containerReset");
        divSegundoGrau.appendChild(containerReset);
        buttonReset.addEventListener("click", reset);
      }
    }
    inputDinamico();
  }
}

function op_segundoGrauRemove() {
  document.getElementById("divSegundoGrau").remove();
}

function reset() {
  aElement = null;
  bElement = null;
  cElement = null;
  inputDinamico();
  document.getElementById("containerReset").remove();
  document.getElementById("a").remove();
  document.getElementById("b").remove();
  document.getElementById("c").remove();
  document.getElementById("result").remove();
  document.getElementById("containerA").remove();
  document.getElementById("containerB").remove();
  document.getElementById("containerC").remove();
  document.getElementById("containerResult").remove();
}
