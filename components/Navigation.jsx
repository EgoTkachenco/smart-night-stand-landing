import { useState } from 'react'
export default function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav-inner">
        <img
          src={`${process.env.BACKEND_URL}/logo.svg`}
          alt="Logo"
          className="nav__logo"
        />

        <button className="nav-btn" onClick={() => setOpen(!open)}>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 1H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M19 7H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M19 13H1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="nav-content">
          <a href="#">features</a>
          <a href="#">how it looks</a>
          <a href="#">models</a>
          <a href="#">signup</a>
        </div>

        <div className={`nav-content__mob ${open ? 'active' : ''}`}>
          <a href="#">features</a>
          <a href="#">how it looks</a>
          <a href="#">models</a>
          <a href="#">signup</a>
        </div>
      </div>
    </nav>
  )
}
