import AddButton from '@/components/addButton'
import { Button, Box, TextField } from '@mui/material'
import styles from "../../styles/index.module.css"
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import { CustomerSchema } from '../../schemas/customer'



export default function AddCustomerForm(prop){

   

    
    const initialValue = {
        username: "",
        customerName: "",
        email: "",
        image: "",
    }
    const { setFieldValue, errors, touched, values, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValue,
        validationSchema: CustomerSchema,
        onSubmit: (values,action) => {
            let bodyData = {
            username :  values.username,
            customer_name: values.customerName,
            email: values.email,
            file: values.image}
            // console.log("values data ", bodyData)
           
            
            action.resetForm()
        }
    })
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formStyle}>
                <TextField
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username" fullWidth label="Username" sx={{ marginTop: "10px" }} />
                <span style={{ textAlign: "center", fontSize: "12px", display: "block", color: "red" }}>
                    {errors.username && touched.username ? errors.username : ""}
                </span>
                <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.customerName}
                    name="customerName" fullWidth label="Customer Name" sx={{ marginTop: "10px" }} />
                <span style={{ textAlign: "center", fontSize: "12px", display: "block", color: "red" }}>
                    {errors.customerName && touched.customerName ? errors.customerName : ""}
                </span>
                <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email" fullWidth label="Email" sx={{ marginTop: "10px" }} />
                <span style={{ textAlign: "center", fontSize: "12px", display: "block", color: "red" }}>
                    {errors.email && touched.email ? errors.email : ""}
                </span>
                <Box>


                    <Button className={styles.textColor} component="label" sx={{ marginTop: "10px" }}>
                        Upload Photo
                        <VisuallyHiddenInput
                            onChange={(e) => { setFieldValue("image", e.target.files[0]) }}
                            type="file" name="image" />
                    </Button>
                    <span style={{ textAlign: "center", fontSize: "12px", display: "block", }}>
                        {values.image ? values.image.name : ""}
                    </span>

                    <span style={{ textAlign: "center", fontSize: "12px", display: "block", color: "red" }}>
                        {errors.image && touched.image ? errors.image : ""}
                    </span>
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                    <AddButton name="submit" text={prop.buttonValue} fullWidth={true} />
                </Box>
            </form>

        </>
    )
}