import styles from './EmailSignupForm.module.css';

export default function EmailSignupForm() {
  return (
    <>
      <div className={styles.emailHeader}>🦃 TURKEY'S HOTTEST HAIR-MAIL LIST 🦃</div>
      <form className={styles.emailForm} onSubmit={e => e.preventDefault()}>
        <input placeholder="voorbeeld@domein.com" className={styles.emailInput} />
        <button
          disabled
          className={styles.submitButton}
          onClick={() => alert('CONGRATS UR GONNA BE SO HAIRY SOON!!1!')}
        >
          🎉 YAAAS MAKE ME HAIRY PLZ 🎉
        </button>
        <span className={styles.disclaimer} id="contact">
          By clicking this button u agree to receive 500 emails/day about hair growth secrets that
          doctors HATE
        </span>
      </form>
    </>
  );
}
