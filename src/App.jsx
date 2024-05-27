import HeroLinks from "./components/HeroLinks";
import LeaderBoard from "./components/LeaderBoard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="mx-auto h-[1000px]">
      <Navbar />
      <hr />
      <HeroLinks />
      <h1 className="mx-auto text-[53px] tracking-wide font-semibold text-black/80 mt-3 grid place-content-center">
        LeaderBoards
      </h1>
      <LeaderBoard />
    </div>
  );
}

export default App;
