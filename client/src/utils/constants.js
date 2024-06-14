export const API_ROOT = 'http://localhost:8362';

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  allCompanyData: () => `${API_ROOT}/company/getall-company`,
  addCompany: () => `${API_ROOT}/company/add-company`,
  updateCompany: (id) => `${API_ROOT}/company/update-company/${id}`,
  deleteCompany: (id) => `${API_ROOT}/company/delete-company/${id}`,
  searchCompany: () => `${API_ROOT}/company/search`,
  addExcelData: () => `${API_ROOT}/company/add-excel-data`,
};

export const LOCAL_STORAGE_TOKEN_KEY = '_COMPANY_REPOSITORY_JS_';
