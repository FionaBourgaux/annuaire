import * as bootstrap from 'bootstrap';
import '../style.scss';
import { data } from '../data';
import { nav } from '../nav';
import Fuse from 'fuse.js'

const detailsPersonne = () => {
  // récupération des paramètres GET de l'url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const personneId = urlParams.get('id') ?? 1;
  console.log(personneId);

  // on cherche la personne qui possède l'id trouvé dans l'url
  const personne = data.find((personne) => {
    return personne.id === Number.parseInt(personneId);
  });
  console.log(personne);

  return `
      <div class="card col col-sm-10 col-md-8 col-xl-6 mx-auto">
        <img src="${personne.avatar}" class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
          <a href="mailto:personnes.mail"> </a> <br/>
          <a href="tel:+33 6 12 34 56 78"> +33 6 12 34 56 78</a>
          <p class="card-text">
          ${personne.description}<br/>
          ${personne.id}
          </p>
        </div>
      </div>
    `;
};

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      ${detailsPersonne()}
    </div>
  </main>
`;
