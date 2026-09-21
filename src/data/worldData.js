import gods from './gods.json';

const citiesModules = import.meta.glob('./cities/*.json', { eager: true, import: 'default' });
const factionsModules = import.meta.glob('./factions/*.json', { eager: true, import: 'default' });

export const cities = Object.values(citiesModules);
export const factions = Object.values(factionsModules);
export { gods };