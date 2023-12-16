import { useState,useEffect } from "react";

function App() {
  const [otp, setOtp] = useState("");

  const generateOtp = () => {
    let value = "0123456789";
    let generatedOtp = "";

    for (let i = 0; i < 4; i++) {
      let index = Math.floor(Math.random() * 10);
      generatedOtp += value.charAt(index);
    }

    setOtp(generatedOtp);
    console.log(generatedOtp);
  };

  useEffect(() => {
    // Generate OTP on initial render
    generateOtp();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">OTP Generator</h1>
      <input
        type="text"
        className="w-fit text-center py-2 px-4 border border-gray-300 rounded-full mb-4 focus:outline-none focus:ring focus:border-rose-500"
        value={otp}
        readOnly
      />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
        onClick={generateOtp}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
