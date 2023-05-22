import Header from "./components/Header";
import Overview from "./sections/Overview";

const App = () => {
  return (
    <>
      <Header />
      <div className=" bg-hero-mobile bg-no-repeat bg-cover h-[300px] md:bg-hero-desktop md:h-[400px]">
      </div>
      <main className=" px-6 bg-[#f2f2f2]">
        <Overview />
      </main>
    </>
  );
}

export default App;