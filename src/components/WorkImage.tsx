import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  images?: string[];
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const imagesToRender = props.images && props.images.length > 0 ? props.images : [props.image];

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '10px',
          width: '100%',
          scrollbarWidth: 'none'
        }}
      >
        {props.link && (
          <a className="work-link" href={props.link} target="_blank">
            <MdArrowOutward />
          </a>
        )}
        {imagesToRender.map((img: string, i: number) => (
          props.link ? (
            <a href={props.link} target="_blank" key={i} style={{ scrollSnapAlign: 'center', flexShrink: 0, width: '100%' }}>
               <img src={img} alt={props.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </a>
          ) : (
            <div key={i} style={{ scrollSnapAlign: 'center', flexShrink: 0, width: '100%' }}>
              <img src={img} alt={props.alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          )
        ))}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </div>
    </div>
  );
};

export default WorkImage;
