import { useState } from 'react'

export default function HomeCarousel() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="home-carousel">
      <div className={`carousel ${isActive ? 'active' : ''}`}>
        {renderPic('living-room')}
        {renderPic('bedroom')}
      </div>
      <div className="carousel__title">IN LIVING ROOM / IN BEDROOM</div>
      <div className="carousel__subtitle">
        Thoughtful design makes TOOBLE fit in every room
      </div>

      <div className="switch-wrapper">
        <div className="label">LIVING ROOM</div>
        <div
          className={`switch ${isActive ? 'active' : ''}`}
          onClick={() => setIsActive(!isActive)}
        >
          <div className="value" />
        </div>
        <div className="label">LIVING ROOM</div>
      </div>
    </div>
  )
}

const renderPic = (name) => (
  <picture className="carousel__item">
    <source media="(max-width: 360px)" srcSet={`/images/${name}-sm.png`} />
    <source media="(max-width: 960px)" srcSet={`/images/${name}-md.png`} />
    <source media="(min-width: 960px)" srcSet={`/images/${name}.png`} />
    <img src={`/images/features/${name}.png`} alt="carousel__item" />
  </picture>
)
