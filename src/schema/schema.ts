import * as yup from "yup";

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .matches(emailRegExp, "Email is not valid")
        .required("Email is required"),
    phone: yup.string().required("Message is required"),
    city: yup.string().required("City is required"),
    message: yup.string().required("Message is required"),
});