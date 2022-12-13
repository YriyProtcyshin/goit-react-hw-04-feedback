import PropTypes from "prop-types"
import css from './Section.module.css';

export function Section({title, children}){
  return (
    <div className={css.feedback}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}


Section.propTypes = {
  title:PropTypes.string,
  children:PropTypes.node
}