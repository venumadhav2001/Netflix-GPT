export const checkValidData = (email, password, name)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const nameRegex = /^[a-zA-Z\s'-]+$/.test(name)

    if(!emailRegex) return "Email is not valid"
    if(!passwordRegex) return "Password is not valid"
    if(!nameRegex) return "This field Allows capital, small letters"

    return null

}