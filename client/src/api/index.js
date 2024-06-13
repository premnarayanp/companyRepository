import { API_URLS, getFormBody, LOCAL_STORAGE_TOKEN_KEY } from '../utils';

//custom fetch methods for all api
const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = getFormBody(body);
  }

  try {
    const response = await fetch(url, config);
    console.log("url=", url, "config=", config)
    const data = await response.json();
    console.log("========data=======", data);
    if (data.success) {
      return {
        data: data.data,
        success: true,
        message: data.msg
      };
    }

    throw new Error(data.msg);
  } catch (error) {
    console.error('error');
    return {
      message: error.message,
      success: false,
    };
  }
};

//============API for User============================
export const login = (email, password) => {
  return customFetch(API_URLS.login(), {
    method: 'POST',
    body: { email, password },
  });
};

export const signUp = async (name, email, password, confirmPassword) => {
  return customFetch(API_URLS.signup(), {
    method: 'POST',
    body: { name, email, password, confirmPassword: confirmPassword },
  });
};

export const allCompanyData = async (id) => {
  return customFetch(API_URLS.allCompanyData(), {
    method: 'GET',
  });
};

export const addCompany = async (data) => {
  return customFetch(API_URLS.addCompany(), {
    method: 'POST',
    body: { ...data },
  });
};

export const updateCompany = async (data, id) => {
  return customFetch(API_URLS.updateCompany(id), {
    method: 'POST',
    body: { ...data },
  });
};

export const deleteCompany = async (id) => {
  return customFetch(API_URLS.deleteCompany(id), {
    method: 'DELETE',
  });
};

export const searchCompany = async (query) => {
  return customFetch(API_URLS.searchCompany(), {
    method: 'POST',
  });
};

export const addExcelData = async (file) => {
  return customFetch(API_URLS.addExcelData(), {
    method: 'POST',
  });
};


