
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";


const FormTemplate = ({ isRegistered,route }) => {
  const nav = useNavigate();
  const location = useLocation();
  const [userRegisterData, setUserRegisterData] = useState({
    userName: '',
    instrument: '',
    password: '',
  });

  const [userLoginData, setUserLoginData] = useState({
    userName: '',
    password: '',
  });
   const handleRegister = async () => {
  try {
    const data = await AuthService.register(userRegisterData); // קיבלנו כבר json

    console.log("✅ register successful:", data);

    localStorage.setItem("user", JSON.stringify(data));
    nav(route); 
   } catch (error) {
    console.log("❌ register failed:", error);

    // אפשר גם להציג הודעת שגיאה למשתמש, לדוגמה:
    alert(error.message || "Login failed. Please try again.");
  }
};
 const handleLogin=async()=>{
  try {
    const data = await AuthService.login(userLoginData); // קיבלנו כבר json

    console.log("✅ Login successful:", data);
    const role=data.user.role
    console.log(role)

    if (role==="user"){
     nav('/mainPage'); 
    }
    else {
      nav('/AdminMainPage'); 
      
     }
   
    } catch (error) {
    console.error("❌ Login failed:", error);

    // אפשר גם להציג הודעת שגיאה למשתמש, לדוגמה:
    alert(error.message || "Login failed. Please try again.");
  }
};


  return (
    <form
    autoComplete="off"
    className="space-y-6 w-1/3 mt-5 flex flex-col px-6 py-0 bg-white rounded-xl " style={{direction:"ltr"}}

  >
      {/* שדה שם משתמש */}
      <div className="w-full">
        <input
          type="text"
          placeholder="userName"
          value={isRegistered ? userRegisterData.userName : userLoginData.userName}
          onChange={
            isRegistered
              ? (e) => setUserRegisterData({ ...userRegisterData, userName: e.target.value })
              : (e) => setUserLoginData({ ...userLoginData, userName: e.target.value })
          }
          className="w-full rounded-full text-left  bg-gray-200 border-none py-3 px-6 text-lg placeholder:text-gray-700 focus:outline-none"
        />
      </div>

      {/* שדה כלי נגינה לרישום */}
      {isRegistered && (
        <div className="w-full ">
          <input
            type="text"
            placeholder="instrument"
            value={userRegisterData.instrument}
            onChange={(e) =>
              setUserRegisterData({ ...userRegisterData, instrument: e.target.value })
            }
            className="w-full text-left  rounded-full bg-gray-200 border-none py-3 px-6 text-lg placeholder:text-gray-700 focus:outline-none"
          />
        </div>
      )}

      {/* שדה סיסמה */}
      <div className="w-full">
        <input
          type="password"
          placeholder="password"
          value={isRegistered ? userRegisterData.password : userLoginData.password}
          onChange={
            isRegistered
              ? (e) => setUserRegisterData({ ...userRegisterData, password: e.target.value })
              : (e) => setUserLoginData({ ...userLoginData, password: e.target.value })
          }
          className="w-full text-left  rounded-full bg-gray-200 border-none py-3 px-6 text-lg placeholder:text-gray-700 focus:outline-none"
          dir="rtl"
        />
      </div>

      {/* כפתור שליחה */}
      <div className="w-full">
        <button
          type="submit"
          className="w-full mt-4 rounded-full bg-[#23638C] hover:bg-[#1EAEDB] text-lg font-bold py-3 transition-colors text-white"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname == "/") {
              handleRegister();
            } 
            else if(location.pathname == "/login") {
              handleLogin();
            }
          
         
          }}
        
        >
          {isRegistered ? "Register" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default FormTemplate;

















































// import React, { useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import {UserService} from "../services/UserService.js";
// // import {AgentService} from '../services/AgentService.js';
// const FormTemplate = ({ isRegister }) => {
// //  const nav=useNavigate();
// //  const location=useLocation();






//    const [userRegisterData, setUserRegisterData] = useState({
//     userName: '',
//     instrument: '',
//     password: '',
 
//      });
//      const [userLoginData, setUserLoginData] = useState({
//       userName: '',
//       password: '',
//         });
 
//   const width = "w-1/4";
//   return (
//     <form
//       autoComplete="off"
//       className="space-y-4 w-full mx-auto mt-6 flex flex-col px-6 py-2 "
//     >
 
       
//           <div className={width}>
//             <input
//               type="text"
//               placeholder={"userName"}
//               value={isRegister ? userRegisterData.userName : userLoginData.password}
//               onChange={ isRegister?((e) =>
//                 setUserRegisterData({ ...userRegisterData, userName: e.target.value })
//               ):(
//                 (e) =>
//                   setUserLoginData({ ...userLoginData, userName: e.target.value })
//               )
//               }

//               className="w-full rounded-full bg-gray-200 border-none py-3 px-6 text-left text-lg placeholder:text-gray-700 focus:outline-none"
             
//             />
//                {isRegister && (
//             <div className={width}>
//               <input
//                 type="tel"
//                 placeholder="instrument"
//                 value={ userRegisterData.instrument }
//                 onChange={(e) =>
//                   setUserRegisterData({ ...userRegisterData, instrument: e.target.value })
//                 }
//                 className="w-full rounded-full bg-gray-200 border-none py-3 px-6 text-left text-lg placeholder:text-gray-700 focus:outline-none"
                
//               />
//             </div>
//           )}
//           </div>
//           <div className={width}>
//             <input
//               type="password"
//               placeholder="סיסמה"
//               value={isRegister ? userRegisterData.password : userLoginData.password}
//               onChange={ isRegister?((e) =>
//                 setUserRegisterData({ ...userRegisterData, password: e.target.value })
//               ):(
//                 (e) =>
//                   setUserLoginData({ ...userLoginData, password: e.target.value })
//               )
//               }
//               className="w-full rounded-full bg-gray-200 border-none py-3 px-6 text-left text-lg placeholder:text-gray-700 focus:outline-none"
//               dir="rtl"
//             />
//           </div>
       
    
//       <div className={width}>
//         <button
//         // onClick={(e) => {
//         //   e.preventDefault();
//         //   if (isRegister) {
//         //     if (location.pathname === "/register") {
//         //       handleRegister();
//         //     }
//         //   } else {
//         //     if (location.pathname === "/login") {
//         //       handleLogin();
//         //     }
//         //   }
//         // }}
//           type="submit"
//           className="w-full mt-8 rounded-full bg-[#23638C] hover:bg-[#1EAEDB] text-lg font-bold py-3 transition-colors text-white"
//         >
//       { isRegister ? "Register" : "Login" }
//         </button>
//       </div>
//     </form>
//   );
// };

// export default FormTemplate;