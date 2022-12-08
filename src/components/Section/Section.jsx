import { Component } from 'react';
import css from './Section.module.css';


export class Section extends Component {
  render() {
    return (
      <div className={css.feedback}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
