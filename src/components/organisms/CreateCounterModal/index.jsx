/**
 * Core dependencies
 */
import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../molecules/Modal';
import ActionButton from '../../atoms/ActionButton';
import TextInput from '../../atoms/TextInput';
import ErrorAlert from '../../molecules/ErrorAlert';
import ActivityIndicator from '../../atoms/ActivityIndicator';
import ExamplesModal from '../../molecules/ExamplesModal';

/**
 * State
 */
import { addCounter } from '../../../services/counterService';
import reducer, { initialState } from './reducer';
import {
  showExampleModalAction,
  reqFailedAction,
  reqProgressAction,
  reqSuccessAction,
  hideErrorAction,
} from './actions';

/**
 * Styles
 */
import './CreateCounterModal.scss';

const CreateCounterModal = ({ onClose, onCreate }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { reqProgress, reqFailed, showExampleModal } = state;
  const [name, setName] = useState('');

  const submitCounter = () => {
    dispatch(reqProgressAction());

    addCounter(
      () => {
        dispatch(reqSuccessAction());
        onCreate();
      },
      () => {
        dispatch(reqFailedAction());
      },
    )(name);
  };

  const createCounterButton = (
    <ActionButton onClick={submitCounter} disabled={reqProgress || name === ''} label="Save" />
  );

  return (
    <>
      {reqFailed ? (
        <ErrorAlert onDismiss={() => dispatch(hideErrorAction())} title="Could'nt create counter" />
      ) : null}
      {reqProgress ? <ActivityIndicator /> : null}
      {showExampleModal ? (
        <ExamplesModal
          onSelect={(title) => {
            setName(title);
            dispatch(showExampleModalAction());
          }}
          onClose={() => dispatch(showExampleModalAction())}
        />
      ) : null}
      <Modal title="Create counter" onClose={onClose} button={createCounterButton}>
        <div className="create-counter-modal">
          <div className="create-counter-modal__name">Name</div>
          <TextInput
            disabled={reqProgress}
            onChange={(value) => setName(value)}
            value={name}
            placeholder="Cups of coffee"
          />
          <div className="create-counter-modal__suggestion">
            {`Give it a name. Creative block? `}
            <span
              className="create-counter-modal__examples"
              role="button"
              tabIndex={0}
              onClick={() => dispatch(showExampleModalAction())}
              onKeyUp={(event) => {
                return event.key === 'Enter' ? dispatch(showExampleModalAction()) : null;
              }}
            >
              See examples
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

CreateCounterModal.propTypes = {
  onCreate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CreateCounterModal;
