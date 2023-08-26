import * as yup from "yup";

const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

// Contains at least one lowercase letter.
// Contains at least one uppercase letter.
// Contains at least one digit.
// Contains at least one special character among !, @, #, $, %, ^, &, *.
// Has a minimum length of 8 characters.

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("This is required"),
	password: yup
		.string()
		.min(8, "Password is too short - should be 8 chars minimum.")
		.matches(passwordRegex, { message: "Please create a stronger password" })
		.required("No password provided."),

});

export const signupSchema = yup.object().shape({
	firstName: yup.string().required("Please enter your first name"),
	lastName: yup.string().required("Please enter your last name"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("This is required"),
	password: yup
		.string()
		.min(8, "Password is too short - should be 8 chars minimum.")
		.matches(passwordRegex, { message: "Please create a stronger password" })
		.required("No password provided."),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords do not match")
		.required("Required"),
});
