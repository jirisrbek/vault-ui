import {
  DefaultPage,SecretsList
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'default-page',
      name: 'Default page',
      component: DefaultPage,
      isIndex: true,
    },
    { path: 'secrets',
      name: 'secrets',
      component: SecretsList,
      isIndex: false,
    }
    
  ],
};
