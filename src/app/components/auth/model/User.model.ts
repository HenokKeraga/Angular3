export class User {
  constructor(
    private email: string,
    private localId: string,
    private token: string,
    private expiresIn
  ) {
  }

  get userToken(): string {
    return this.token;
  }
}
