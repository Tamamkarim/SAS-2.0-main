import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin, Rate, Carousel, Form, Input, Button } from 'antd'
import './Hotel.css'

const Hotel = () => {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8809/api/hotels/find/${id}`)
      .then((res) => setHotel(res.data))
  }, [id])

  if (!hotel) return <Spin />

  const onFinish = (values) => {
    console.log('Reservation details:', values);
   
  };

  return (
    <div className="flex flex-col m-4">
      <div>
        <h1 className='m-4'>{hotel.name}</h1>
        <div style={{ width: '500px', height: '400px' }}>
          <Carousel>
            {hotel.photos.map((photo, index) => (
              <div key={index} style={{ width: '100%', height: '100%' }}>
                <img className='hotel-image' src={photo} alt={`Hotel ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
{/*             
            <div style={{ width: '100%', height: '100%' }}>
              <img src="/Pics/bedroom1.jpg" alt="Bedroom 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '100%', height: '100%' }}>
              <img src="/Pics/bedroom.jpg" alt="Bedroom 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div> */}
            
          </Carousel>
        </div>
        <div className="flex gap-2">
          <p>{hotel.address}</p>
          <p>Rooms: {hotel.rooms.length}</p>
          <p>Rating</p>
          <Rate disabled allowHalf value={hotel.rating} />
        </div>
        <p>{hotel.desc}</p>
      </div>
      <div style={{ width: '300px', margin: 'auto' }}>
        <h1>Reservation Form</h1>
        <Form
          name="reservation_form"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Check-in Date"
            name="checkInDate"
            rules={[{ required: true, message: 'Please select check-in date' }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item
            label="Check-out Date"
            name="checkOutDate"
            rules={[{ required: true, message: 'Please select check-out date' }]}
          >
            <Input type="date" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Reserve
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        {/* <h1>Rooms</h1> */}
        {/* {hotel.rooms &&
          hotel.rooms.map((room, index) => (
            <div key={index}>
              <h2>Room {index + 1}</h2>
              <p>Type: {room.type}</p>
              <p>Price: {room.price}</p>
              <p>Capacity: {room.capacity}</p>
              
              <hr />
            </div>
          ))} */}
      </div>
    </div>
  )
}

export default Hotel

