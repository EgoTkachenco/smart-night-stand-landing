import { useState } from 'react'
import { useEmailForm } from '../util'

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

        <button className="nav-btn" onClick={() => setOpen(true)}>
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

        <MobileMenu show={open} close={() => setOpen(false)} />
      </div>
    </nav>
  )
}

const MobileMenu = ({ show, close }) => {
  const [send, pending, error] = useEmailForm()
  const onSubmit = (e) => {
    e.preventDefault()
    send(e.target.children[0].value)
    e.target.children[0].value = ''
  }
  return (
    <div className={`nav-menu ${show ? 'active' : ''}`}>
      <div className="nav-menu-top">
        <img
          src={`${process.env.BACKEND_URL}/logo-dark.svg`}
          alt="Logo"
          className="nav__logo"
        />

        <button className="nav-menu__close" onClick={close}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7279 13.7279L1 1"
              stroke="#70768D"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M1.00059 13.7279L13.7285 1"
              stroke="#70768D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <a href="#">features</a>
      <a href="#">how it looks</a>
      <a href="#">models</a>
      <a href="#">signup</a>

      <form className="nav-menu-form" onSubmit={onSubmit}>
        <input
          type="email"
          className="text-field"
          placeholder="Email"
          required
        />
        <span>{error}</span>
        <button type="submit" className="btn" disabled={pending}>
          Sign up now to access
        </button>
        <span>The Private Launch with a limited deal of 20% OFF.</span>
      </form>
    </div>
  )
}
