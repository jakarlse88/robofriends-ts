import * as React from 'react';

interface IScrollProps {
  children?: JSX.Element
}

const Scroll = (props: IScrollProps): JSX.Element => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;