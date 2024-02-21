const isServer = (globalThisObject) =>
  typeof globalThisObject.window !== "undefined"
    ? "Hello from the client."
    : "Hello from the server.";

const isFrozen = (o) => Object.isFrozen(o);

const Id = (value) => ({
  value,
  map: (fn) => Id(fn(value)),
  inspect: () => `Id(${value})`,
});

const ContextContainer = () => Id(isServer());
const ArrayContainer = Id([1, 2, 3]);

export { isServer, isFrozen, Id, ArrayContainer, ContextContainer };
