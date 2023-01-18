import styles from './label.module.scss';
import classNames from 'classnames';
export interface LabelProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element|string> | string;
    htmlFor?: string;
}

export const Label = ({ className, children, htmlFor }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <label htmlFor={htmlFor}>{ children }</label>
        </div>
    );
};
