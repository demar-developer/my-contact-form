import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Label } from './components/label/label';
import { SubmitButton } from './components/submit-button/submit-button';

function App() {
    return (
        <div className={styles.App}>
            <form>
                <Label htmlFor={'name'}>Name</Label>
                <Input id={'name'} name={'name'}></Input>
                <Label htmlFor={'email'}>Email</Label>
                <Input id={'email'} name={'email'} />
                <Label htmlFor={'message'}>Message</Label>
                <Input id={'message'} name={'message'} />
                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    );
}

export default App;
