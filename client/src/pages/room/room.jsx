import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Spin } from 'antd'

const Room = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8809/api/rooms/${id}`)
      .then((res) => setRoom(res.data))
  }, [])

  if (!room) return <Spin />

  return <div className="flex flex-col m-4">{JSON.stringify(room)}</div>
}

export default Room
