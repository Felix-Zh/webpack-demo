import modA from './modules/mod-a';
import { foo } from './modules/mod-b';

if (module.hot) {
  module.hot.accept();
}

foo();

console.log(__BUILD_ENV__);
