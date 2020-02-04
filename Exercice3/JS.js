var controle = /^[0-9]+$/;
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
function _calcul()
// Déclaration d'une fonction
{
    var nb = parseInt(prompt("Veuillez entrer un nombre"));
    // Déclaration d'une variable utilisé dans la fonction qui sera rentré en paramettre 
    // grace a la fonction prompt
    if (!controle.test(nb))
    // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
    // du regex on entre dans la condition 
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    }
    var max = nb;
    var min = nb;
    // Déclaration des variables utilisé dans la fonction
    while (nb != 0) {
        if (nb > max) {
            max = nb;
        }
        else if (nb < min) {
            min = nb;
        }
        nb = parseInt(prompt("Veuillez entrer un nombre"));
        if (!controle.test(nb))
        // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
        // du regex on entre dans la condition
        {
            alert("Il faut entrer un nombre \n Recommencez !");
            window.location.reload(_calcul());
            // La page est rechargé et la fonction réexcuté
        }
    }
    alert("Le nombre le plus grand de la liste est " + max + " et le plus petit est " + min);
    if (confirm("Voulez vous recommencer ?") == true) {
        window.location.reload();
    }
    else {
        window.close();
        // Fonction fermant la page
    }
}
_calcul();
// Execution de la fonction