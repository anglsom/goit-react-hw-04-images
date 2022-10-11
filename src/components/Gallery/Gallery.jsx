import PropTypes from 'prop-types';
import Item from 'components/Item/Item';
import css from './Gallery.module.css';


export default function Gallery({ images, openModal }) {
return (
<>
<ul className={css.imageGallery}>
    {images.map((image, idx) => (
<Item key={idx} image={image} openModal={openModal} />
    ))}
</ul>
    ;
</>
);
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};