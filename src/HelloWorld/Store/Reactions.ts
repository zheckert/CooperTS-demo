import ShowHelloWorldStore from ".";
import { RCProps } from "../../../ReactionComponent";

interface Props extends RCProps<ShowHelloWorldStore> {
  store: ShowHelloWorldStore;
}
