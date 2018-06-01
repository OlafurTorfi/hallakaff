import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { ObservableStore } from "./Store";

const observableStore = new ObservableStore();

ReactDOM.render(<App store={observableStore} />, document.getElementById(
  "root"
) as HTMLElement);
registerServiceWorker();
