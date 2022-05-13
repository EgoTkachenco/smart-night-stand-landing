export default function HomeSpecification() {
  return (
    <div className="home-specification" id="models">
      <div className="card">
        <div className="specification__title">Specification</div>
        <div className="specification-block">
          <div className="specification__subtitle">DIMENSIONS</div>
          <p>900*600*600 mm</p>
          <p>36*24*24 in.</p>
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
          <div className="specification__subtitle">OPTION</div>
          <p>lorem ipsum dolor merit</p>
          <p>123 456 !! option parametr</p>
        </div>
        <img
          src={`${process.env.BACKEND_URL}/images/table-4.png`}
          alt="Table"
          className="specification__image"
        />
        <div className="specification__subtitle">DESCRIPTION</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          proin ullamcorper in. Malesuada lacus, suspendisse pellentesque turpis
          erat semper eu. Sed massa arcu, egestas ligula in accumsan. Amet,
          donec ullamcorper aliquam ut enim.
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
