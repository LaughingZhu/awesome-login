import { AnimatedCharacters } from '../../../components/AnimatedCharacters';

import styles from '../index.module.css';

interface BrandPanelProps {
    isDesktop: boolean;
    isTyping: boolean;
    showPassword: boolean;
    passwordLength: number;
}

export default function BrandPanel({
    isDesktop,
    isTyping,
    showPassword,
    passwordLength,
}: BrandPanelProps) {
    return (
        <div className={styles.leftPanel}>
            <div className={styles.charactersArea}>
                {isDesktop ? (
                    <AnimatedCharacters
                        isTyping={isTyping}
                        showPassword={showPassword}
                        passwordLength={passwordLength}
                    />
                ) : null}
            </div>

            <div className={styles.decorBlur1} />
            <div className={styles.decorBlur2} />
            <div className={styles.decorGrid} />
        </div>
    );
}
