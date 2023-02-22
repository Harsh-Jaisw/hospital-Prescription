export function isValidEmail(value)
{
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
}
export function isValidPassword(value){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/.test(value)
}
export function isValidName(value){
    return /^[a-z ,.'-]+$/i.test(value)
}