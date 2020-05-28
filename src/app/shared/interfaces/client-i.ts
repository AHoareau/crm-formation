import { StateClient } from '../enums/state-client.enum';


export interface ClientI {
  state: StateClient;
  id: number;
  name: string;
  ca: number;
  comment: string;
  totalTtc(): number;
}
