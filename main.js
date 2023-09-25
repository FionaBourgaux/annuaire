import * as bootstrap from 'bootstrap';
import './style.scss';
import { data } from './data';
import { nav } from './nav';
const listePersonnes = (personnes) => {
  let html = '';
  for (let i = 0; i < personnes.length; i++) {
    const personne = personnes[i];
    let personneCard = `
      <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
        <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
        </div>
      </a>
    `;
    html += personneCard;
  }
  return html;
};
let personnes = data.sort();
document.querySelector('#app').innerHTML = `
  <main>
    ${nav}
    <div class="container-fluid my-4">
      <input type="text" id="search" class="d-flex  mx-auto mb-3" />
      <div id="liste" class="d-flex gap-3 flex-wrap justify-content-center">
        ${listePersonnes(personnes)}
      </div>
    </div>
  </main>
`;
const inputSearch = document.querySelector('#search');
inputSearch.addEventListener('input', function (event) {
  const recherche = event.target.value;
  console.log(recherche);
  personnes = data
    .sort()
    .filter(function (personne) {
      return personne.nom.toLowerCase().includes(recherche) || personne.prenom.toLowerCase().includes(recherche)
    }
  );
  document.querySelector('#liste').innerHTML = `
        ${listePersonnes(personnes)}
`;
});