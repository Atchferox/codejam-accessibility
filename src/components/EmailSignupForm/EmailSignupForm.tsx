import styles from './EmailSignupForm.module.css';

export default function EmailSignupForm() {
  return (
    <>
      <div className={styles.emailHeader}>🦃 TURKEY'S HOTTEST HAIR-MAIL LIST 🦃</div>
      <form className={styles.emailForm} onSubmit={e => e.preventDefault()}>
        <input
          placeholder="drop ur email here if ur ready 2 get hairy"
          className={styles.emailInput}
        />
        <button
          className={styles.submitButton}
          onClick={() => alert('CONGRATS UR GONNA BE SO HAIRY SOON!!1!')}
        >
          🎉 YAAAS MAKE ME HAIRY PLZ 🎉
        </button>
        <span className={styles.disclaimer} id="contact">
          by clicking this button u agree to receive 500 emails/day about hair growth secrets that
          doctors HATE
        </span>
      </form>
    </>
  );
}
