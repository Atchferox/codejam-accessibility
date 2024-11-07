import styles from './Services.module.css';

export default function Services() {
  return (
    <>
      <h4 className={styles.sectionHeading}>Our Hair-raising Services</h4>
      <div className={styles.servicesGrid}>
        {['The Istanbul Special', 'Bald & Beautiful Package', 'The Full Turkish Delight'].map(
          service => (
            <div key={service} className={styles.serviceCard}>
              <div className={styles.serviceTitle}>{service}</div>
              <div className={styles.serviceDescription}>
                {service === 'The Istanbul Special' &&
                  'Get ready for the hair of your dreams while eating kebabs! Includes 2-night stay and unlimited Turkish tea! 🫖'}
                {service === 'Bald & Beautiful Package' &&
                  'From bowling ball to beautiful! Includes spa treatment and a genuine Turkish carpet to practice your new hair-flip on! 💇‍♂️'}
                {service === 'The Full Turkish Delight' &&
                  'The works! Hair transplant, guided tours, and a complementary fez hat to wear until your new hair grows in! 🧢'}
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
}
