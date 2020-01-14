var controle = /^[0-9]+$/;
function _TableMultiplication()
{
    var res = 0;
    var i = 0;
    var tab = [];
    var X = prompt("Entrez le nombre correspondant à la table de multiplication souhaité");
    if(!controle.test(X))
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_TableMultiplication());
    }
    while(i <= 10)
    {
        res = i * X;
        tab [i] = (i + " x " + X + " = " + res + "\n");
        i++;
    }  
    if(tab != 0)
    {
     tab = tab.join("");
    alert(tab); 
    }
    if(confirm("Voulez vous recommencer ?") == true)
    {
    window.location.reload(_TableMultiplication());
    }
}
_TableMultiplication();
