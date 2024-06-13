export const API_ROOT = 'http://localhost:8362';

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  // allUser: (id) => `${API_ROOT}/users/all-users/${id}`,
  // getAllMessage: () => `${API_ROOT}/message/getall-message`,
  // addMessage: () => `${API_ROOT}/message/add-message`,
  // getUserIsOnline:(userId)=> `${API_ROOT}/users/is-online-user/${userId}`,
};

export const LOCAL_STORAGE_TOKEN_KEY = '_COMPANY_REPOSITORY_JS_';
