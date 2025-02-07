import React, { useState } from "react";

const PmFunnel = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://bryantbenowitz.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error submitting the form");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };


  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Navbar */}
      <header className="py-4 md:py-6 flex justify-between items-center px-8 max-w-7xl mx-auto">
        <div className="relative inline-block">
          {/* Background Glow Effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-40 w-full h-full rounded-lg"></span>
          
          {/* Logo Text */}
          <h1 className="relative text-xl font-bold text-gray-900">PmFunnel</h1>
        </div>


        <button
        onClick={() => setShowForm(true)}
        className="px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 transition-transform transform hover:scale-105 active:scale-95"
        >
          Sign up
        </button>

      </header>

      {/* Hero Section */}
      <section className="relative text-center mt-8 sm:mt-[-20px]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-[-20px]">
          <h2 className="text-lg text-gray-600">
            You're managing properties — why not grow your real estate business too?
          </h2>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
            Turn your tenants into homebuyers and earn
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
              <span className="relative"> commissions effortlessly </span>
            </span>
          </h1>

          {/* CTA Button with Glow */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:space-x-5 transition-all duration-300">
                {!showForm ? (
                <div className="relative group cursor-pointer">
                    {/* Glowing Gradient Effect
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-violet-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                     */}
                    
                    {/* CTA Button */}
                    <button
                    onClick={() => setShowForm(true)}
                    className="relative px-8 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 transition-transform transform hover:scale-105 active:scale-95"
                    >
                    Get Started – Enter Your Info Here
                    </button>
                </div>
                ) : !submitted ? (
                  <div className="relative mt-6 p-6 bg-white shadow-xl rounded-xl w-full max-w-md mx-auto transition-all duration-500">
                    {/* Close Button (Red "X") */}
                    <button
                      onClick={() => setShowForm(false)}
                      className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
                    >
                      ✖
                    </button>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Enter Your Info</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-lg font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600 transition-transform transform hover:scale-105 active:scale-95"
                    >
                        Submit
                    </button>
                    </form>
                </div>
                ) : (
                  <div className="relative mt-6 p-6 bg-white shadow-xl rounded-xl w-full max-w-md mx-auto transition-all duration-500">
                    {/* Close Button (Red "X") */}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg font-bold"
                    >
                      ✖
                    </button>
                  
                    {/* Thank You Message */}
                    <h3 className="text-xl font-bold text-green-600">Thank you!</h3>
                    <p className="text-gray-700">Your information has been received.</p>
                  </div>
                
                )}
          </div>
        </div>

        {/* Increased spacing between CTA and video */}
        <div className="mt-12"></div>

        {/* Hero Video with Proper Glow Effect */}
        <div className="relative pb-4 flex justify-center">
          <div className="absolute w-[90%] h-[80%] max-w-4xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-50 blur-[50px] rounded-lg translate-y-10"></div>

          <video
            className="relative z-10 transform rounded-lg shadow-lg max-w-[90%] sm:max-w-3xl sm:scale-95"
            src="/pmfunnelvid.mp4"
            controls
            playsInline
            autoPlay
            loop
            muted
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} PmFunnel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PmFunnel;
