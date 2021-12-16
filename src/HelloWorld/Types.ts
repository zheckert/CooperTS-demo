import { Resource } from "../../CooperTS/packages/resource/src/resource";
export interface HelloWorld {
  message: string;
}

export type HelloWorldResource = Resource<HelloWorld, string>;
