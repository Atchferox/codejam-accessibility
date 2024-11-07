import styles from './Accordion.module.css';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const toggleContent = (index: number) => {
    const content = document.getElementById(`accordion-content-${index}`);
    const arrow = document.getElementById(`accordion-arrow-${index}`);

    if (content && arrow) {
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
      arrow.style.transform = content.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div className={styles.accordionHeader} onClick={() => toggleContent(index)}>
            <span>{item.title}</span>
            <span id={`accordion-arrow-${index}`} className={styles.accordionArrow}>
              ▼
            </span>
          </div>
          <div
            id={`accordion-content-${index}`}
            className={styles.accordionContent}
            style={{ display: 'none' }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
