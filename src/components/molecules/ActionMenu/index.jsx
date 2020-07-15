/**
 * Core dependencies
 */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useRootClose from 'react-overlays/useRootClose';
import ToolBarButton from '../../atoms/ToolBarButton';
import ShareTip from '../ShareTip';

/**
 * Styles
 */
import './ActionMenu.scss';

const ActionMenu = ({ selectedCounters, onAdd, onDelete }) => {
  const [showTip, setShowTip] = useState(false);
  const ref = useRef();
  const selectedCountersIds = selectedCounters.map((counter) => counter.id);

  useRootClose(ref, () => setShowTip(false), {
    disabled: !showTip,
  });

  return (
    <div className="action-menu">
      {selectedCounters.length ? (
        <div className="action-menu__selection">
          <ToolBarButton onClick={() => onDelete(selectedCountersIds)} lightTheme>
            <span
              className="action-menu__selection__delete icon icon-garbage"
              aria-label="delete"
            />
          </ToolBarButton>
          <div className="action-menu__selection__share-wrapper">
            <ToolBarButton onClick={() => setShowTip(!showTip)} lightTheme>
              <span className="action-menu__selection__share icon icon-share" aria-label="share" />
            </ToolBarButton>
            {showTip ? (
              <div className="action-menu__selection__tip">
                <ShareTip
                  selectedCounters={selectedCounters}
                  onClose={() => setShowTip(false)}
                  originRef={ref}
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="action-menu__add">
        <ToolBarButton onClick={onAdd}>
          <span className="icon icon-plus" aria-label="add" />
        </ToolBarButton>
      </div>
    </div>
  );
};

ActionMenu.propTypes = {
  selectedCounters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    }),
  ),
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
};

ActionMenu.defaultProps = {
  selectedCounters: [],
  onAdd: () => true,
  onDelete: () => true,
};

export default ActionMenu;
