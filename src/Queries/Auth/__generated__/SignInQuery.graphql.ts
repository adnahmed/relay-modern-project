/**
 * @generated SignedSource<<2c860f333287eab4df3fcb65ae7f9280>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type SignInQuery$variables = {
  email?: string | null;
  mobilePhone?: number | null;
  password: string;
};
export type SignInQuery$data = {
  readonly login: string;
};
export type SignInQuery = {
  response: SignInQuery$data;
  variables: SignInQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "mobilePhone"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "mobilePhone",
        "variableName": "mobilePhone"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "kind": "ScalarField",
    "name": "login",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignInQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignInQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "70926b8810c7a433b32459680d7942c0",
    "id": null,
    "metadata": {},
    "name": "SignInQuery",
    "operationKind": "query",
    "text": "query SignInQuery(\n  $email: String\n  $mobilePhone: Int\n  $password: String!\n) {\n  login(email: $email, mobilePhone: $mobilePhone, password: $password)\n}\n"
  }
};
})();

(node as any).hash = "fe833518442dbdf140fda222026952a8";

export default node;
