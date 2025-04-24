import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return <h1>Hello world!</h1>;
}

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="p-4 flex-wrap justify-start items-center gap-30">
      <img
        src="src/assets/react-js-logo.png"
        alt="React Logo"
        className="w-40 h-39"
      />
      <Navbar />
    </header>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full text-center text-white bg-stone-900 p-4 pb-7 pt-7 flex flex-col items-center gap-2">
      <p>This is a simple React application using Tailwind CSS for styling.</p>
      <p>
        <a href="https://reactjs.org" className="text-blue-500 hover:underline">
          Learn more about React
        </a>
      </p>
    </footer>
  );
}

export default App;

export { Page };
