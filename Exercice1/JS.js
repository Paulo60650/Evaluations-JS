var controle = /^[0-9]+$/;
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
function _calcul()
// Déclaration d'une fonction
{
    var PU = prompt("Entrez le prix du produit");
    if(PU == null)
    {
        window.close();
    }
    else
    {
        PU = parseInt(PU);
        // Déclaration d'une variable utilisé dans la fonction qui sera rentré en paramettre 
        // grace a la fonction prompt
        if (!controle.test(PU))
        // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
        // du regex on entre dans la condition 
        {
            alert("Il faut entrer un nombre \n Recommencez !");
            window.location.reload(_calcul());
            // La page est rechargé et la fonction réexcuté
        }
        var QUANT = parseInt(prompt("Entrez la quantité de produit désiré"));
        // Déclaration d'une variable utilisé dans la fonction qui sera rentré en paramettre 
        // grace a la fonction prompt
        if (!controle.test(QUANT))
        // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
        // du regex on entre dans la condition 
        {
            alert("Il faut entrer un nombre \n Recommencez !");
            window.location.reload(_calcul());
            // La page est rechargé et la fonction réexcuté

        }
        // Déclaration des variables utilisé dans la fonction
        var TOT = PU * QUANT;
        var PORT = 0;
        var REM = 0;
        if (TOT >= 100 && TOT <= 200) {
            REM = TOT * 0.05;
        }
        else if (TOT > 200) {
            REM = TOT * 0.1;
        }
        TOT = TOT - REM;
        if (TOT <= 500) {
            PORT = TOT * 0.02;
            if (PORT < 6) {
                PORT = 6;
            }
        }
        TOT = TOT + PORT;
        alert("Vous disposez d'une remise de " + REM + " euros \n Vous avez " + PORT + " euros de frais de port.\n Vous devez un total de " + TOT + " euros")
        if (confirm("Voulez vous recommencer ?")) {
            window.location.reload();
            // La page est rechargé
        }
        else {
            window.close();
            // Fonction fermant la page
        }
    }
    
}
_calcul();
// Execution de la fonction