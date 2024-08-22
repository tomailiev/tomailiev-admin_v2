import { object, string,ref, } from 'yup'


const userSchema = object({
    email: string().required().email(),
    password: string().required().min(6, 'Password must be at least 6 characters long')
});

const emailSchema = object({
    email: string().required().email(),
});

const newUserSchema = object({
    email: string().required().email(),
    password: string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    passwordConfirmation: string().oneOf([ref('password'), null], 'Passwords must match')
});



export {
    userSchema,
    newUserSchema,
    emailSchema,
};