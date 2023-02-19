//react
import { useSelector } from 'react-redux';
//components
import { RootState } from '../../../redux/store';

export const MovieDetailsVideo = () => {
  const { video } = useSelector((s: RootState) => s.imageDetails);

  return (
    <div>
      {Object.values(video)[1]
        ? Object.values(video)[1].map((v: any) => (
            <>
              {' '}
              <a href={`https://www.themoviedb.org/video/play?key=${v.key}`}>
                <video
                  controls
                  poster={`https://www.themoviedb.org/video/play?key=${v.key}`}
                >
               

                  <source
                    src={`https://www.themoviedb.org/video/play?key=${v.key}`}
                    type="video/mp4"
                  ></source>
                </video>
              </a>
            </>
          ))
        : 'Loading'}
    </div>
  );
};
