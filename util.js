import { useState } from 'react'

export const useEmailForm = () => {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)
  const [successfull, setSuccessfull] = useState(false)
  const send = (email) => {
    setPending(true)
    setSuccessfull(false)
    setError(null)
    fetch('/api/form', {
      method: 'POST',
      body: email,
    })
      .then((res) => {
        if (res.status === 200) {
          setSuccessfull(true)
        } else {
          setError('Server Error')
        }
      })
      .catch((err) => {
        setError('Server Error')
      })
      .finally(() => {
        setPending(false)
      })
  }

  return [send, pending, error, successfull]
}
