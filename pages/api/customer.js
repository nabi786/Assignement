import dbConnect from '@/lib/dbConnect'
import { customer } from "@/models/Customers"
import upload from '@/midleware/upload';


// midlewear
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export const config = {
    api: {
        bodyParser: false,
    },
};



// customer data API for all methods
const customerData = async (req, res) => {
    try {
        await dbConnect()
        if (req.method == "POST") {


            await runMiddleware(req, res, upload.single('file'));

            // Now you can access req.file and req.body.
            const { username, email } = req.body;
            const newCustomer = new customer({
                username: req.body.username,
                customer_name: req.body.customer_name,
                email: req.body.email,
                image: req.file.filename,
            })


            // console.log(req.file)
            await newCustomer.save()


            res.status(200).json({ success: true, msg: "user created successfully" });
            // Perform your logic here, such as saving the file info to a database.

        } else if (req.method == "GET") {

            // console.log("query are ", req.query)
            let allCustomers = []
            if (req.query.sort == "username") {
                allCustomers = await customer.find({}).sort({ username: 1 }).exec();
            } else if (req.query.sort == "email") {
                allCustomers = await customer.find({}).sort({ email: 1 }).exec();
            } else if (req.query.sort == "customer") {
                allCustomers = await customer.find({}).sort({ customer_name: 1 }).exec();
            } else {
                allCustomers = await customer.find()
            }
            res.status(200).json({ success: true, data: allCustomers });
        } else if (req.method == "DELETE") {


            await customer.findOneAndDelete({ _id: req.query.id })
            // console.log("query are ", req.query)
            res.status(200).json({ success: true, data: "customer deleted successfully" });
        } else if (req.method == "PATCH") {

            if (!req.body.id) {

                res.status(404).json({ success: falses, msg: "document id required" });
            } else {

                let currentCustomer = await customer.findOne({ _id: req.body.id })
                if (currentCustomer) {
                    await runMiddleware(req, res, upload.single('file'));

                    await customer.findOneAndUpdate({ _id: req.body.id }, {
                        username: req.body.username,
                        customer_name: req.body.customer_name,
                        email: req.body.email,
                        image: req.file ? req.file.filename : currentCustomer.image,
                    })
                    res.status(200).json({ success: true, msg: "document updated successfully" });
                }
            }
        }
    } catch (error) {
        console.log("err ", error)
        res.status(500).json({ sucess: false, error: error.message });
    }
};

export default customerData;