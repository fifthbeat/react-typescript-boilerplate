import * as React from 'react';
import {Wrap} from './styles';

type Props = {}
type State = {}

 export default class Button extends React.Component<Props, State>{
  public readonly state: State = {};

  render(): JSX.Element {
    return (
      <Wrap>
        This is Button component
      </Wrap>
    );
  }
}
