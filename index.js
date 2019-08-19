import { useState, useEffect } from 'react'

export default (url, options = {}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setData(json)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [])

  return { data, error, loading }
}
