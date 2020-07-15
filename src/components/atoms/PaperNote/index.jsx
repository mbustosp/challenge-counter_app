/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import paperNote from '../../../assets/paper_note.svg';

/**
 * Styles
 */
import './PaperNote.scss';

const PaperNote = ({ selectedCounters, listMaxLength }) => {
  return (
    <div className="paper-note">
      <img className="paper-note__figure" src={paperNote} alt="Paper note" />
      <div className="paper-note__text">
        <ol>
          {selectedCounters
            .map((counter) => `${counter.count} x ${counter.name}`)
            .slice(0, listMaxLength)
            .map((counter) => (
              <li>{counter}</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

PaperNote.propTypes = {
  selectedCounters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count: PropTypes.number,
    }),
  ).isRequired,
  listMaxLength: PropTypes.number,
};

PaperNote.defaultProps = {
  listMaxLength: 4,
};

export default PaperNote;
