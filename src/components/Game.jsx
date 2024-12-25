import React from 'react';

const GameComponent = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://mihirsingh1101.github.io/webgl/"
        title="Unity Game"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      ></iframe>
    </div>
  );
};

export default GameComponent;
