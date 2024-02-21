import { isServer } from "../utils.js";

const Index = () => {
  //
  console.log(isServer(globalThis));
  return (
    <div>
      <h2>Next.js Application - 21 February 2024</h2>
      <p></p>
      {/* <p>{`${isServer(globalThis)}`}</p> */}
    </div>
  );
};

export default Index;
