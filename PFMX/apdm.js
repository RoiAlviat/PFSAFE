const hex1para = document.createElement('p');
hex1para.classList.add('hex1para');
hex1para.innerHTML = "Après mon BAC ES j’ai décidé de m’orienter dans le commerce. J’ai obtenu mon DUT techniques de commercialisation dans lequel j’ai pu développer de nombreuses compétences en communication, marketing, économie ou en négociation par exemple. Cette formation était assez générale donc j’ai pu apprendre beaucoup de choses, j’ai même pu voir un peu de psychologie. Dès la fin du BAC, je savais que je voulais bosser dans le milieu du jeu-vidéo. Même durant mes projets de groupe en commerce, j’essayais de ramener cela au jeu. Mais mon rêve principal était de pouvoir participer à la création du jeu. J’ai donc découvert l’école Brassart et le bachelor en Game Design. Après mes recherches, j’ai réalisé que le métier dont j’avais toujours rêvé existait. Je me suis donc lancée et je recherche désormais un stage/un premier emploi !";

const hex2para = document.createElement('p');
hex2para.classList.add('hex2para');
hex2para.innerHTML = "Depuis mes 18 ans et tous les étés, je travaille dans la préparation de commande dans le but de financer mes études.J’ai également réalisé deux stages lors de mon DUT : en optique pendant un mois et en immobilier pendant deux mois.";

const hex3para = document.createElement('p');
hex3para.classList.add('hex3para');
hex3para.innerHTML = "Je joue depuis que je suis toute petite, j’ai deux grands frères et un père qui jouent énormément donc j’ai rapidement été plongée dedans. <br> C’est donc devenu ma passion. J’ai débuté avec les Assassin’s Creed, Rainbow Six Siege, les Resident Evil (et oui, même enfant!) et les classiques comme The Legend of Zelda, les Mario, Pokémon, … <br> En plus de cela, mes principaux hobbies sont La musique, Les voyages, Les séries et les films, La lecture, La danse, Les animaux (en particulier les chiens), La cuisine, Les Escape Game, En ce qui concerne ma personnalité, je suis une bonne vivante, sociable et très curieuse. Je suis bienveillante et j’aime particulièrement travailler en groupe. J’en ai toujours tiré de bonnes expériences et je trouve qu’il est important de travailler à plusieurs pour avancer correctement. Je peux parfois être têtue mais la formation et le travail en groupe m’a permis de travailler sur ce point.";

const hex4para = document.createElement('p');
hex4para.classList.add('hex4para');
hex4para.innerHTML = "Si je devais choisir 4 jeux solo : <br> The Witcher 3 : Wild Hunt<br>Horizon Zero Dawn<br>Assassin’s Creed Odyssey<br>The Legend of Zelda : The Wind Waker, Twilight Princess et Breath of the Wild (je triche un peu).<br>4 jeux multijoueurs : <br>It Takes Two. <br>Valorant.<br>Dead By Daylight.<br>League of Legends.";



document.querySelector('.hex1').addEventListener('click',  () => {
    
    document.querySelector('.introhex').style.display = "none"
   document.querySelector('.hex-texte').appendChild(hex1para)
   hex1para.style.display = "inline"
   document.querySelector('.h1apdm').innerHTML = "Parcours Scolaire"
   document.querySelector('.hex2para').style.display = "none"
   document.querySelector('.hex3para').style.display = "none"
   document.querySelector('.hex4para').style.display = "none"
   
})

document.querySelector('.hex2').addEventListener('click',  () => {
    document.querySelector('.introhex').style.display = "none"
    document.querySelector('.hex-texte').appendChild(hex2para)
    hex2para.style.display = "inline"
    document.querySelector('.h1apdm').innerHTML = "Parcours Pro"
    document.querySelector('.hex1para').style.display = "none"
    document.querySelector('.hex3para').style.display = "none"
    document.querySelector('.hex4para').style.display = "none"
 })

 document.querySelector('.hex3').addEventListener('click',  () => {
    document.querySelector('.introhex').style.display = "none"
    document.querySelector('.hex-texte').appendChild(hex3para)
    hex3para.style.display = "inline"
    document.querySelector('.h1apdm').innerHTML = "Un peu plus à propos de moi"
    document.querySelector('.hex1para').style.display = "none"
    document.querySelector('.hex2para').style.display = "none"
    document.querySelector('.hex4para').style.display = "none"
 })

 document.querySelector('.hex4').addEventListener('click',  () => {
    document.querySelector('.introhex').style.display = "none"
    document.querySelector('.hex-texte').appendChild(hex4para)
    hex4para.style.display = "inline"
    document.querySelector('.h1apdm').innerHTML = "Mes jeux préférés"
    document.querySelector('.hex1para').style.display = "none"
    document.querySelector('.hex2para').style.display = "none"
    document.querySelector('.hex3para').style.display = "none"
 })

// <h3 class="introhex">Bonjour à tous et bienvenue sur mon portfolio.</h3>
  //<p class="introhexbis">Je me présente rapidement : je m’appelle Margaux Nedelec, j’ai actuellement 22 ans et je suis en troisième et dernière année du bachelor Game Design à l’école Brassart d’Aix-en-Provence.
//Je suis à la recherche d’un stage dans le jeu vidéo de 2 à 6 mois ou d’un premier emploi à partir de début juillet pour valider ma dernière année d’études. Si vous êtes à la recherche d’une stagiaire/d’une employée ou que vous avez des pistes, n’hésitez pas à me contacter.
// Je vous laisse découvrir un peu de mon univers et je serais ravie d’entendre ou de lire vos retours. Bonne visite ! 
// </p> 