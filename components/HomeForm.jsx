import { useEmailForm } from '../util'

export default function HomeForm() {
  const [send, pending, error] = useEmailForm()
  const onSubmit = (e) => {
    e.preventDefault()
    send(e.target.children[0].children[0].value)
    e.target.children[0].children[0].value = ''
  }

  return (
    <div className="home-form">
      <div className="form__title">Sign up to access</div>
      <div className="form__subtitle">
        The Private Launch with a limited deal of 20% OFF.
      </div>

      <form onSubmit={onSubmit}>
        <div className="text-field-wrapper">
          <input type="text" className="text-field" placeholder="Email" />
          <MailIcon />
        </div>
        <button className="btn" type="submit" disabled={pending}>
          Sign up now
        </button>
      </form>
    </div>
  )
}

const MailIcon = () => (
  <div className="icon">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="#676E8B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="#676E8B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)
