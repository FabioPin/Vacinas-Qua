import * as React from 'react';
import styles from './VacinasQua.module.scss';
import { IVacinasQuaProps } from './IVacinasQuaProps';
import { IVacinasQuaState} from './IVacinasQuaState';
import {} from 'office-ui-fabric-react/lib/Spinner';
import { escape } from '@microsoft/sp-lodash-subset';

export default class VacinasQua extends React.Component<IVacinasQuaProps, IVacinasQuaState> {

  constructor(props: IVacinasQuaProps) {
    super(props);
    this.state = {
      isLoaded: true,
      vacinas: []
    };
  }

  public componentDidMount() {
    fetch('http://localhost:5000/todos') // fetch a api postgres 
      .then(res => res.json())
      .then(
        (result) => {
        this.setState({
          isLoaded: true,
          vacinas: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true
        });
      });
      console.log(this.state.vacinas);
  }


  public render(): React.ReactElement<IVacinasQuaProps> {
    const {isLoaded, vacinas } = this.state;
    if(!isLoaded) {
      return <div>Loading....</div>;
    }
    return (
      <table cellPadding={0} cellSpacing={0}>
        <thead>
        </thead>
        <tbody>
          <p>{this.state.vacinas}</p>
        </tbody>
      </table>
    );
  }
}
