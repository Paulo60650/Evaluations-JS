var controle = /^[0-9]+$/;
function _calcul()
{
var nb = parseInt(prompt("Veuillez entrer un nombre"));
if(!controle.test(nb))
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    }
var max = nb;
var min = nb;
while(nb != 0)
{
    if(nb > max)
    {
    max = nb;
    } 
    else if(nb < min)
    {
        min = nb;
    }
   nb = parseInt(prompt("Veuillez entrer un nombre"));
   if(!controle.test(nb))
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    }
}
alert("Le nombre le plus grand de la liste est " + max + " et le plus petit est " + min);
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