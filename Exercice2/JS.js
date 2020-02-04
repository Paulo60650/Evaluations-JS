var controle = /^[0-9]+$/;
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
function _calcul()
// Déclaration d'une fonction
{
    // Déclaration d'une variable utilisé dans la fonction qui sera rentré en paramettre 
    // grace a la fonction prompt
    var nb = parseInt(prompt("Veuillez entrer un nombre"));
    if (!controle.test(nb))
    // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
    // du regex on entre dans la condition 
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    }
    var i = 0;
    var res = 0;
    // Déclaration des variables utilisé dans la fonction
    while (++i < nb)
    // Lancement d'une boucle tant que le compteur i est plus petit que nb qui est 
    {
        res = res + i;
    }
    alert("La somme des entiers inférieurs à " + nb + " est " + res);
    if (confirm("Voulez vous recommencer ?") == true) {
        window.location.reload();
        // La page est rechargé 

    }
    else {
        window.close();
        // Fonction fermant la page
    }
}
_calcul();
// Execution de la fonction