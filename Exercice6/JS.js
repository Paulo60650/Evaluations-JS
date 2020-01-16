var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// Déclaration d'un tableau 
var prenom = prompt("Veuillez écrire un prénom");
// Demande de prénom grace à la fonction prompt, il sera stocké dans la variable prenom
var check = tab.includes(prenom);
// La variable check va comparer les prénoms du tableau avec celui rentré en paramettre
// et renvoyer true si il y est et false sinon
if(check)
// Abréviation pour dire "si check vaut true"
{
    tab.splice(tab.indexOf(prenom), 1);
// La fonction splice va supprimer lélément et l'index qui ce trouve a l'index du tableau qu'on lui donne
// Il est déterminé ici grace à la fonction indexOF à laquelle on demande l'index de la variable prenom
    tab.push("")
// La fonction push permet de remplacer la valeur du dernier index d'un tableau . Ici on lui donnne du vide en valeur
}
alert(tab);