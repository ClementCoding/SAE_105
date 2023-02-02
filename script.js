document.addEventListener("DOMContentLoaded", function () {

    // CHARGEMENT JSON
    fetch('data.json').then(function (response) {
        response.json().then(function (data) {

            function ajouteanal(data) {
                data.forEach(function (f) {
                    // Creation des éléments analogie, valeur, images, classjustification,justification
                    var BlocPortrait = document.createElement("section");
                    BlocPortrait.innerHTML =
                       
                        '<h2 class="analogie">' +
                        'Si j’étais <span>' + f.analogie + '</span>, je serais <span>' + f.valeur + '</span></h2>' +
                        '<div class="' + f.classjustification + '">' +
                        '<p class="justification">' + f.justification + '</p>' +
                        '<img src="' + f.images + '" alt=""></img>' +
                        '</div>' +
                        '<div>';
                    document.querySelector("div.portrait-chinois").append(BlocPortrait);
                });


            }
            ajouteanal(data)
        })
    })



    //création d'une section quand on clique sur un button 
    document.querySelector('#send').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('#see').innerHTML += "<section class=\"section\"><h1>Si j’étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + ".<img src=" + document.querySelector("#imganalogie").value + " alt='' class='img'></h1><p class=\"justify\"> " + document.querySelector("#arganalogie").value + " </p></section>";
//- Ca envoi le formulaire mais ça ne place pas les photos --
        fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=clement.mbarga-minsi&courriel=clement.mbarga-minsi@u-pem.fr" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ",je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#arganalogie").value).then(function (response) {   
            response.json().then(function (data) {
                if (data.status == "success") {
                    document.querySelector("#message").innerHTML = "OK! Reçu !";
                } else {
                    document.querySelector("#message").innerHTML = "ERREUR: Pas reçu !";
                }
            })
        })
    });
});
