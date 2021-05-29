import * as React from 'react';
import styles from './VacinasQua.module.scss';
import { IVacinasQuaProps } from './IVacinasQuaProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class VacinasQua extends React.Component<IVacinasQuaProps, {}> {

  public componentDidMount() {
    fetch('http://localhost:5000/todos')
      .then(
        (result) => {
          this.setState({
            
          });
        }
      );
  }

  public render(): React.ReactElement<IVacinasQuaProps> {
    return (
      <div className={ styles.vacinasQua }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }></p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
