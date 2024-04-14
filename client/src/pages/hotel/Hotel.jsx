import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Rate } from 'antd'
import { Spin } from 'antd'

const Hotel = () => {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8809/api/hotels/find/${id}`)
      .then((res) => setHotel(res.data))
  }, [])

  if (!hotel) return <Spin />

  return (
    <div className="flex flex-col m-4">
      <div>
        <p>{hotel.name}</p>
        <img src={hotel.photos && hotel.photos[0]} alt="" />
        <div className="flex gap-2">
          <p>{hotel.address}</p>
          <p>Rooms: {hotel.rooms.length}</p>
          <p>Rating</p>
          <Rate disabled allowHalf value={hotel.rating} />
        </div>
        <p>{hotel.desc}</p>
      </div>
      <div>
        <h1>Rooms</h1>
        {hotel.rooms &&
          hotel.rooms.map((room, index) => (
            <div key={room}>
              <Link to={`/room/${room}`}>
                <p>Room {index}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Hotel
