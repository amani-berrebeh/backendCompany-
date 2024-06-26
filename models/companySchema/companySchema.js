const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    activity: String,
    service_date: String,
    statusCompany: String,
    account_name: String,
    sort_code: String,
    account_number: String,
    bank_name: String,
    login: String,
    password: String,
    logo_file: String,
    legal_file: String,
    api_token: String
});

module.exports = mongoose.model('Company', companySchema);