interface GameCardScreenParams {
  type: "truth" | "dare";
}

export type RootStackParamList = {
  Menu: null;
  GameModes: null;
  StartGame: null;
  GameCardScreen: GameCardScreenParams;
};

export interface UserInterface {
  username: string;
  id: string;
}
