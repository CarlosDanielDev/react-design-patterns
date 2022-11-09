import { SplitScreen } from "./SplitScreen";

const LeftHandSide = ({ name }) => {
  return <h1 style={{ backgroundColor: "blue", color: "#fff" }}>{name}</h1>;
};

const RightHandSide = ({ name }) => {
  return <p style={{ backgroundColor: "green", color: "blue" }}>{name}</p>;
};
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandSide name="Daniel" />
      <RightHandSide name="Right!" />
    </SplitScreen>
  );
}

export default App;
