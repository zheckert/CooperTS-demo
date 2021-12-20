import { HelloWorldResource } from "../../Types";

interface Waiting {
  kind: "waiting";
}

interface Loading {
  kind: "loading";
  message: string;
}

interface Ready {
  kind: "ready";
  helloWorldResource: HelloWorldResource;
}

interface Error {
  kind: "error";
  message: string;
}

export const error = (message: string): Error => ({ kind: "error", message });

export const ready = (helloWorldResource: HelloWorldResource): Ready => ({
  kind: "ready",
  helloWorldResource,
});

export const waiting = (): Waiting => ({ kind: "waiting" });

export const loading = (message: string): Loading => ({
  kind: "loading",
  message,
});

export type State = Waiting | Loading | Ready | Error;
