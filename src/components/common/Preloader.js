import LoaderGif from '../../img/loader.svg';
import s from './Preloader.module.css';

const Preloader = () => {
    return <img src={LoaderGif} alt='gif' className={s.loaderStyle}/>
}

export default Preloader;