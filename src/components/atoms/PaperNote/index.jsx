import React from 'react';
import PropTypes from 'prop-types';
import paperNote from '../../../assets/paper_note.svg';

import './PaperNote.scss';

const PaperNote = ({ selectedCounters }) => {
  return (
    <div className="paper-note">
      <img className="paper-note__figure" src={paperNote} alt="Paper note" />
      <div className="paper-note__text">
        <ol>
          {selectedCounters
            .map((counter) => `${counter.count} x ${counter.name}`)
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
};

export default PaperNote;
