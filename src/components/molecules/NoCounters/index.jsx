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
        &apos When I started counting my blessings, my whole life turned around. &apos —Willie
        Nelson
      </p>
    </div>
  );
};

export default NoCounters;
