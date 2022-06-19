import { useEffect } from 'react'

export default function ZdView() {
  useEffect(() => {
    try {
      if (window) window.CI360.init()
    } catch (error) {
      console.log(error.message)
    }
  }, [])
  const folderName = process.env.BACKEND_URL + '/table-360/'
  return (
    <div
      className="cloudimage-360"
      data-folder={folderName}
      data-filename-x="360-{index}.png"
      data-amount-x="299"
    />
  )
}
