import * as React from "react";
import { IStore } from "./Store";
import { UserList } from "./UserList";

class App extends React.Component<IStore> {
  public render() {
    const store = this.props.store;
    if (store.user) {
      return <div>{store.user.nafn}</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Who are you?</h1>
          </header>
          <UserList store={store} />
        </div>
      );
    }
  }
}

export default App;
