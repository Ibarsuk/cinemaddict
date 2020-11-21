import {createUserIcon} from './view/user-icon';
import {createSiteMenu} from './view/site-menu';
import {createSiteSort} from './view/site-sort';
import {createFilmsNumber} from './view/films-number';
import {createFilmCard} from './view/film-card';
import {createFilmsCatalog} from './view/films-catalog';
import {createShowMoreButton} from './view/show-more-button';
import {createTopRaitedContainer} from './view/top-raited-container';
import {createMostCommentedContainer} from './view/most-commented-container';
import {createMockFilm} from './mock/films';

console.log(createMockFilm());

const FILMS_CARDS_NUMBER = 5;
const FILMS_TOP_RAITED_CARDS_NUMBER = 2;
const FILMS_MOST_COMMENTED_CARDS_NUMBER = 2;

const render = (container, place, content) => {
  container.insertAdjacentHTML(place, content);
};

const siteHeader = document.querySelector(`.header`);
render(siteHeader, `beforeend`, createUserIcon());

const siteMain = document.querySelector(`.main`);
render(siteMain, `afterbegin`, createSiteMenu());
render(siteMain, `beforeend`, createSiteSort());
render(siteMain, `beforeend`, createFilmsCatalog());

const filmsListContainer = siteMain.querySelector(`.films-list__container`);
for (let i = 0; i < FILMS_CARDS_NUMBER; i++) {
  render(filmsListContainer, `beforeend`, createFilmCard());
}

const filmsCatalog = siteMain.querySelector(`.films-list`);
render(filmsCatalog, `beforeend`, createShowMoreButton());

const filmsContainer = siteMain.querySelector(`.films`);
render(filmsContainer, `beforeend`, createTopRaitedContainer());
render(filmsContainer, `beforeend`, createMostCommentedContainer());

const topRaitedFilmsContainer = filmsContainer.querySelector(`.films-list--extra .films-list__container`);
for (let i = 0; i < FILMS_TOP_RAITED_CARDS_NUMBER; i++) {
  render(topRaitedFilmsContainer, `beforeend`, createFilmCard());
}

const mostCommentedFilmsContainer = filmsContainer.querySelector(`.films-list--commented .films-list__container`);
for (let i = 0; i < FILMS_MOST_COMMENTED_CARDS_NUMBER; i++) {
  render(mostCommentedFilmsContainer, `beforeend`, createFilmCard());
}

const siteFooter = document.querySelector(`.footer`);
const footerStats = siteFooter.querySelector(`.footer__statistics`);
render(footerStats, `beforeend`, createFilmsNumber());
