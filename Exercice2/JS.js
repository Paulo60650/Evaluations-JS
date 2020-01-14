var controle = /^[0-9]+$/;
function _calcul()
{
var nb = parseInt(prompt("Veuillez entrer un nombre"));
if(!controle.test(nb))
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    }
var i = 0;
var res = 0;
while(++i < nb)
{
    res = res + i; 
}
alert("La somme des entiers inférieurs à " + nb + " est " + res);
if(confirm("Voulez vous recommencer ?") == true)
{
    window.location.reload();
    
}
else 
{
    window.close();
} 
}
_calcul();