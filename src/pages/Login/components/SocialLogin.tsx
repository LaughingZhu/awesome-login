import { useState } from 'react';

import FeishuIcon from '../../../components/FeishuIcon';
import styles from '../index.module.css';

export default function SocialLogin() {
    const [notice, setNotice] = useState('');

    const handleClick = () => {
        setNotice('This social sign-in entry is shown for presentation only.');
    };

    return (
        <>
            <div className={styles.divider}>
                <span>or</span>
            </div>

            <button type="button" className={styles.googleBtn} onClick={handleClick}>
                <span className={styles.socialIcon}>
                    <FeishuIcon />
                </span>
                Continue with Feishu
            </button>

            {notice ? <div className={styles.noticeBox}>{notice}</div> : null}

            <div className={styles.signupRow}>
                Need access?
                <button type="button" className={styles.signupLink} onClick={handleClick}>
                    Contact your administrator
                </button>
            </div>
        </>
    );
}
