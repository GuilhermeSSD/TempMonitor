export type CreateUserDTO = {
  username: string;
  email: string;
  password: string;
};

export type LoginUserDTO = {
  email: string;
  password: string
}