import Blog from "./components/blog";
import Companies from "./components/companies";
import Footer from "./components/footer";
import Future from "./components/future";
import Header from "./components/header";
import Hero from "./components/hero";
import Register from "./components/register";
import Vr from "./components/vr";
import What from "./components/what";

function App() {
  return (
    <>
      <div className="container relative mx-auto h-screen w-screen">
        <Header />
        <Hero />

        <Companies />
        <What />
        <Future />
        <Vr />
        <Register />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
