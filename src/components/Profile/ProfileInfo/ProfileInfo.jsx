import Preloader from '../../common/Preloader';
import s from './ProfileInfo.module.css';
import avaPlaceholder from '../../../img/ava.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img alt='img' src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div> */}
            <div className={s.descroptionBlock}>
                <img src={props.profile.photos.small !== null ? props.profile.photos.small : avaPlaceholder} alt='ava' className={s.ava_img}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/* <div>
                    {props.profile.aboutMe} ({props.profile.fullName}) <br/>
                    lookingForAJob: {props.profile.lookingForAJob ? <b>yes</b> : <b>null</b>} <br/>
                    Статус: "{props.profile.lookingForAJobDescription}" <br/>
                    <br/>
                    Social networks:
                    <ul>
                        <li>{props.profile.contacts.facebook !== null ? props.profile.contacts.facebook : 'no'}</li>
                        <li>{props.profile.contacts.vk !== null ? props.profile.contacts.vk : 'no' }</li>
                        <li>{props.profile.contacts.twitter !== null ? props.profile.contacts.twitter : 'no'}</li>
                        <li>{props.profile.contacts.instagram !== null ? props.profile.contacts.instagram : 'no'}</li>
                        <li>{props.profile.contacts.github !== null ? props.profile.contacts.github : 'no'}</li>
                    </ul>
                
                </div> */}
                
            </div>
        </div>
    )
}

export default ProfileInfo;