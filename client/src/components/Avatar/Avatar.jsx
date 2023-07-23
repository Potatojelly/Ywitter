import React, {memo} from 'react';
import styles from './Avatar.module.css'

const Avatar = memo(({url,name}) => {
    return (
        <div>
            {!!url ? (
                <img src={url} alt="avatar" className={styles.avatarImg} />
            ) : (
                <div className={styles.avatarTxt}>{name.charAt(0)}</div>
            )}
        </div>
    );
})

export default Avatar;