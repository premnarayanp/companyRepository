// server/controllers/company_controller.js
import Company from '../models/company.js';
import xlsx from 'xlsx';
import messageMailer from "../mailers/messageMailer.js"

const companyController = {
    addCompany: async (req, res) => {
        try {
            const { companyName, emailId, message } = req.body;
            const newCompany = new Company({ companyName, emailId, message });
            await newCompany.save();

            //Mailer code----------------------------------
            let result = await messageMailer(req.body);
            let mailTo = "";
            //console.log("=======result===============", result);
            if (result.success) {
                mailTo = " Data added & successfully send Mail to " + result.info.accepted[0];
                //mailTo = "Mail send  successfully";
            } else {
                mailTo = "unable to send Mail,Please try again";
            }

            res.status(201).json({ success: true, msg: mailTo, data: newCompany });
        } catch (error) {
            console.log("=======error===============", error);
            res.status(500).json({ success: false, msg: error.message });
        }
    },

    getAllCompany: async (req, res) => {
        try {
            const companies = await Company.find();
            //res.status(200).json(companies);
            res.status(200).json({ success: true, msg: "success", data: companies });
        } catch (error) {
            res.status(500).json({ success: false, msg: error.message });
        }
    },

    deleteCompany: async (req, res) => {
        try {
            const { id } = req.params;
            await Company.findByIdAndDelete(id);
            // res.status(200).json({ message: 'Company deleted successfully' });
            res.status(200).json({ success: true, msg: "Company deleted successfully", data: "" });
        } catch (error) {
            res.status(500).json({ success: false, msg: error.message });
        }
    },

    updateCompany: async (req, res) => {
        try {
            const { id } = req.params;
            const updates = req.body;
            const updatedCompany = await Company.findByIdAndUpdate(id, updates, { new: true });
            //res.status(200).json(updatedCompany);
            res.status(200).json({ success: true, msg: "Company updated successfully", data: updatedCompany });
        } catch (error) {
            res.status(500).json({ success: false, msg: error.message });
        }
    },

    searchCompany: async (req, res) => {
        try {
            const { searchText } = req.body;
            const companies = await Company.find({
                // $text: { $search: searchText }
                companyName: searchText
            });
            // res.status(200).json(companies);
            res.status(200).json({ success: true, msg: "Company found successfully", data: companies });
        } catch (error) {
            res.status(500).json({ success: false, msg: error.message });
        }
    },

    addExcelData: async (req, res) => {
        // console.log("=======req.file====", req.file);
        try {
            const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = xlsx.utils.sheet_to_json(worksheet);

            console.log("=======data====", data);
            const companies = data.map((item) => ({
                companyName: String(item.companyName),
                emailId: String(item.emailId),
                message: String(item.message),
            }));

            console.log("=======companies====", companies);

            const company = await Company.insertMany(companies);
            //console.log("=======company====", company);
            res.status(200).json({ success: true, msg: "Companies added successfully", data: company });
        } catch (error) {
            res.status(500).json({ success: false, msg: error.message });
        }
    }
};

export default companyController;