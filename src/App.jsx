import "./App.css";
import AddYourOwnCard from "./components/AddCard";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Cards />
      <AddYourOwnCard />
      <Testimonial />
      <Banner2 />
      <Footer />
    </>
  );
}

export default App;
