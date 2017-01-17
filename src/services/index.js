import authentication from './authentication';
import user  from './user/index';
import * as mongoose from 'mongoose';

export function services() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = Promise;

  app.configure(authentication);
  app.configure(user);
};
