/**
 * Core dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './NoCounters.scss';

const NoCounters = () => {
  return (
    <div className="no-counters">
      <h1 className="no-counters__title">No counters yet</h1>
      <p className="no-counters__quote">
        &quot;I started counting my blessings, my whole life turned around.&quot;
        <span style={{ display: 'block' }}> — Willie Nelson</span>
      </p>
    </div>
  );
};

export default NoCounters;
