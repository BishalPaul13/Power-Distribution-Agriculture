// const Home = () => (
//   <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-6">
//     <div className="max-w-5xl mx-auto text-center">
      
//       {/* Hero Section */}
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//         Smart Power Distribution for Agriculture
//       </h1>

//       <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//         A digital platform for farmers to request power supply and for admins to manage, approve, and monitor distribution efficiently.
//       </p>

//       {/* Buttons */}
//       <div className="mt-8 flex flex-wrap justify-center gap-4">
//         <a
//           href="/login"
//           className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           Login
//         </a>
//         <a
//           href="/register"
//           className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition"
//         >
//           Register
//         </a>
//       </div>

//       {/* Features Section */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
//           <h3 className="text-xl font-semibold text-gray-800">Submit Requests</h3>
//           <p className="mt-2 text-gray-600">
//             Farmers can easily submit power requirements for irrigation, storage, and machinery.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
//           <h3 className="text-xl font-semibold text-gray-800">Track Approval</h3>
//           <p className="mt-2 text-gray-600">
//             Live status updates on power request approval and distribution scheduling.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
//           <h3 className="text-xl font-semibold text-gray-800">Admin Monitoring</h3>
//           <p className="mt-2 text-gray-600">
//             Admins can manage farmer requests, approve load, and optimize power distribution.
//           </p>
//         </div>

//       </div>
//     </div>
//   </div>
// );







// const Home = () => (
//   <div className="min-h-[85vh] bg-gray-50 flex items-center justify-center px-6 py-10">
//     <div className="max-w-6xl mx-auto text-center">

//       {/* Hero Section */}
//       <div className="mb-14">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
//           Empowering Agriculture with Smart<br className="hidden md:block" />
//           <span className="text-blue-600">Power Distribution</span>
//         </h1>

//         <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//           A modern platform where farmers can request electricity for irrigation, farming equipment, and storage — while admins manage, approve and optimize the supply effectively.
//         </p>
//       </div>

//       {/* Illustration (SVG Style) */}
//       <div className="flex justify-center mb-16">
//         <img
//           src="https://cdni.iconscout.com/illustration/premium/thumb/agriculture-electricity-illustration-8412315-6714790.png"
//           alt="Power Distribution Illustration"
//           className="w-80 md:w-96 drop-shadow-lg"
//         />
//       </div>

//       {/* Features Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100">
//           <div className="text-blue-600 text-3xl mb-3">⚡</div>
//           <h3 className="text-xl font-semibold text-gray-800">Smart Power Requests</h3>
//           <p className="mt-2 text-gray-600">
//             Submit precise electricity demands for your agricultural needs in a simplified interface.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100">
//           <div className="text-green-600 text-3xl mb-3">📊</div>
//           <h3 className="text-xl font-semibold text-gray-800">Real-Time Status</h3>
//           <p className="mt-2 text-gray-600">
//             Track your request status instantly — pending, approved, or rejected — all in one place.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100">
//           <div className="text-yellow-500 text-3xl mb-3">🛠</div>
//           <h3 className="text-xl font-semibold text-gray-800">Admin Oversight</h3>
//           <p className="mt-2 text-gray-600">
//             Admins manage requests, analyze usage patterns, and ensure efficient power distribution.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-16 text-sm text-gray-500">
//         © {new Date().getFullYear()} Power Distribution Agriculture — All rights reserved.
//       </div>

//     </div>
//   </div>
// );








// const Home = () => (
//   <div className="min-h-[85vh] bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center px-6 py-10">
//     <div className="max-w-6xl mx-auto text-center">

//       {/* Hero Text */}
//       <div className="mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-snug">
//           Smart Power Distribution for Modern Agriculture
//         </h1>

//         <p className="mt-4 text-lg text-green-700 max-w-3xl mx-auto">
//           A digital platform that helps farmers request electricity for irrigation and equipment — 
//           while admins manage and approve power usage efficiently.
//         </p>
//       </div>

//       {/* Inline SVG Illustration — works 100% without loading */}
//       <div className="flex justify-center mb-14">
//         <svg
//           width="260"
//           height="260"
//           viewBox="0 0 512 512"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="drop-shadow-xl"
//         >
//           <circle cx="256" cy="256" r="256" fill="#A7F3D0" />
//           <path
//             d="M180 330c20-60 80-120 160-150l20 40c-60 20-110 70-130 130l-50-20z"
//             fill="#047857"
//           />
//           <path
//             d="M150 360c30-80 100-150 200-180l30 60c-80 30-140 90-170 170l-60-50z"
//             fill="#10B981"
//           />
//           <rect x="240" y="120" width="40" height="110" rx="8" fill="#065F46" />
//           <circle cx="260" cy="260" r="40" fill="#34D399" stroke="#065F46" strokeWidth="4" />
//           <path
//             d="M260 230v60M230 260h60"
//             stroke="white"
//             strokeWidth="6"
//             strokeLinecap="round"
//           />
//         </svg>
//       </div>

//       {/* Features */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-green-200">
//           <div className="text-3xl mb-3">🌱</div>
//           <h3 className="text-xl font-semibold text-green-800">Farmer Power Requests</h3>
//           <p className="mt-2 text-green-700">
//             Easily submit electricity requirements for irrigation, machinery, and storage.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-green-200">
//           <div className="text-3xl mb-3">📈</div>
//           <h3 className="text-xl font-semibold text-green-800">Real-Time Tracking</h3>
//           <p className="mt-2 text-green-700">
//             Check request status instantly — pending, approved, or rejected.
//           </p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-green-200">
//           <div className="text-3xl mb-3">⚙️</div>
//           <h3 className="text-xl font-semibold text-green-800">Admin Dashboard</h3>
//           <p className="mt-2 text-green-700">
//             Approve, reject and analyze power use with an intuitive admin dashboard.
//           </p>
//         </div>

//       </div>

//       {/* Footer */}
//       <div className="mt-16 text-sm text-green-700">
//         © {new Date().getFullYear()} Power Distribution Agriculture — All rights reserved.
//       </div>

//     </div>
//   </div>
// );







function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg"
            className="w-full h-full object-cover opacity-70"
            alt="Agriculture"
          />
        </div>

        {/* Green overlay for blending with navbar */}
        <div className="absolute inset-0 bg-green-800 opacity-20"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <h1 className="text-5xl font-extrabold text-green-900 drop-shadow-lg">
            Smart Power Distribution for Agriculture
          </h1>
          <p className="mt-4 text-lg text-green-800 max-w-xl">
            Efficient, transparent, and farmer-friendly power allocation for rural areas.
            Powered by intelligent monitoring and real-time analytics.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/register"
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
            >
              Get Started
            </a>

            <a
              href="/about"
              className="bg-white hover:bg-green-50 px-6 py-3 rounded-lg text-green-700 font-semibold shadow-lg border border-green-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ---------- FEATURES SECTION ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-green-900 text-center mb-12">
          Why Choose Our System?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-800">Real-Time Monitoring</h3>
            <p className="mt-2 text-green-700">
              Track power distribution live with smart usage reports and alerts.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-800">Farmer-Friendly</h3>
            <p className="mt-2 text-green-700">
              Easy request system for getting the required amount of electricity on time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-800">Transparent & Secure</h3>
            <p className="mt-2 text-green-700">
              Admin-approved allocation ensures fairness and secure access.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-green-900 text-green-100 py-6 mt-16">
        <p className="text-center">© 2025 Smart Agriculture Power Distribution</p>
      </footer>
    </div>
  );
}


export default Home;