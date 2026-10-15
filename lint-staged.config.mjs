export default {
  '*.{js,jsx,ts,tsx,mjs,cjs,astro}': ['eslint --fix'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': ['prettier --write'],
};
