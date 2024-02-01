// import { LuAsterisk } from "react-icons/lu";
import { useState } from "react";

// function PersonalInfoCard() {
//   const [fname, setfname] = useState("");
//   const [lname, setlname] = useState("");
//   const [phone, setphone] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [zipcode, setZipCode] = useState("");

//   return (
//     <div className="bg-slat text-sm mt-2 text-gray-500">
//       <div className="flex justify-between">
//         <div className="flex flex-col">
//           <div className="flex gap-1">
//             <h1 className="text-gray-500 font-medium">First Name</h1>
//             <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//           </div>
//           <input
//             className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
//             type="text"
//             name="firstname"
//             id=""
//             required
//             placeholder="Enter your first name"
//             value={fname}
//             onChange={(e) => setfname(e.target.value)}
//           />
//         </div>

//         <div>
//           <div className="flex gap-1">
//             <h1 className="text-gray-500 font-medium">Last Name</h1>
//             <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//           </div>
//           <input
//             className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
//             type="text"
//             name="lastname"
//             id=""
//             required
//             placeholder="Enter your last name"
//             value={lname}
//             onChange={(e) => setlname(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="flex justify-between mt-5">
//         <div className="flex flex-col">
//           <div className="flex gap-1">
//             <h1 className="text-gray-500 font-medium">Phone Number</h1>
//             <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//           </div>
//           <input
//             className="bg-gray-300 p-3 text-sm mt-2 text-gray-600 w-[310px]"
//             type="number"
//             name="phonenumber"
//             id=""
//             required
//             placeholder="Enter your phone number"
//             value={phone}
//             onChange={(e) => setphone(e.target.value)}
//           />
//         </div>

//         <div>
//           <div className="flex gap-1">
//             <h1 className="text-gray-500 font-medium">Age</h1>
//             <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//           </div>
//           <input
//             className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
//             type="number"
//             name="age"
//             id=""
//             required
//             placeholder="18"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="mt-5">
//         <div className="flex gap-1">
//           <h1 className="text-gray-500 font-medium">Email Address</h1>
//           <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//         </div>{" "}
//         <input
//           className="bg-gray-300 p-3 text-sm mt-2 w-full"
//           type="email"
//           name="emailaddress"
//           id=""
//           required
//           placeholder="Enter your email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>

//       <div className="mt-5">
//         <div className="flex gap-1">
//           <h1 className="text-gray-500 font-medium">Address</h1>
//           <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//         </div>
//         <input
//           className="bg-gray-300 p-3 text-sm mt-2 w-full"
//           type="text"
//           name="address"
//           id=""
//           required
//           placeholder="Enter your street address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>

//       <div className="flex justify-between mt-5">
//         <div className="flex flex-col">
//           <div className="flex gap-1">
//             <h1 className="text-gray-500 font-medium">City</h1>
//             <LuAsterisk className="text-orange-600 text-sm mb-2 font-extrabold" />
//           </div>{" "}
//           <input
//             className="bg-gray-300 p-3 text-sm w-[310px]"
//             type="text"
//             name="city"
//             id=""
//             required
//             placeholder="Enter your city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>

//         <div>
//           <div className="flex gap-1">
//             <h1 className="text-gray-500 font-medium">Zip Code</h1>
//             <LuAsterisk className="text-orange-600 text-sm font-extrabold" />
//           </div>
//           <input
//             className="bg-gray-300 p-3 text-sm mt-2 w-[310px]"
//             type="number"
//             name="zipcode"
//             id=""
//             required
//             placeholder="Enter your zip code"
//             value={zipcode}
//             onChange={(e) => setZipCode(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="flex gap-2 mt-5">
//         <input
//           type="checkbox"
//           name=""
//           id=""
//           placeholder="Please send latest news and updates"
//         />
//         <h1 className="text-gray-500 font-medium">
//           Please send me latest news and updates
//         </h1>
//       </div>
//     </div>
//   );
// }
