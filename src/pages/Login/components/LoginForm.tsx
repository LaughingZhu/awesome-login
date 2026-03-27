import { useState } from 'react';

import styles from '../index.module.css';

interface LoginFormProps {
    onTypingChange: (isTyping: boolean) => void;
    onPasswordVisibilityChange: (showPassword: boolean) => void;
    onPasswordValueChange: (value: string) => void;
}

function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}

function UserIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5Z"
                fill="currentColor"
            />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M17 10h-1V8a4 4 0 1 0-8 0v2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Zm-6 0V8a2 2 0 1 1 4 0v2Z"
                fill="currentColor"
            />
        </svg>
    );
}

function EyeIcon({ hidden }: { hidden: boolean }) {
    return hidden ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M3.28 2.22 2.22 3.28l3.05 3.05A11.82 11.82 0 0 0 1 12s3.5 7 11 7a10.89 10.89 0 0 0 4.85-1.08l3.87 3.86 1.06-1.06ZM12 17c-5.02 0-7.7-3.9-8.66-5A12.8 12.8 0 0 1 6.69 8.1l1.52 1.52A4.93 4.93 0 0 0 8 11a4 4 0 0 0 5.38 3.74l1.47 1.47A5.98 5.98 0 0 1 12 17Zm0-10a10.88 10.88 0 0 1 9.66 5 12.8 12.8 0 0 1-2.72 3.26l-1.43-1.43A5.94 5.94 0 0 0 18 11a4 4 0 0 0-4-4 5.94 5.94 0 0 0-2.83.49L9.59 5.91A10.94 10.94 0 0 1 12 7Z"
                fill="currentColor"
            />
        </svg>
    ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 5c7.5 0 11 7 11 7s-3.5 7-11 7S1 12 1 12s3.5-7 11-7Zm0 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-2.2a1.8 1.8 0 1 1 1.8-1.8 1.8 1.8 0 0 1-1.8 1.8Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function LoginForm({
    onTypingChange,
    onPasswordVisibilityChange,
    onPasswordValueChange,
}: LoginFormProps) {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [notice, setNotice] = useState('');

    const togglePasswordVisibility = () => {
        const nextValue = !showPassword;
        setShowPassword(nextValue);
        onPasswordVisibilityChange(nextValue);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setNotice('');

        if (!username.trim()) {
            setError('Please enter your username.');
            setLoading(false);
            return;
        }

        if (username.trim().length < 3) {
            setError('Username must be at least 3 characters.');
            setLoading(false);
            return;
        }

        if (!password) {
            setError('Please enter your password.');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            setLoading(false);
            return;
        }

        try {
            await wait(800);
            setNotice('Demo mode: the sign-in form was submitted successfully.');
        } catch {
            setError('This demo page cannot complete a live sign-in request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <label className={styles.field}>
                <span className={styles.fieldLabel}>Username</span>
                <span className={styles.inputShell}>
                    <span className={styles.prefixIcon}>
                        <UserIcon />
                    </span>
                    <input
                        className={styles.input}
                        name="username"
                        value={username}
                        placeholder="Enter your username"
                        autoComplete="username"
                        onChange={(event) => setUsername(event.target.value)}
                        onFocus={() => onTypingChange(true)}
                        onBlur={() => onTypingChange(false)}
                    />
                </span>
            </label>

            <label className={styles.field}>
                <span className={styles.fieldLabel}>Password</span>
                <span className={styles.inputShell}>
                    <span className={styles.prefixIcon}>
                        <LockIcon />
                    </span>
                    <input
                        className={styles.input}
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                            onPasswordValueChange(event.target.value);
                        }}
                        onFocus={() => onTypingChange(true)}
                        onBlur={() => onTypingChange(false)}
                    />
                    <button
                        type="button"
                        className={styles.eyeToggle}
                        onClick={togglePasswordVisibility}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                        <EyeIcon hidden={!showPassword} />
                    </button>
                </span>
            </label>

            {error ? <div className={styles.errorBox}>{error}</div> : null}
            {notice ? <div className={styles.noticeBox}>{notice}</div> : null}

            <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Signing in...' : 'Sign in'}
            </button>
        </form>
    );
}
