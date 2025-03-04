import styles from './AboutSection.module.scss';

export default function AboutSection() {
  return (
    <>
      <h3 className={styles.sectionHeading}>About Our Hairy Business</h3>
      <div className={styles.aboutGrid}>
        <img src="/company_logo.jpg" alt="company logo" className={styles.companyLogo} />
        <div className={styles.about}>
          <div className={styles.establishedDate}>MAKING HEADS HAPPY SINCE 2024</div>
          <div className={styles.aboutText}>
            At TurkHair Travels & Transplants, we believe every scalp deserves a second chance!
            We're your one-stop-shop for combining vacation vibes with follicular dreams. Why stare
            at your bald spot when you could be staring at the Bosphorus? We'll turn your chrome
            dome into a luxury dome! 🌟
          </div>
        </div>
      </div>
    </>
  );
}
