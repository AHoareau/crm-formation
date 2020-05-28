import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI{
  state: StateClient;
  id: number;
  name: string;
  ca: number;
  comment: string;
  constructor(obj?: Partial<Client>) {
    if(obj) {
      Object.assign(this, obj);
    }
  }

  totalTtc(): number {
    return this.ca * (1 + (20 / 100));
  }
}
