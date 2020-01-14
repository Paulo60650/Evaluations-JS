var age = 0;
var j = 0;
var m = 0;
var v = 0;

while(age < 100)
{
    age = parseInt(prompt("Quelle est l'age de la personne ?"));
    if(age < 20)
    {
    j++;
    }
    else if(age >= 20 && age <= 40)
    {
    m++;
    }
    else
    {
    v++;
    }
}
v++;
alert("Il y a " + j + " jeunes \n Il y a " + m + " moyens \n Il y a " + v + " vieux");
if(confirm("Voulez vous recommencer ?") == true)
{
    window.location.reload();
}