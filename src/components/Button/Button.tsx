import styles from './Button.module.css';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <div onClick={onClick} {...props} className={styles.button}>
      {children}
    </div>
  );
};
