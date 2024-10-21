import { useEffect } from 'react';

const Footer = () => {
  // Apply animation on page load
  useEffect(() => {
    const footer = document.querySelector('footer');
    footer.classList.add('animate-fadeIn');
  }, []);

  return (
    <footer className="px-4 bg-slate-700 text-white mt-20">
      <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        
        {/* Grid for Footer Content */} 
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          
          {/* Bistro Boss Menu Section */} 
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-200">Our Menu</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Signature Dishes</a>
              </li>
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Appetizers</a>
              </li>
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Main Courses</a>
              </li>
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Desserts</a>
              </li>
            </ul>
          </div>
          
          {/* Bistro Boss Policies Section */} 
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-200">Our Policies</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          
          {/* Location Section */} 
          <div className="space-y-3">
            <h3 className="uppercase text-gray-200">Find Us</h3>
            <ul className="space-y-1">
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Our Locations</a>
              </li>
              <li>
                <a className="hover:text-yellow-400 transition duration-300" href="#">Bistro Boss App</a>
              </li>
            </ul>
          </div>
          
          {/* Social Media Section */} 
          <div className="space-y-3">
            <h3 className="uppercase text-gray-200">Follow Us</h3>
            <div className="flex justify-start space-x-3">
              <a href="#" className="p-1 transform hover:scale-110 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                  <path d="..."></path>
                </svg>
              </a>
              <a href="#" className="p-1 transform hover:scale-110 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="..."></path>
                </svg>
              </a>
              <a href="#" className="p-1 transform hover:scale-110 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                  <path d="..."></path>
                </svg>
              </a>
            </div>
          </div>
          
        </div>

        {/* New Sections */} 
        <div className="lg:w-1/3 text-sm">
          
          {/* Contact Us Section */} 
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-200">Contact Us</h3>
            <p className="text-gray-400">Email: info@bistroboss.com</p>
            <p className="text-gray-400">Phone: +1 (800) 555-1234</p>
          </div>

          {/* Subscribe Section */} 
          <div className="mt-8">
            <h3 className="tracking-wide uppercase text-gray-200">Stay Updated</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 text-black rounded-md focus:ring focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-yellow-500 text-black p-2 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */} 
      <div className="py-6 text-sm text-center text-gray-400">
        <p>© 2024 Bistro Boss. All rights reserved.</p>
        <p>Crafted with ❤️ by Ramjan Ali</p>
      </div>
    </footer>
  );
};

// CSS for animations 
const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 1.5s ease-out;
}
`;

export default Footer;
