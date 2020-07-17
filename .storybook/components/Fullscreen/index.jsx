/**
 * Core dependencies
 */
import React from 'react';

/**
 * Utility component to display storybooks components centered in the middle of the screen.
 */
// eslint-disable-next-line react/prop-types
const Fullscreen = ({ children }) => (
  <div
    style={{
      minHeight: '100vh',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export default Fullscreen;