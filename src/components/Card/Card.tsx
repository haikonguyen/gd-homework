import React, { FC } from 'react';
import cx from 'classnames';
import styles from './Card.module.scss';

export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Card: FC<CardProps> = (props) => {
  const { className, children, style } = props;
  return (
    <div style={style} className={cx(styles.card, className)}>
      {children}
    </div>
  );
};
