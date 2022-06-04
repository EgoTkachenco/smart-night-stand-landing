export default function HomeSpecification() {
  return (
    <div className="home-specification" id="models">
      <div className="card">
        <div className="specification__title">Specification</div>
        <div className="specification-block">
          <div className="specification__subtitle">DIMENSIONS</div>
          <p>900*400*400 mm</p>
          <p>36*16*16 in.</p>
        </div>
        <div className="specification-block">
          <div className="specification__subtitle">MATERIALS</div>
          <p>steel, ABS, wood</p>
        </div>
        <div className="specification-block">
          <div className="specification__subtitle">POWER</div>
          <p>110 V (US market)</p>
          <span>standard US power plug incl.</span>
          <p>220 V (EU market)</p>
          <span>standard EU power plug incl.</span>
        </div>
        <div className="specification-block">
          <div className="specification__subtitle">Additional features</div>
          <span>- alarm clock</span>
          <span>- clock with a date</span>
          <span>- PM2.5 air sensor</span>
          <span>- CO2 air sensor</span>
          <span>- temperature and moisture air sensor</span>
          <span>
            - additional shelf (with an increase in the height of the legs)
          </span>
          <span>- battery level </span>
          <span>- wireless charging</span>
          <span>- drawer (size 10*10*2.5 inch)</span>
        </div>
        <img
          src={`${process.env.BACKEND_URL}/images/table-4.png`}
          alt="Table"
          className="specification__image"
        />
        <div className="specification__subtitle">DESCRIPTION</div>
        <p>
          The TOOBLE is a smart side table designed for your convenience and
          comfort. Charge your devices with a wireless charger or through USB
          ports with a clever cable management system. Use a foldable lamp for
          your evening reading. Fine-tune it to your preference with adjustable
          height legs and a configurable smart screen.
        </p>

        <img
          src={`${process.env.BACKEND_URL}/logo-dark.svg`}
          alt="logo"
          className="specification__logo"
        />
      </div>
    </div>
  )
}
