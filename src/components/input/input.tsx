import styles from './input.module.scss';
import classNames from 'classnames';
export interface InputProps {
    className?: string;
    id?: string;
    name?: string;
}

export const Input = ({ className, id, name }: InputProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input id={id} name={name} className={styles.input} />
        </div>
    );
};
