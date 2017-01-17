import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as compress from 'compression';
import * as cors from 'cors';
import * as feathers from 'feathers';
import * as configuration from 'feathers-configuration';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest';
import * as bodyParser from 'body-parser';
import * as socketio from 'feathers-socketio';
import {middleware} from './middleware';
import {services} from './services';

const serveStatic = feathers.static;
const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

export {app};
