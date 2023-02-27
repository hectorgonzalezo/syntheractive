import React from 'react';
import Rack from './Rack';
import Presets from './Presets';
import Keyboard from './Keyboard';
import Visualizer from './Visualizer';

function SynthMain(){
  return(
    <main>
      <Visualizer />
      <Presets />
      <Rack />
      <Keyboard />
    </main>
  );
}

export default SynthMain;