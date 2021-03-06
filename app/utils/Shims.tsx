import * as React from 'react';

declare const __TEST__: boolean;

const Thunk: any = () => null;

export const Logo: React.SFC<{}> = () => {
  if (__TEST__) {
    return <Thunk />;
  }
  const LogoComponent = require('svg-react-loader?name=Logo!../assets/images/logo.svg');
  return <LogoComponent />;
};

export const CCIcon: React.SFC<{}> = () => {
  if (__TEST__) {
    return <Thunk />;
  }
  const CCIconComponent = require('svg-react-loader?name=CreativeCommonsIcon!../assets/images/by-nc-nd.svg');
  return <CCIconComponent />;
};
