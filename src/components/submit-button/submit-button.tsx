import styles from './submit-button.module.scss';
import classNames from 'classnames';
export interface SubmitButtonProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

export const SubmitButton = ({ className, children }: SubmitButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.button}>{children}</button>
        </div>
    );
};
