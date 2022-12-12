declare module '@iconscout/react-unicons' {
  import { SVGProps } from 'react';

  export type IconProps = {
    color?: string
    size?: string | number
  } & SVGProps<SVGElement>;

  export type Icon = (props: IconProps) => JSX.Element;
  export const UilSearch: Icon;
  export const UilLocationPoint: Icon;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
