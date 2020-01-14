var nb = parseInt(prompt("Veuillez entrer un nombre"));
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