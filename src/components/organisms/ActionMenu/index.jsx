/**
 * Core dependencies
 */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useRootClose from 'react-overlays/useRootClose';
import ToolBarButton from '../../atoms/ToolBarButton';
import ShareTip from '../../molecules/ShareTip';
import DeleteAlert from '../DeleteAlert';

/**
 * Styles
 */
import './ActionMenu.scss';
import CreateCounterModal from '../CreateCounterModal';

const ActionMenu = ({ selectedCounters, onChange }) => {
  const [showAddModal, setAddModalVisibility] = useState(false);
  const [showDeleteModal, setDeleteModalVisibility] = useState(false);
  const [showShareTip, setShareTipVisibility] = useState(false);

  const ref = useRef();

  const onCompleted = () => {
    setDeleteModalVisibility(false);
    setAddModalVisibility(false);
    onChange();
  };

  useRootClose(ref, () => setShareTipVisibility(false), {
    disabled: !showShareTip,
  });

  return (
    <>
      {showDeleteModal ? (
        <DeleteAlert
          counters={selectedCounters}
          onCompleted={onCompleted}
          onClose={() => setDeleteModalVisibility(false)}
        />
      ) : null}
      {showAddModal ? (
        <CreateCounterModal onCreate={onCompleted} onClose={() => setAddModalVisibility(false)} />
      ) : null}
      <div className="action-menu">
        {selectedCounters.length ? (
          <div className="action-menu__selection">
            <ToolBarButton
              onClick={() => setDeleteModalVisibility(!showDeleteModal)}
              lightTheme
              ariaLabel="delete"
            >
              <span className="action-menu__selection__delete icon icon-garbage" />
            </ToolBarButton>
            <div className="action-menu__selection__share-wrapper">
              <ToolBarButton
                onClick={() => (showShareTip ? null : setShareTipVisibility(!showShareTip))}
                lightTheme
                ariaLabel="share"
              >
                <span className="action-menu__selection__share icon icon-share" />
              </ToolBarButton>
              {showShareTip ? (
                <div className="action-menu__selection__tip">
                  <ShareTip selectedCounters={selectedCounters} originRef={ref} />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="action-menu__add">
          <ToolBarButton onClick={() => setAddModalVisibility(true)} ariaLabel="add">
            <span className="icon icon-plus" />
          </ToolBarButton>
        </div>
      </div>
    </>
  );
};

ActionMenu.propTypes = {
  selectedCounters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    }),
  ),
  onChange: PropTypes.func,
};

ActionMenu.defaultProps = {
  selectedCounters: [],
  onChange: () => true,
};

export default ActionMenu;
