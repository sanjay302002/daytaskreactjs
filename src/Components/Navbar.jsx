import bgimage from '../assets/image-removebg-preview.png';
import heroimage from '../assets/hero.png';

function App() {
  return (
    <div
    id='home'
      className="min-h-screen bg-gradient-to-br from-rose-100 via-orange-100 to-yellow-100 text-white font-sans bg-cover bg-center h-screen w-50"
      style={{ backgroundImage: `url(${heroimage})` }}
    >
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 h-20 w-full z-20 bg-white/0 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center p-1 pr-10">
          <img src={bgimage} alt="Logo" className="h-20 w-25" />
          <nav className="space-x-8 text-sm font-light text-black">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About us</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#ContactUs" className="hover:underline">Contact us</a>
          </nav>
        </div>
      </header>

      {/* Add top padding to account for fixed navbar */}
    <main className="flex flex-col items-center justify-center text-center h-[calc(150vh-96px)]">
  <h1 className="text-4xl font-bold mb-8 drop-shadow-lg">
    Creating Moments That Matter
  </h1>
  <button className="bg-gradient-to-r from-pink-300 to-indigo-300 text-black px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
    Book Now →
  </button>
</main>

    </div>
  );
}

export default App;
