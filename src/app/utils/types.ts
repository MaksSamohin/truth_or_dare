interface GameCardScreenParams {
  type?: "truth" | "dare";
  fromScreen?: "StartGame";
}

export type RootStackParamList = {
  Menu: undefined;
  GameModes: { fromScreen?: "StartGame" | "GameCard" | "Menu" };
  StartGame: { fromScreen?: "GameModes" | "GameCard" };
  GameCard: GameCardScreenParams;
};

export interface UserInterface {
  username: string;
  id: string;
}
