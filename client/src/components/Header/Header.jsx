import React, { memo } from 'react';
import styles from './Header.module.css';

const Header = memo(({username, onLogout, onMyTweets, onAllTweets}) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="./img/logo.png" alt="Twitter Logo" className={styles.logoImg} />
                <h1 className={styles.logoName}>Ywitter</h1>
                {username && <span className={styles.logoUser}>@{username}</span>}
            </div>
            {username && (
                <nav className={styles.menu}>
                    <button onClick={onAllTweets}>All Tweets</button>
                    <button onClick={onMyTweets}>My Tweets</button>
                    <button onClick={onLogout} className={styles.menuItem}>Logout</button>
                </nav>
            )}
        </header>
    );
}) 

export default Header;