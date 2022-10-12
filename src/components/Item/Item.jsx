import css from './Item.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modalca from 'components/Modalca/Modalca';

export default function Item({ image }) {
  const [modal, setModal] = useState(false);
  const { webformatURL, largeImageURL, tags } = image;
  return (
    <li className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => setModal(true)}
      />
      {modal && (
        <Modalca
          imageUrl={largeImageURL}
          imageTags={tags}
          onClose={() => setModal(false)}
        />
      )}
    </li>
  );
}

Item.propTypes = {
  image: PropTypes.object.isRequired,
};