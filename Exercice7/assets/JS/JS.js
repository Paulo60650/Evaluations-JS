var alpha = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-]+$)/;
var nom = document.getElementById ("nom").valeur;
if (! alpha.test(nom))
{
    document.getElementById ("errname").textContent = "Utilisez uniquement des caractères alphabétiques." ;
    return false;
}