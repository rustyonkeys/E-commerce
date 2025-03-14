function RegisterValidation(values) {
    let error = {};

    // Regular expression for email and password validation
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    // Validate name
    if (values.name === "") {
        error.name = "Name is required";
    } else {
        error.name = "";
    }

    // Validate email
    if (values.email === "") {
        error.email = "Email is required";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Please enter a valid email address";
    } else {
        error.email = "";
    }

    // Validate password
    if (values.password === "") {
        error.password = "Password is required";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least 8 characters, including one number, one uppercase letter, and one lowercase letter";
    } else {
        error.password = "";
    }

    return error;
}

export default RegisterValidation;
