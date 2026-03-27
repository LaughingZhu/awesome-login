import { useState } from 'react';

import BrandMark from '../../components/BrandMark';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import BrandPanel from './components/BrandPanel';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';

import styles from './index.module.css';

export default function Login() {
    const [isTyping, setIsTyping] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const isDesktop = useMediaQuery('(min-width: 1025px)');

    return (
        <div className={styles.container}>
            <BrandPanel
                isDesktop={isDesktop}
                isTyping={isTyping}
                showPassword={showPassword}
                passwordLength={passwordValue.length}
            />

            <div className={styles.rightPanel}>
                <div className={styles.formWrapper}>
                    <div className={styles.mobileLogo}>
                        <div className={styles.mobileLogoIcon}>
                            <BrandMark />
                        </div>
                        <span>Nexus Workspace</span>
                    </div>

                    <div className={styles.formHeader}>
                        <h1 className={styles.formTitle}>Sign in to your workspace</h1>
                        <p className={styles.formSubtitle}>
                            Access every internal tool from one secure portal.
                        </p>
                    </div>

                    <LoginForm
                        onTypingChange={setIsTyping}
                        onPasswordVisibilityChange={setShowPassword}
                        onPasswordValueChange={setPasswordValue}
                    />
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
}
