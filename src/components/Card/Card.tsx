import React, { FC } from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';

export interface CardProps {
  className?: string;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children } = props;
  return <div className={cx(styles.card, className)}>{children}</div>;
};
