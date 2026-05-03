export interface UserInterface {
  email: string;
  name: string;
  id: string;
  cep: string;
}

export type UserContexType = {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};
