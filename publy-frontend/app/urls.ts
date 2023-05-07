const backendHost = "http://localhost:8080";
const userserviceHost = "http://localhost:8081";

export const userServiceUrl = `${userserviceHost}`;
export const graphqlApiUrl = `${backendHost}/graphql`;

export const graphqlWsApiUrl = `${backendHost}/graphql`
  .replaceAll("https", "wss")
  .replace("http", "ws");

export const graphiqlUrl = `${backendHost}/`;

console.log("USING GRAPHQL URL", graphqlApiUrl);
console.log("USING GRAPHQL WS URL", graphqlWsApiUrl);
console.log("USERSERVICE URL", userServiceUrl);
