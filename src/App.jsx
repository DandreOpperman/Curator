import Navbar from "./home-components/Navbar";
import { Items } from "./home-components/Items";
import { Favorites } from "./home-components/Favorites";
import Galleries from "./home-components/Galleries";

function App() {
  return (
    <main>
      <Navbar />
      <Items />
      <Favorites />
      {/* <Galleries /> */}
    </main>
  );
}

export default App;
