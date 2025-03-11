import { Link } from "react-router-dom";

const images = [
  { id: 1, src: "/images/grid_1.jpg", title: "Luxury Hill Resorts" },
  { id: 2, src: "/images/grid_2.webp", title: "Scenic Cottages" },
  { id: 3, src: "/images/grid_3.jpg", title: "Ooty Lake Stays" },
  { id: 4, src: "/images/grid_4.jpeg", title: "Tea Estate Retreats" },
  { id: 5, src: "/images/grid_5.jpg", title: "Heritage Bungalows" },
  { id: 6, src: "/images/tea_planation_factory_visit.jpg", title: "Mountain View Villas" }
];

const featuredStays = [
  { id: 1, name: "Nilgiri Mountain Cottage", price: 3500, image: "/images/ooty.jpeg" },
  { id: 2, name: "Ooty Lake View Resort", price: 5500, image: "/images/ooty_lake.jpg" },
  { id: 3, name: "Colonial Tea Estate Villa", price: 4200, image: "/images/tea_planation_factory_visit.jpg" }
];

const Home = () => {
  return (
    <div>
      {/* Hero Section with Scenic Background */}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white py-24 px-6"
        style={{
          backgroundImage: "url('/images/hotel-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Overlay with gradient instead of solid black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/70"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white transform rotate-45"></div>
          <div className="absolute bottom-40 right-1/4 w-32 h-12 border-2 border-white rounded-lg"></div>
          
          {/* Mountain silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-40 bg-black/30">
              <svg viewBox="0 0 1440 320" className="absolute bottom-0">
                <path fill="rgba(255,255,255,0.1)" fillOpacity="0.2" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,197.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              <svg viewBox="0 0 1440 320" className="absolute bottom-0">
                <path fill="rgba(255,255,255,0.1)" fillOpacity="0.1" d="M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,250.7C672,256,768,256,864,234.7C960,213,1056,171,1152,176C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-6xl font-bold mb-2">Happy Stay</h1>
          <div className="h-1 w-32 bg-white mx-auto mb-6 rounded-full"></div>
          <h2 className="text-4xl font-bold leading-tight">Discover Ooty - Queen of Hill Stations</h2>
          <p className="text-lg mt-3">Experience the magic of the Nilgiris with our handpicked accommodations and guided tours.</p>
          <div className="mt-6">
            <Link to="/tours">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition-all">
                Explore Ooty Tours
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stays */}
      <section className="p-6 text-center">
        <h2 className="text-4xl font-semibold mb-6">Featured Stays in Ooty</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {featuredStays.map((stay) => (
            <div 
              key={stay.id} 
              className="relative overflow-hidden rounded-xl shadow-lg bg-white w-full sm:w-64 md:w-72"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-full object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 text-left">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{stay.name}</h3>
                  <p className="text-green-600 font-medium">₹{stay.price}/night</p>
                </div>
                <Link to={`/tours/${stay.id}`}>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-3 w-full hover:bg-green-700 transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Grid */}
      <section className="p-6">
        <h2 className="text-4xl font-semibold text-center mb-8">Explore Ooty Accommodations</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 grid-rows-2">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`overflow-hidden rounded-xl shadow-md ${index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
              style={{ height: index === 0 ? "300px" : "150px" }}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 p-10 text-center mt-10">
        <h2 className="text-3xl font-semibold mb-6">What Our Guests Say About Ooty</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 italic">"The tea estate tour was breathtaking! Our guide was knowledgeable and the mountain views were spectacular."</p>
            <p className="mt-2 font-semibold">- Priya S.</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 italic">"Staying near Ooty Lake was magical. The cottage was cozy and we could see the sunrise over the mountains every morning."</p>
            <p className="mt-2 font-semibold">- Rahul K.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Ooty Travels & Stays. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;