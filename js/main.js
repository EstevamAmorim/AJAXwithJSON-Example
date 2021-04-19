<!--Asynchronous-->
<!--JavaScript-->     
<!--And-->	
<!--XML-->

var plotCounter = 1;

function loadData() {
    if (plotCounter == 5) {
        finalize();
        return;
    }

    var ourRequest = new XMLHttpRequest();
    var url = 'https://raw.githubusercontent.com/EstevamAmorim/AJAXwithJSON-Example/main/act' + plotCounter + '.json';

    ourRequest.open('GET', url);
    ourRequest.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            after(data);
        } else {
            console.log("Foi conectado ao servidor mas retornou um erro!");
        }
    };

    ourRequest.onerror = function () {
        console.log("Erro de Conexão.");
    }
    ourRequest.send();
};

function after(elements) {

    var gif = document.getElementById('mainGif');

    if (plotCounter == 1)
        gif.style.visibility = "visible";

    gif.height = 300;
    gif.width = 450;

    gif.src = elements.gif;
    document.getElementById('title')
        .innerHTML = elements.title;
    document.getElementById('text')
        .innerHTML = elements.text;
    document.getElementById('skip')
        .textContent = elements.buttonText;

    plotCounter++;
}

function finalize() {
    var gif = document.getElementById('mainGif');

    gif.src = " ";
    gif.style.visibility = "none";
    gif.height = 0;
    gif.width = 0;

    document.getElementById('title')
        .innerHTML = " ";
    document.getElementById('text')
        .innerHTML = " ";
    document.getElementById('skip')
        .textContent = "Iniciar História";

    plotCounter = 1;
}
