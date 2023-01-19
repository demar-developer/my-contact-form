import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';
import { FormRow } from './components/form-row/form-row';
import { RiSendPlaneFill } from 'react-icons/ri';

function App() {
    async function handleOnSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData: Record<string, string> = {};

        function isInputNameElement(element: Element): element is HTMLInputElement {
            return 'value' in element && 'name' in element;
        }

        Array.from(event.currentTarget).filter(isInputNameElement).forEach((element) => {
            if (!element.name ) return;
            formData[element.name] = element.value;
        });
        await fetch('/.netlify/functions/mail', {
            method: 'POST',
            body: JSON.stringify(formData),
        });
    }
    return (
        <div className={styles.App}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
                Have a question? Fill out the form below and we&apos;ll get back to you as soon as
                we can.
            </p>
            <p className={styles.note}>All fields are required</p>
            <form onSubmit={handleOnSubmit} className={styles.form}>
                <FormRow>
                    <Label htmlFor={'name'}>Name</Label>
                    <Input id={'name'} name={'name'}></Input>
                </FormRow>
                <FormRow>
                    <Label htmlFor={'email'}>Email</Label>
                    <Input id={'email'} name={'email'} />
                </FormRow>
                <FormRow>
                    <Label htmlFor={'message'}>Message</Label>
                    <Input id={'message'} name={'message'} />
                </FormRow>
                <FormRow>
                    <SubmitButton>
                        <RiSendPlaneFill className={styles.iconSend} />
                        Submit
                    </SubmitButton>
                </FormRow>
            </form>
        </div>
    );
}

export default App;
