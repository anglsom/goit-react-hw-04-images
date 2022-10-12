import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modalca.module.css';

export default function Modalca({ onClose, imageUrl, imageTags }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={imageUrl} alt={imageTags} />
      </div>
    </div>
  );
}

Modalca.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageTags: PropTypes.string.isRequired,
};