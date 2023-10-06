import { Link } from 'react-router-dom';

interface IProps {
  id: number;
  title: string;
  image: string;
}

const Pet = (props: IProps) => {
    const {id, title, image} = props;

  return (
    <Link to={`/details/${id}`} className="relative block">
        <div>
            <img src={image} alt={title} />
        </div>
        <div className="absolute bottom-0 left-0 bg-slate-100 bg-opacity-40 max-w-fit">
            <h1>{title}</h1>
        </div>
    </Link>
  );
};
export default Pet;