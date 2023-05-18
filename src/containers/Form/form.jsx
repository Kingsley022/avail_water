import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Button from '../../components/button/button';
import './form.css';
const Form = () => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(16).required(),
    });

    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="formContainer">
            <div className="headers">
                <h3>Login</h3>
                <h3>Register</h3>
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Enter email" {...register('email')} autoFocus/>
                {errors.email !== null && <p>{errors.email?.message}</p>}
                <input type='password' placeholder="password" {...register('password')}/>
                {errors.password !== null && <p>{errors.password?.message}</p>}
                <p>Forgotten password?<span>Click here</span></p>
                <Button  placeholder={'Login'} btn2={"submit"}/>
            </form>
        </div>
    );
}
 
export default Form;