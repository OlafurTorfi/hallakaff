import { CreateLogging, ILog } from "@tm.is/logging";
import { autorun, computed, observable } from "mobx";

export interface IItem {
  name: string;
  price: number;
}
export interface IUser {
  name: string;
  history: IItem[];
}
export interface IStore {
  users: IUser[];
  user?: IUser;
  // currentAccountState: () => void;
  transaction: (user: string, item: IItem) => void;
  setUser: (user: string) => void;
  logOut: () => void;
}

export class ObservableStore implements IStore {
  @observable public users: IUser[] = [];
  @observable public user: IUser | undefined;
  private log: ILog;
  constructor() {
    this.log = CreateLogging("Hallakaffi").logger();
    autorun(() => {
      this.log.info("state has changed :)");
    });
  }
  // @computed
  // get currentAccountState() {
  //   return this.users.map(u => {
  //     const state = {
  //       name: u.name,
  //       state: u.history.reduce((prev, curr) => prev + curr.price, 0)
  //     };
  //     return state;
  //   });
  // }

  public transaction(user: string, item: IItem) {
    const existing = this.users.find(u => u.name === user);
    if (existing) {
      existing.history.push(item);
    } else {
      this.users.push({ name: user, history: [item] });
    }
  }
  public setUser(user: string) {
    const existing = this.users.find(u => u.name === user);
    if (existing) {
      this.user = existing;
    } else {
      this.log.error("no user found by this name");
    }
  }

  public logOut() {
    this.user = undefined;
  }
}
