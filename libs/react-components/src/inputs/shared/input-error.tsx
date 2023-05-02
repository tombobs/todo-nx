import styles from './inputs.module.scss';

export function InputError({errors, formKey, children}: {errors: any, formKey: string, children: any}) {
  return (
    <>
      {errors[formKey] &&
        <span className={styles.error}>{children}</span>
      }
    </>
  );
}
