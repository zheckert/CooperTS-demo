import { action, computed, observable } from "mobx";
import { HelloWorldResource } from "../Types";
import { error, loading, ready, State, waiting } from "./Types";
import {
  just,
  Maybe,
  nothing,
} from "../../../festive-possum/packages/maybeasy/src";

class ShowHelloWorldStore {
  @observable
  state: State = waiting();

  @action
  load = (message: string) => {
    this.state = loading(message);
  };

  @action
  ready = (helloWorldResource: HelloWorldResource) => {
    this.state = ready(helloWorldResource);
  };

  @action
  error = (message: string) => {
    this.state = error(message);
  };

  @computed
  get errorMessage(): Maybe<string> {
    switch (this.state.kind) {
      case "error":
        return just(this.state.message);
      case "ready":
      case "loading":
      case "waiting":
        return nothing();
    }
  }
}

export default ShowHelloWorldStore;
