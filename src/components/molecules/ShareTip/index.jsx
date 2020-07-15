/**
 * Core dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import classNames from 'classnames';
import { getCardinality, parseToText } from '../../../utils/counterUtils';
import ActionButton from '../../atoms/ActionButton';
import PaperNote from '../../atoms/PaperNote';

/**
 * Styles
 */
import './ShareTip.scss';

const ShareTip = ({ selectedCounters, className, originRef }) => {
  const [isCopied, setCopied] = useState(false);
  const count = getCardinality(selectedCounters);
  const copyPhrase = `Share ${count} counter${count > 1 ? 's' : ''}`;
  const textToCopy = selectedCounters.map((counter) => parseToText(counter)).join('\n');
  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div
      className={classNames('share-tip', className)}
      tabIndex={0}
      role="menuitem"
      ref={originRef}
    >
      <div className="share-tip__action">
        <h1 className="share-tip__action__title">{copyPhrase}</h1>
        <CopyToClipboard text={textToCopy} onCopy={onCopy}>
          <ActionButton
            className="share-tip__action__button"
            label={isCopied ? 'Copied' : 'Copy'}
            lightTheme
          />
        </CopyToClipboard>
      </div>
      <div className="share-tip__preview">
        <PaperNote selectedCounters={selectedCounters} />
      </div>
    </div>
  );
};

ShareTip.propTypes = {
  selectedCounters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    }),
  ).isRequired,
  className: PropTypes.string,
  originRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

ShareTip.defaultProps = {
  className: '',
  originRef: null,
};

export default ShareTip;
