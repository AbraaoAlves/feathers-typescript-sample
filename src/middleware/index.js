const signup = require('./signup');
import * as handler  from 'feathers-errors/handler';
import notFound  from './not-found-handler';
import logger  from './logger';
import signup from './signup';

export function middleware() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.post('/signup', signup(app));
  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
}
