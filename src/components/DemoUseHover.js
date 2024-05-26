import React from 'react';
import { useHover } from '../hooks/useHover';

export function DemoUseHover () {
    const { hovered, ref } = useHover();

    return (
      <div ref={ref} style={{margin: '20px 50px', padding: '50px', background: 'aquamarine'}}>
          { hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня' }
      </div>
    );
}
