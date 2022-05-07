export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={`${process.env.BACKEND_URL}/logo.svg`}
        alt="Logo"
        className="footer__logo"
      />
    </footer>
  )
}
