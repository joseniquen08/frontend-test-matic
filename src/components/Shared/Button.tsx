import { useNavigate } from "react-router-dom";

interface Props {
  route: string;
  children: JSX.Element;
}

export const Button = ({ route, children }: Props) => {

  const navigate = useNavigate();

  return (
    <button type='button' onClick={() => navigate(route)} className='shared__cta__button'>{ children }</button>
  )
}
