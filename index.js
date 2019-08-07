import { useState, useEffect } from 'react'

export default (url, options) => {

  const { method, headers, body, mode, cache } = options

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(url, { method, headers, body, mode, cache })
        const json = await res.json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [url, method, headers, body, mode, cache])

  return { data, error, loading }
}
