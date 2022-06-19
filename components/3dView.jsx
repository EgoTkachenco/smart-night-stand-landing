import { useEffect } from 'react'

export default function ZdView() {
  useEffect(() => {
    try {
      if (window) window.CI360.init()
    } catch (error) {
      console.log(error.message)
    }
  }, [])
  const debug = process.env.NODE_ENV !== 'production'
  const folderName = debug
    ? '/table-360/'
    : 'https://egotkachenco.github.io/smart-night-stand-landing/table-360/'
  return (
    <div
      className="cloudimage-360"
      data-folder="/table-360/"
      data-filename-x="360-{index}.png"
      data-amount-x="299"
    />
  )
}
