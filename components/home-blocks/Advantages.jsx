/* eslint-disable @next/next/no-img-element */
export default function HomeAdvantages() {
  return (
    <div className="advantages">
      <a className="card" href="#illuminate">
        <div className="card-top">
          <img
            src="/icons/illuminate.svg"
            alt="illuminate"
            className="card-top__logo"
          />
          ILLUMINATE
        </div>
        <p>Folding built-in lamp to brighten-up your space</p>
      </a>
      <a className="card" href="#organize">
        <div className="card-top">
          <img
            src="/icons/organize.svg"
            alt="organize"
            className="card-top__logo"
          />
          ORGANIZE
        </div>
        <p>Collapsible design with smart cable management system</p>
      </a>
      <a className="card" href="#charge">
        <div className="card-top">
          <img
            src="/icons/charge.svg"
            alt="charge"
            className="card-top__logo"
          />
          CHARGE
        </div>
        <p>2 USB ports and wireless charger</p>
      </a>
    </div>
  )
}
