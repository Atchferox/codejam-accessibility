import AboutSection from './components/AboutSection/AboutSection';
import Accordion from './components/Accordion/Accordion';
import { Button } from './components/Button/Button';
import { CookieModal } from './components/CookieModal/CookieModal';
import EmailSignupForm from './components/EmailSignupForm/EmailSignupForm';
import Services from './components/Services/Services';
import styles from './styles/Page.module.scss';

export default function Page() {
  return (
    <main>
      <body>
        <CookieModal />

        {/* First section */}
        <section className={styles.main}>
          <h1 className={styles.welcomeHeading}>Welcome to</h1>
          <h2 className={styles.companyName}>TurkHair 🦃 Travels & Transplants</h2>
          <Button
            className={styles.scrollPrompt}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Sign up for a hairy good time! →
          </Button>
          <input placeholder="placeholder" style={{ width: 0, height: 0 }} />
        </section>

        {/* About section */}
        <section className={styles.section} id="about">
          <AboutSection />
        </section>

        {/* Services section */}
        <section className={styles.sectionWhite}>
          <Services />
        </section>

        {/* FAQ Accordion */}
        <section className={styles.section}>
          <Accordion
            items={[
              {
                title: 'Will it hurt my head... and my wallet? 💰',
                content:
                  'Less than staying bald forever! Plus, you get a vacation out of it. Two birds, one follicle!',
              },
              {
                title: 'How long until I look like Jason Momoa? 🦁',
                content:
                  'Results vary, but most clients go from "Mr. Clean" to "Clean Mr. Worldwide" in about 6-12 months!',
              },
              {
                title: 'Why Turkey? 🇹🇷',
                content:
                  "Because combining hair transplants with baklava is the secret recipe for happiness! Also, our surgeons are the best in the business (and we're not just splitting hairs here).",
              },
            ]}
          />
        </section>

        {/* email signup form */}
        <section className={styles.sectionWhite}>
          <EmailSignupForm />
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerText}>
            Warning: Side effects may include excessive confidence, increased dating success, and an
            unexplainable craving for Turkish coffee. Results may vary, but our jokes don't! 🦃✈️💇‍♂️
          </div>
        </footer>
      </body>
    </main>
  );
}
