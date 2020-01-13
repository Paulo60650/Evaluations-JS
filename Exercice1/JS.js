function calcul()
{
    var PU = parseINt(document.getElementById('PU'));
    var pu = PU.value;
    var QUANT = parseInt(document.getElementById('QUANT'));
    var quant = QUANT.value;
    var res = 0;
    var i = 0;
    while(document.getElementById('test3') != true)
    {
        document.getElementById('PU').value = "";
        document.getElementById('QUANT').value = "";
        res = res + (pu * quant);
    }
}
var element_input = element_input.addEventListener("keypress", function control(event){
    if (event.which === 13)
        calcul()  
});
var element_button = document.getElementById('button');
element_button.addEventListener("click", function(){
    calcul();
});

