//react
import { useSelector } from 'react-redux';
//styles
import 'react-multi-carousel/lib/styles.css';
// components
import { RootState } from '../../../redux/store';
//lib
import Carousel from 'react-multi-carousel';
const uniqid = require('uniqid');

export const MovieDetailsImage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const images = useSelector((s: RootState) => s.imageDetails.images);

  return (
    <>
      {images.backdrops ? (
        <>
          {' '}
          <h2 style={{ width: '1200px', margin: '20px auto' }}>Media</h2>
          <ul>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {images?.backdrops?.map((image) => (
                <li className="details__list-img-item" key={uniqid()}>
                  <img
                    className="details__list-img-backdrop"
                    src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${image.file_path}`}
                    alt=""
                  />
                </li>
              ))}
            </Carousel>
          </ul>{' '}
        </>
      ) : (
        'Loading'
      )}
    </>
  );
};
