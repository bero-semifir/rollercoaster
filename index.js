// Ancienne façon de faire des fonctions
function remplirManege(remplissage, file, nbPlaces){
    console.log("Je remplis le manège");
        // s'occuper du remplissage (en prennant en compte le max de places)
    // -> vérif a faire
    // tant qu'il y a de la place...
    while (remplissage + file[0] <= nbPlaces) {
        // ...faire rentrer des groupes
        let grp = file.shift();
        /*
        file = [2,3,5,4]
        shift() extrait la première valeur du tableau
            grp = 2
            file = [3,5,4]
        */
        remplissage += grp;
        // je remet le groupe qui vient de monter à la fin du tableau
        /*
            grp = 2
            file = [3,5,4,2]
        */
        file.push(grp);
    }
    console.log("J'ai fini de remplir le manége");
    return remplissage;
}

function lancerManege(nbTours, nbPlaces, file, prixTours){
    let profitTour = 0;
        // Faire des tours de manège
        for (let i = 0; i < nbTours; i++) {
            // nombre de personné qui sont monté pour le prochain tour
            let remplissage = 0;
            // template litteral
            console.log(`Tour numéro: ${i + 1}`);
            // appel de la fonction remplirManège avec le remplissage en argument
            remplissage = remplirManege(remplissage, file, nbPlaces);
            console.log(`Personnes dans le manège: ${remplissage}, le profit de ce tour est de ${remplissage * prixTours}`);
            profitTour += remplissage * prixTours;
        }
        return profitTour;
}

function verifParc(nomParc){
    return nomParc == "Disney";
}

function main(){

    const nomParc = "Disney"
    // Nombre de place dans le manège
    const PLACES = 5;
    // Nombre de tours
    const TOURS = 3;
    // file d'attente avec nos groupes (le nombre présent dans le tableau représente la taille d'un groupe)
    const file = [2, 3, 5, 4];
    // variable pour garder le profit en mémoire
    let profit = 0;
    // pas forcément necessaire mais bonne pratique, je n'aurai qu'a changer la valuer ici pour la répercuté sur tout le programme.
    const PRIX = 1;
    if(verifParc(nomParc)){

        profit += lancerManege(TOURS, PLACES, file, PRIX);
        
        // dans l'hypothése d'un deuxième manège:
        profit += lancerManege(3, 10, [4,5,2,1,3], 1.5);
        
        console.log(`Profit -> ${profit}`);
    }
}

main();