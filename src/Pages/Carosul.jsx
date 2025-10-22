import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PlantCard from "../Components/PlantCard";

const Carosul = ({ plants }) => {
  console.log(plants);
  return (
    <Swiper
    
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {plants.map((plant) => (
        <SwiperSlide key={plant.plantId}>
          <PlantCard plant={plant} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carosul;
