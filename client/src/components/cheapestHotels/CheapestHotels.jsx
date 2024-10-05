import { ArrowRightOutlined } from '@ant-design/icons';
import { Badge, Card, Carousel, Image } from 'antd';
import { HotelContext } from 'context/HotelContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import countries_covers from '../../data/countries_covers.json';
import "./cheapestHotels.css";
const { Meta } = Card


const HotelCard = ({ hotel, loading }) => {
  let info = countries_covers.find((country) => country.name === hotel.city)

  // Define styles for different screen sizes
  const cardStyles = {
    base: {
      minWidth: '250px',
      marginTop: '10px',
      borderRadius: '0.75rem',
    },
    mobile: {
      margin: '5px',
    },
    large: {
      margin: '20px',
    },
    image: {
      objectFit: 'cover',
      minHeight: '350px',
      maxHeight: '350px',
    },
    mobileImage: {
      maxHeight: '200px',
    },
  };

  return (
    <Badge.Ribbon text={`${hotel.cheapestPrice} £`} className="mr-2 text-2xl">
      <Card
        loading={loading}
        actions={[
          <Link to={`/hotel/${hotel._id}`}>
            <ArrowRightOutlined key="more"></ArrowRightOutlined>
          </Link>,
        ]}
        style={{
          ...cardStyles.base,
          ...window.innerWidth <= 767 ? cardStyles.mobile : cardStyles.large,
        }}
        hoverable
        cover={
          <Image
            alt=""
            src={info?.cover}
            style={{
              ...cardStyles.image,
              ...window.innerWidth <= 767 ? cardStyles.mobileImage : null,
            }}
          />
        }
      >
        <Meta title={hotel.name} description={hotel.desc} />
      </Card>
    </Badge.Ribbon>
  );
}

const CheapestHotels = () => {
  const { hotels, loading, error } = useContext(HotelContext)

  return (
    <div className="mx-8 lg:mx-48">
      <Carousel autoplay>
        {hotels
          .filter((e) => e.cheapestPrice <= 200)
          .map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} loading={loading} />
          ))}
      </Carousel>
    </div>
  )
}

export default CheapestHotels;
