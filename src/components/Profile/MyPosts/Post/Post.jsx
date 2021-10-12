import s from './Post.module.css';
import avaPlaceholder from '../../../../img/ava.jpg';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={avaPlaceholder} alt='avatar'/>
            {props.message}
            <div><span>like{props.likes}</span></div>
        </div>
    )
}

export default Post;