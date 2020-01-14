var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var prenom = prompt("Veuillez écrire un prénom");
var check = tab.includes(prenom);
if(check)
{
    tab.splice(tab.indexOf(prenom), 1);
    tab.push("")
}
alert(tab);