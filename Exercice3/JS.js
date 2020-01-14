var nb = parseInt(prompt("Veuillez entrer un nombre"));
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
}
alert("Le nombre le plus grand de la liste est " + max +" et le plus petit est " + min);
if(confirm("Voulez vous recommencer ?") == true)
{
    window.location.reload();
}