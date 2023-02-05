/* eslint-disable consistent-return */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try {
      const user = this.createUserUseCase.execute({ email, name });

      request.headers.id = user.id;

      return response.status(201).json(user);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
