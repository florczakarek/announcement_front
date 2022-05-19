import { Link } from 'react-router-dom';
import './Button.css';

interface Props {
  text: string;
  to?: string;
}

export const Btn = (props: Props) => {
  return (
    <>
      {props.to ? (
        <Link className='btn-add' to={props.to}>
          {props.text}
        </Link>
      ) : (
        <button>{props.text}</button>
      )}
    </>
  );
};
