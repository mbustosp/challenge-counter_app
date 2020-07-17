/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import ExamplesScroll from '../ExamplesScroll';

/**
 * Styles
 */
import './ExamplesModal.scss';

const ExamplesModal = ({ onClose, onSelect }) => {
  return (
    <Modal
      title="Examples"
      onClose={onClose}
      className="examples-modal"
      contentClassName="examples-modal__content--overflow"
    >
      <div className="examples-modal__content">
        <h2 className="examples-modal__content__section">Drinks</h2>
        <div className="examples-modal__content__examples">
          <ExamplesScroll
            onClick={(title) => onSelect(title)}
            titles={['Cups of coffee', 'Glasses of water', 'Shops of Bier']}
          />
        </div>

        <h2 className="examples-modal__content__section">Food</h2>
        <div className="examples-modal__content__examples">
          <ExamplesScroll
            onClick={(title) => onSelect(title)}
            titles={['Pan con pescado', 'Schnitzel', 'Fish & Chips']}
          />
        </div>

        <h2 className="examples-modal__content__section">Misc</h2>
        <div className="examples-modal__content__examples">
          <ExamplesScroll
            onClick={(title) => onSelect(title)}
            titles={['AAA Batteries', 'Printers', 'Partners', 'Friends', 'Face masks']}
          />
        </div>
      </div>
    </Modal>
  );
};

ExamplesModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ExamplesModal;
