import './SearchBar.css';
import propTypes from 'prop-types';


export default function SearchBar({css, children}) {
  return <section className={`search-box ${css}`}>{children}</section>;
}
export function Input({name, id, css, text}){
  return <input type="text" name={name} id={id} className={`search ${css}`} placeholder={text} />;
}

SearchBar.propTypes = {
  children: propTypes.string
}.isRequired;

Input.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  css: propTypes.string,
  text: propTypes.string
}.isRequired;
