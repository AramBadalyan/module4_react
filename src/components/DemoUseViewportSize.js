import React from 'react';
import { useViewportSize } from '../hooks/useViewportSize';

export function DemoUseViewportSize () {
  const { height, width } = useViewportSize();

  return (
    <React.Fragment>
      Width: {width}, height: {height}
    </React.Fragment>
  );
}
