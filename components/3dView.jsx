import { useEffect } from 'react'

export default function ZdView() {
  useEffect(() => {
    try {
      if (window) window.CI360.init()
    } catch (error) {
      console.log(error.message)
    }
  }, [])
  return (
    <div
      className="cloudimage-360"
      data-folder="/table-360/"
      data-filename-x="360-{index}.png"
      data-amount-x="299"
    />
  )
}
