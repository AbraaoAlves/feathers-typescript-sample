import { Request, Response, NextFunction } from 'express';
import { Application } from 'feathers';

export default (app: Application) =>

  function (req: Request, res: Response, next: NextFunction) {

    const body = req.body;

    // Get the user service and `create` a new user
    app.service('users').create({
      email: body.email,
      password: body.password
    })
    // Then redirect to the login page

    .then(user => delete user.password, res.status(201).send(user))

    // On errors, just call our error middleware
    .catch(next);
  };

