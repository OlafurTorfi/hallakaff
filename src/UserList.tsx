import { observer } from "mobx-react";
import * as React from "react";
import { IStore, IUser } from "./Store";
import { UserView } from "./UserView";

@observer
export class UserList extends React.Component<IStore> {
  public render() {
    const store = this.props.store;
    return (
      <div>
        {store.report}
        <ul>{store.users.map((user: IUser) => <UserView user={user} />)}</ul>
        <button onClick={this.logOut}>LogOut</button>
      </div>
    );
  }

  private logOut = () => {
    this.props.store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  };
}
