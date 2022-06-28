const Form = () => {
  return (
    <form
      action="https://world.us18.list-manage.com/subscribe/post?u=a3c91123fc1f5fe4ebffd6be7&amp;id=b816d535dd"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <div className="text-field-wrapper">
        <input
          type="email"
          className="text-field"
          placeholder="Email"
          required
          name="EMAIL"
          id="mce-EMAIL"
          defaultValue=""
        />
        <MailIcon />
      </div>

      <div id="mce-responses" className="clear foot">
        <div
          className="response"
          id="mce-error-response"
          style={{ display: 'none' }}
        ></div>
        <div
          className="response"
          id="mce-success-response"
          style={{ display: 'none' }}
        ></div>
      </div>
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_a3c91123fc1f5fe4ebffd6be7_b816d535dd"
          tabIndex="-1"
          defaultValue=""
        />
      </div>
      <button
        type="submit"
        className="btn"
        name="subscribe"
        defaultValue="Subscribe"
        id="mc-embedded-subscribe"
      >
        Sign up now to access
      </button>
    </form>
  )
}

export default Form

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
        stroke="#19191b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke="#19191b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)
