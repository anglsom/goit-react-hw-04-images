import PropTypes from 'prop-types';
import Item from 'components/Item/Item';
import css from './Gallery.module.css';


export default function Gallery({ images }) {
return (
<>
<ul className={css.imageGallery}>
    {images.map((image, idx) => (
<Item key={idx} image={image} />
    ))}
</ul>
    ;
</>
);
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};