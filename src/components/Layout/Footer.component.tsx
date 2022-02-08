import { BiCopyright } from "react-icons/bi";

/**
 * Renders the footer for the application
 * @function Footer
 * @returns {JSX.Element} - Rendered Hamburger component
 */

const Footer = (): JSX.Element => (
  <footer role="contentinfo" aria-label="Innholdet for bunnteksten med copyright">
    <div className="mt-10 bg-gray-800 shadow">
      <div
        aria-label="Copyright tekst"
        className="container p-6 mx-auto text-center text-white font-semibold"
      >
        Copyright Daniel Fjeldstad
        <BiCopyright className="inline-block m-2" size="1.2em" />
        {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

export default Footer;
