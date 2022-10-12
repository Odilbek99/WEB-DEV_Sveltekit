import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Odilbek99/WEB-DEV_Sveltekit', // Update to point to your repository
  user: {
   name: 'Odilbek', // update to use your name
   email: 'umaralievodili@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);