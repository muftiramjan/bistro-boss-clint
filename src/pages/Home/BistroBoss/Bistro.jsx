import slide1 from "../../../assets/home/slide1.jpg";

const Bistro = () => {
  const backgroundImageStyle = {
    width: '100%',
    height: '510px',
    backgroundImage: `url(${slide1})`, // Correct usage of background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="mb-28">
      {/* Animated background */}
      <div style={backgroundImageStyle} className="animate-fadeIn">
      </div>

      {/* Content section with animation */}
      <div className="lg:w-[700px] h-[300px] p-12 space-y-8 text-center mx-auto -mt-96 bg-white shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-black animate-slideUp">
          Bistro Boss
        </h2>
        <p className="text-gray-700 text-lg font-semibold animate-fadeInDelay">
          Experience world-class dining with a touch of elegance at Bistro Boss. 
          Our chefs carefully curated menu offers a blend of gourmet dishes, 
          perfect for indulging in culinary delights. Whether you re in the 
          mood for a classic favorite or trying something new, our team is 
          here to serve you with excellence.
        </p>
      </div>
    </div>
  );
};

export default Bistro;
