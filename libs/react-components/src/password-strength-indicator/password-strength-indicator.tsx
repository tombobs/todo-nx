import { checkPasswordStrength, PasswordCheckStrength } from '@todo-nx/utils';
import { useEffect, useState } from 'react';
import styles from './password-strength-indicator.module.scss';

export interface PasswordStrengthIndicatorProps {
  password: string;
}

export function PasswordStrengthIndicator({password}: PasswordStrengthIndicatorProps) {
  const [passwordStrength, setPasswordStrength] = useState<PasswordCheckStrength>(PasswordCheckStrength.Short);
  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    const strength = checkPasswordStrength(password)
    setPasswordStrength(strength);
    switch (strength) {
      case PasswordCheckStrength.Short:
        setText('short');
        setColor('grey');
        break;
      case PasswordCheckStrength.Common:
        setText('common password');
        setColor('orange')
        break;
      case PasswordCheckStrength.Weak:
        setText('weak');
        setColor('yellow')
        break;
      case PasswordCheckStrength.Ok:
        setText('okay');
        setColor('blue')
        break;
      case PasswordCheckStrength.Strong:
        setText('strong');
        setColor('green')
        break;
    }
  }, [password]);

  return (
    <div className={styles.container}>

      <div className={styles.itemContainer}>
        {Array(4).fill('').map((_, index) =>
          <div key={index} className={styles.item} style={{background: index < passwordStrength ? color : 'inherit'}} />)
        }
      </div>

      <div className={styles.text}>{text}</div>
    </div>
  );
}
