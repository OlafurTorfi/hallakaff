import { observer } from "mobx-react";
import * as React from "react";

@observer
export class UserView extends React.Component {
  public render() {
    const name = this.props.name;
    return <li>{name}</li>;
  }
}
