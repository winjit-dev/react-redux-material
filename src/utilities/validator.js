

const required = value => value && value.trim() !== "" ? undefined : `Required`
const requiredCheckbox = value => value ? undefined : `Required`
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
const minimum8 = value => value && !/^.{8,}$/.test(value) ? 'Password must be minimum 8 character' : undefined


export {
    required, requiredCheckbox, email, minimum8
} 