function batatafrita(imagem){
    imagem.src="batatafrita.jpg";
};

function batatacrua(imagem){
    imagem.src="batatacrua.png";
}

function HabilitarCampo(opcao){
        if(opcao){
            document.formulario.nome.disabled = false;
        }
        else{
            document.formulario.nome.value = "";
            document.formulario.nome.disabled = true;
        }
}

function CalculaIMC(){
    peso = parseFloat(document.formularioimc.peso.value);
    altura = parseFloat(document.formularioimc.altura.value);
    resultado = peso/(altura*altura);
    resultado = resultado.toFixed(2);
    alert("Seu IMC é: " + resultado);
}