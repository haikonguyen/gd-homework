import React, { FC } from 'react';
import './card.scss';

export const Card: FC = ({ children }) => {
  return <div className="card">{children}</div>;
};
