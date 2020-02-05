var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// Je transforme toutes les valeurs du tableau en majuscule
for (let i = 0; i < tab.length; i++) {
    tab[i] = tab[i].toUpperCase();
};
// Déclaration d'un tableau 
var prenom = prompt("Veuillez écrire un prénom");
// Je transforme le prénom saisie en majuscule pour éviter la casse
prenomMaj = prenom.toUpperCase();
// Demande de prénom grace à la fonction prompt, il sera stocké dans la variable prenom
var check = tab.includes(prenomMaj);
// La variable check va comparer les prénoms du tableau avec celui rentré en paramettre
// et renvoyer true si il y est et false sinon
if (check)
// Abréviation pour dire "si check vaut true"
{
    tab.splice(tab.indexOf(prenomMaj), 1);
    // La fonction splice va supprimer lélément et l'index qui ce trouve a l'index du tableau qu'on lui donne
    // Il est déterminé ici grace à la fonction indexOF à laquelle on demande l'index de la variable prenom
    tab.push("")
    // La fonction push permet de remplacer la valeur du dernier index d'un tableau . Ici on lui donnne du vide en valeur
}
alert(tab);