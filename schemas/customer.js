import * as Yup from 'yup'



export const CustomerSchema = Yup.object({
    username : Yup.string().min(3).required("Please add username"),
    customerName : Yup.string().min(3).required("Please add Customer Name"),
    email : Yup.string().email().required("Please add Email address"),
    image : Yup.mixed().required('Please upload an image')
})  