const Form = () => {
  return (
    <form
      action="https://world.us18.list-manage.com/subscribe/post?u=a3c91123fc1f5fe4ebffd6be7&amp;id=b816d535dd"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <input
        type="email"
        className="text-field"
        placeholder="Email"
        required
        name="EMAIL"
        id="mce-EMAIL"
        defaultValue=""
      />

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
      <span>The Private Launch with a limited deal of SPECIAL DISCOUNT.</span>
    </form>
  )
}

export default Form
