import axios from 'axios';
import { API_URLS, LOCAL_STORAGE_TOKEN_KEY } from '../utils';

const customFetch = async (url, { body, ...customConfig }) => {

    const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    const headers = {
        'content-type': 'multipart/form-data',
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

    const formData = new FormData();
    if (body) {
        formData.append("file", body.content.excelFile);
        config.data = formData
    }


    try {
        console.log("url=", url);
        console.log("config=", config);
        // const response = await axios(url,{
        //     data:formData,
        //     method:'POST',
        //     headers: headers
        // });

        const response = await axios(url, config);
        const data = await response.data;
        console.log("========response=======", response);
        if (config.responseType === 'arraybuffer') {
            return {
                data: data,
                success: true,
            };
        }

        if (data.success) {
            return {
                data: data.data,
                success: true,
                message: "Excel file data added"
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


//======================for pdf======================
export const addExcelData = (content) => {
    console.log("content=", content);
    return customFetch(API_URLS.addExcelData(), {
        method: 'POST',
        body: {
            content,
        },
    });
};

