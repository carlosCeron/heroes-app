import { heroes } from "../../data/heroes";

export const getHeroeById = id => heroes.filter(heroe => heroe.id === id);