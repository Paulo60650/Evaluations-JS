var controle = /^[0-9]+$/;
function _calcul()
{
    var PU = parseInt(prompt("Entrez le prix du produit"));
    if(!controle.test(PU))
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    }
        var QUANT = parseInt(prompt("Entrez la quantité de produit désiré"));
    if(!controle.test(QUANT))
    {
        alert("Il faut entrer un nombre \n Recommencez !");
        window.location.reload(_calcul());
    
    }
    var TOT = PU * QUANT;
    var PORT = 0;
    var REM = 0;
    if(TOT < 500)
    {
        PORT = (TOT * 2) / 100; 
        if(PORT < 6)
        {
            PORT = 6;
        }
    }
    if(TOT > 100 && TOT < 200)
    {
        REM = (TOT * 5) / 100;
    }
    else if(TOT >= 200)
    {
        REM = (TOT * 10) / 100;
    }
    TOT = TOT + PORT - REM;
    alert("Vous disposez d'une remise de " + REM + " euros \n Vous avez " + PORT + " euros de frais de port.\n Vous devez un total de " + TOT + " euros")
    if(confirm("Voulez vous recommencer ?"))
    {
        window.location.reload();
    }
    else 
    {
        window.close();
    }   
}
_calcul();