export default function HomeAdvantages() {
  return (
    <div className="advantages">
      <div className="card">
        <div className="card-top">
          <img
            src={`${process.env.BACKEND_URL}/icons/illuminate.svg`}
            alt="illuminate"
            className="card-top__logo"
          />
          ILLUMINATE
        </div>
        <p>Folding built-in lamp to brighten-up your space</p>
      </div>
      <div className="card">
        <div className="card-top">
          <img
            src={`${process.env.BACKEND_URL}/icons/organize.svg`}
            alt="organize"
            className="card-top__logo"
          />
          ORGANIZE
        </div>
        <p>Collapsible design with smart cable management system</p>
      </div>
      <div className="card">
        <div className="card-top">
          <img
            src={`${process.env.BACKEND_URL}/icons/charge.svg`}
            alt="charge"
            className="card-top__logo"
          />
          CHARGE
        </div>
        <p>2 USB ports and wireless charger</p>
      </div>
    </div>
  )
}
