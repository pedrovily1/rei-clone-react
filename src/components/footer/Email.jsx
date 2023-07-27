import './styles/Email.css';
import email from '../../assets/Email.svg'

const Email = () => {
    return (
        <div id='Email'>
            <h2>Sign up for OEI Emails</h2>
            <p>Co-op offers, events & cool new gear</p>
            <form>
                <label htmlFor='emailAddress'>Email</label>
                <input id='emailAddress' name='emailAddress' type='email' maxLength={70}></input>
                <img src={email} alt="Logo"></img>
                <button type='submit'>Sign me up!</button>
            </form>
        </div>
    )
}

export default Email;