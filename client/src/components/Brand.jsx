import symbol from "../assets/kg-logo.png";

// Shared logo lockup: original KG symbol + white editable brand text.
export default function Brand({ className = "" }) {
  return <a className={`kg-brand ${className}`} href="/#home" aria-label="KG — Home">
    <img className="kg-brand__symbol" src={symbol} alt="" />
    <span className="kg-brand__text">INTERNATIONAL EXHIBITION<br />DESIGN &amp; CONSTRUCTION</span>
  </a>;
}
