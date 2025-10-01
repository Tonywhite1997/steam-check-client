import FooterLogo from "/footer_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#171a21] text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 gap-4">
          {/* Left - Valve Logo + Text */}
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3">
            <img className="h-8 md:h-10" src={FooterLogo} alt="Valve Logo" />
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              © 2025 Valve Corporation. All rights reserved. All trademarks are
              property of their respective owners in the US and other countries.
              VAT included in all prices where applicable.
            </p>
          </div>

          {/* Right - Steam logo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://store.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
              alt="Steam Logo"
              className="h-8 opacity-70"
            />
          </div>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-gray-300">
          <a
            href="https://store.steampowered.com/privacy_agreement/"
            className="hover:text-white"
          >
            Privacy Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="https://store.steampowered.com/legal/"
            className="hover:text-white"
          >
            Legal
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="https://store.steampowered.com/subscriber_agreement/"
            className="hover:text-white"
          >
            Steam Subscriber Agreement
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="https://store.steampowered.com/account/cookiepreferences/"
            className="hover:text-white"
          >
            Cookies
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 border-t border-gray-700 pt-4 text-gray-300">
          <a
            href="https://store.steampowered.com/publisher/valve"
            className="hover:text-white"
            target="_blank"
          >
            About Valve
          </a>
          <a
            href="https://www.valvesoftware.com/en/"
            className="hover:text-white"
            target="_blank"
          >
            Jobs
          </a>
          <a
            href="https://store.steampowered.com/news/group/4145017"
            className="hover:text-white"
            target="_blank"
          >
            Steamworks
          </a>
          <a
            href="https://help.steampowered.com/en/wizard/HelpWithPublishing?issueid=923"
            className="hover:text-white"
            target="_blank"
          >
            Steam Distribution
          </a>
          <a
            href="https://help.steampowered.com/en/"
            className="hover:text-white"
            target="_blank"
          >
            Support
          </a>
          {/* Socials */}
          <a href="#" className="hover:text-white">
            f
          </a>
          <a href="#" className="hover:text-white">
            X
          </a>
          <a href="#" className="hover:text-white">
            🦋
          </a>
        </div>
      </div>
    </footer>
  );
}
