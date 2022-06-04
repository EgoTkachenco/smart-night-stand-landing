import { useEmailForm } from '../../util'
import HeaderBack from './HeaderBack'
import Advandages from './Advantages'

export default function Header() {
  const [send, pending, error] = useEmailForm()
  const onSubmit = (e) => {
    e.preventDefault()
    send(e.target.children[0].value)
    e.target.children[0].value = ''
  }
  return (
    <div className="pos-relative">
      <header className="header">
        <HeaderBack />
        <div className="header-inner">
          <div className="header-left">
            <h1>The side table every modern home should have</h1>
            <p>
              Built with quality in mind and with features you actually need
            </p>

            <form className="header-form" onSubmit={onSubmit}>
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
              <span>
                The Private Launch with a limited deal of 20% SPECIAL DISCCOUNT.
              </span>
            </form>
          </div>
        </div>
      </header>
      <Advandages />
    </div>
  )
}
