// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const LoginPage = () => {
//   return (
//     <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
//       {/* BOX */}
//       <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
//         {/* IMAGE CONTAINER */}
//         <div className="relative h-1/3 w-full md:h-full md:w-1/2">
//           <Image src="/loginBg.png" alt="" fill className="object-cover"/>
//         </div>
//         {/* FORM CONTAINER */}
//         <div className="p-10 flex flex-col gap-8 md:w-1/2">
//           <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
//           <p>Log into your account or create a new one using social buttons</p>
//           <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
//             <Image
//               src="/google.png"
//               alt=""
//               width={20}
//               height={20}
//               className="object-contain"
//             />
//             <span>Sign in with Google</span>
//           </button>
//           <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
//             <Image
//               src="/facebook.png"
//               alt=""
//               width={20}
//               height={20}
//               className="object-contain"
//             />
//             <span>Sign in with Facebook</span>
//           </button>
//           <p className="text-sm">
//             Have a problem?<Link className="underline" href="/"> Contact us</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)] flex items-center justify-center bg-[#f9f9fb]">
      {/* Outer Box */}
      <div className="flex flex-col md:flex-row w-full md:w-[80%] lg:w-[60%] 2xl:w-1/2 rounded-xl shadow-2xl overflow-hidden bg-white">
        
        {/* Image Section */}
        <div className="relative h-60 md:h-auto md:w-1/2">
          <Image src="/loginBg.png" alt="login background" fill className="object-cover" />
        </div>

        {/* Form Section */}
        <div className="p-10 flex flex-col justify-center gap-6 md:w-1/2">
          <h1 className="font-bold text-3xl">Welcome</h1>
          <p className="text-gray-700">Log into your account or create a new one using social buttons</p>

          {/* Google Button */}
          <button className="flex items-center gap-4 p-4 border border-orange-100 rounded-md hover:shadow-md transition">
            <Image src="/google.png" alt="Google" width={24} height={24} />
            <span className="text-sm">Sign in with Google</span>
          </button>

          {/* Facebook Button */}
          <button className="flex items-center gap-4 p-4 border border-blue-100 rounded-md hover:shadow-md transition">
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
            <span className="text-sm">Sign in with Facebook</span>
          </button>

          <p className="text-sm text-gray-600">
            Have a problem?
            <Link className="underline ml-1 text-black" href="/">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
