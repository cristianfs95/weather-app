import React, { FC } from 'react';
import { TemperatureProps } from '../../types'

export const Temperature: FC<TemperatureProps> = (props) => {
  return <>{props.value}</>;
};
