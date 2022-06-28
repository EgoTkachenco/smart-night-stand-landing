const Form = () => {
  return (
    <form
      action="https://gmail.us5.list-manage.com/subscribe/post?u=7847b01e4115bea0b1341dd1a&amp;id=321bbb5313"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      {/* <label htmlFor="mce-EMAIL">
						Email Address <span className="asterisk">*</span>
					</label>
					<input
						type="email"
						name="EMAIL"
						className="required email"
						id="mce-EMAIL"
					/> */}

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
          name="b_7847b01e4115bea0b1341dd1a_321bbb5313"
          tabIndex="-1"
          value=""
        />
      </div>
      {/* <input
					type="submit"
					value="Subscribe"
					name="subscribe"
					id="mc-embedded-subscribe"
					className="button"
				/> */}
    </form>
  )
}

export default Form
