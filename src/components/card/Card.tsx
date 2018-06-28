import * as React from 'react';

interface ICardStatelessProps {
  email: string,
  id: number,
  name: string,
  username?: string
};

const Card: React.SFC<ICardStatelessProps> = ({ name, email, id }): JSX.Element => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;