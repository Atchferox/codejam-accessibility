import { useEffect, useRef } from 'react';
import styles from './CookieModal.module.scss';

export const CookieModal = () => {
  const dialog = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
  };

  const closeDialog = () => {
    document.body.style.height = '';
    document.body.style.overflow = '';
    localStorage.setItem('cookies-accepted', 'true');
    dialog.current?.close();
  };

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted') ?? null;
    if (!accepted) openDialog();
  }, [dialog]);

  return (
    <>
      <dialog className={styles.modalContainer} ref={dialog}>
        <div className={styles.modalHeader}>
          <h1>🍪 Cookie Alert (Not the Baklava Kind) 🍪</h1>
          <button onClick={closeDialog} className={styles.modalCloseButton}>
            x
          </button>
        </div>
        <div className={styles.modalContent}>
          <p>
            Hey there, future hair model! 💁‍♂️ Just like how we track your hairline progress, we also
            track your cookies! Not the delicious Turkish ones (those come with our Premium
            Package), but the digital kind that help us remember if you're more of a "Jason Momoa"
            or "The Rock" aspiration type.
          </p>
          <p>
            By clicking "Make Me Hairy!", you accept our use of cookies to:
            <ul>
              <li>Remember your current baldness level 🎱</li>
              <li>Count how many times you've zoomed in on our before/after pics 👀</li>
              <li>
                Track how long you've been staring at your hairline in our website's reflection ✨
              </li>
            </ul>
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={closeDialog} className={styles.acceptButton}>
              Make Me Hairy! 🦁
            </button>
            <button onClick={closeDialog} className={styles.declineButton}>
              Stay Bald 😢
            </button>
          </div>
        </div>
      </dialog>

      {/* <div className={styles.backdrop} /> */}
    </>
  );
};
