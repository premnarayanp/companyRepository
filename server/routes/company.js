// server/routes/company.js
import express from 'express';
import passport from 'passport';
import companyController from '../controllers/company_controller.js';
//import upload from '../middleware/upload';

const router = express.Router();

router.post('/add-company', passport.authenticate('jwt', { session: false }), companyController.addCompany);
router.get('/getall-company', passport.authenticate('jwt', { session: false }), companyController.getAllCompany);
router.delete('/delete-company/:id', passport.authenticate('jwt', { session: false }), companyController.deleteCompany);
router.post('/update-company/:id', passport.authenticate('jwt', { session: false }), companyController.updateCompany);
router.post('/search', passport.authenticate('jwt', { session: false }), companyController.searchCompany);
//router.post('/add-excel-data', passport.authenticate('jwt', { session: false }), upload.single('file'), companyController.addExcelData);

export default router;