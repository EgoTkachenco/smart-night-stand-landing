import { useState, useEffect } from 'react'

export default function ZdView({ type, className }) {
  const [state, setState] = useState({
    folder: null,
    inited: false,
  })

  useEffect(() => {
    switch (type) {
      case 'header':
        setState({
          ...state,
          folder: '/table-360/',
          amount: '299',
        })
        break
      case 'table-1':
        setState({
          ...state,
          folder: '/table-2-360/',
          amount: '153',
        })
        break
      case 'table-2':
        setState({
          ...state,
          folder: '/table-3-360/',
          amount: '199',
        })
        break
      default:
        break
    }
  }, [type])

  if (!state.folder) return null

  return (
    <div
      className={`cloudimage-360 ${className || ''}`}
      data-folder={state.folder}
      data-filename-x="360-{index}.png"
      data-amount-x={state.amount}
    />
  )
}
