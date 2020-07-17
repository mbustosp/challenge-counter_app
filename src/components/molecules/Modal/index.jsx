/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import close from '../../../assets/close.svg';
import Button from '../../atoms/Button';

/**
 * Styles
 */
import './Modal.scss';

const Modal = ({ title, onClose, children, button, className, contentClassName }) => {
  return (
    <div className={classNames('modal', className)}>
      <div className="modal__content">
        <div className="modal__header">
          <Button onClick={onClose} ariaLabel="close" className="modal__header__close">
            <img src={close} alt="close" />
          </Button>
          <h1 className="modal__header__title">{title}</h1>
          {button ? <div className="modal__header__button">{button}</div> : null}
        </div>
        <hr />
        <div className={classNames('modal__contents', contentClassName)}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  button: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

Modal.defaultProps = {
  children: null,
  button: null,
  className: '',
  contentClassName: '',
};

export default Modal;
