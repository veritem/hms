const Customer = require('../models/Customer')

exports.getCustomers = async(req, res) => {
    try {
        const customers = await Customer.find()
        res.status(200).json({ data: customers })
    } catch (error) {
        res.status(403).json({ error })
    }
}
exports.getCustomer = () => {

}
exports.createCustomer = async(req, res) => {
    try {
        insertCustomer(req, res);
    } catch (err) {
        return res.send(Err)
    }
}
exports.updateCustomer = () => {

}
exports.deleteCustomer = () => {

}
let insertCustomer = (req, res) => {
    let customer = new Customer();
    customer.customer_names = req.body.customer_names;
    customer.customer_phone_number = req.body.customer_phone_number;
    customer.customer_location = req.body.customer_location;
    customer.customer_email = req.body.customer_email;
    customer.customer_password = req.body.customer_password;
    customer.customer_gender = req.body.customer_gender;
    customer.customer_national_id = req.body.customer_national_id;
    customer.save()
        .then(customerSaved => res.send(customerSaved).status(201))
        .catch(err => res.send(err).status(400))
}
let updateCustomer = (req, res) => {

}