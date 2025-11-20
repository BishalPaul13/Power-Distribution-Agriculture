// // import React, { useContext } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AuthContext } from '../context/AuthContext';

// // export default function Navbar() {
// //   const { auth, logout } = useContext(AuthContext);
// //   const nav = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     nav('/login');
// //   };

// //   return (
// //     <header className="bg-white shadow-sm">
// //       <div className="container-max flex items-center justify-between h-16">
// //         <Link to="/" className="flex items-center gap-3">
// //           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center text-white font-bold">PD</div>
// //           <div>
// //             <div className="text-lg font-semibold">Power Distribution</div>
// //             <div className="text-xs text-gray-500">Agriculture Portal</div>
// //           </div>
// //         </Link>

// //         <nav className="flex items-center gap-4">
// //           {!auth.token ? (
// //             <>
// //               <Link to="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
// //               <Link to="/register" className="text-sm text-gray-600 hover:underline">Register</Link>
// //             </>
// //           ) : (
// //             <>
// //               {auth.role === 'farmer' && (
// //                 <>
// //                   <Link to="/request" className="text-sm text-gray-700 hover:underline">Request Power</Link>
// //                   <Link to="/status" className="text-sm text-gray-700 hover:underline">My Requests</Link>
// //                 </>
// //               )}
// //               {auth.role === 'admin' && (
// //                 <Link to="/admin/dashboard" className="text-sm text-gray-700 hover:underline">Admin Dashboard</Link>
// //               )}
// //               <span className="ml-4 text-sm text-gray-600">{auth.name}</span>
// //               <button onClick={handleLogout} className="ml-3 px-3 py-1 rounded-md bg-red-500 text-white text-sm">Logout</button>
// //             </>
// //           )}
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }



// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Navbar() {
//   const { auth, logout } = useContext(AuthContext);
//   const nav = useNavigate();

//   const handleLogout = () => {
//     logout();
//     nav("/login");
//   };

//   return (
//     <header className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold">PD</div>
//           <div className="leading-tight">
//             <div className="font-semibold text-gray-800">Power Distribution</div>
//             <div className="text-xs text-gray-500">Agriculture Portal</div>
//           </div>
//         </Link>

//         <nav className="flex items-center gap-4">
//           {!auth.token ? (
//             <>
//               <Link to="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
//               <Link to="/register" className="text-sm text-gray-600 hover:underline">Register</Link>
//             </>
//           ) : (
//             <>
//               {auth.role === "farmer" && (
//                 <>
//                   <Link to="/request" className="text-sm text-gray-700 hover:underline">Request</Link>
//                   <Link to="/status" className="text-sm text-gray-700 hover:underline">My Requests</Link>
//                 </>
//               )}
//               {auth.role === "admin" && (
//                 <Link to="/admin/dashboard" className="text-sm text-gray-700 hover:underline">Admin</Link>
//               )}
//               <span className="text-sm text-gray-600 ml-4">{auth.name}</span>
//               <button onClick={handleLogout} className="ml-3 px-3 py-1 rounded-md bg-red-500 text-white text-sm">Logout</button>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }








import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { auth, logout } = useContext(AuthContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <header className="bg-white shadow-md border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-green-600 
                          flex items-center justify-center text-white font-bold shadow-sm
                          group-hover:scale-105 transition">
            PD
          </div>

          <div className="leading-tight">
            <div className="font-semibold text-green-800 text-lg">Power Distribution</div>
            <div className="text-xs text-green-600">Agriculture Portal</div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-5">

          {!auth.token ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-green-700 hover:text-green-900 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-sm font-medium text-gray-600 hover:text-gray-800 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {/* Farmer Links */}
              {auth.role === "farmer" && (
                <>
                  <Link
                    to="/request"
                    className="text-sm font-medium text-green-700 hover:text-green-900 transition"
                  >
                    Request
                  </Link>

                  <Link
                    to="/status"
                    className="text-sm font-medium text-green-700 hover:text-green-900 transition"
                  >
                    My Requests
                  </Link>
                </>
              )}

              {/* Admin Links */}
              {auth.role === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="text-sm font-medium text-green-700 hover:text-green-900 transition"
                >
                  Admin Dashboard
                </Link>
              )}

              {/* User Name */}
              <span className="text-sm text-green-700 font-medium ml-4">
                {auth.name}
              </span>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="ml-3 px-4 py-1.5 rounded-md bg-red-500 text-white text-sm shadow 
                           hover:bg-red-600 hover:shadow-md transition"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
