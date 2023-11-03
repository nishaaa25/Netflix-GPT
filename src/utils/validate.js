const checkValidData = (email,password, name) => {
  
    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z\s.'-]{2,}$/.test(name);

    if(!isEmailValid) return "Please enter a valid email address."
    if(!isPasswordValid) return "Please enter a valid password."
    if(!isNameValid) return "Please enter a valid name."

    return null;
}

export default checkValidData
