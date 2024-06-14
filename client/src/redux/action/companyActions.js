import {
    ADD_COMPANY_LIST,
    ADD_COMPANY_TO_LIST,
    DELETE_COMPANY_TO_LIST,
    UPDATE_COMPANY_TO_LIST,
    SHOW_COMPANY_FORM,
    ADD_CURRENT_COMPANY_DATA,
    ADD_EXCEL_DATA_TO_COMPANY_LIST,

} from "./actionType"


//action creator for  User file 
export function addCompanyList(userList) {
    return {
        type: ADD_COMPANY_LIST,
        userList
    }
}

export function addCompanyToList(user) {
    return {
        type: ADD_COMPANY_TO_LIST,
        user
    }
}

export function deleteCompanyToList(user) {
    return {
        type: DELETE_COMPANY_TO_LIST,
        user
    }
}

export function updateCompanyToList(user) {
    return {
        type: UPDATE_COMPANY_TO_LIST,
        user
    }
}

export function showCompanyForm(isShowUserForm, isEditModeOn) {

    return {
        type: SHOW_COMPANY_FORM,
        isShowUserForm: isShowUserForm,
        isEditModeOn: isEditModeOn,
    }
}

export function addCurrentCompanyData(currentUserData) {
    // console.log("addCurrentCompanyData", currentUserData);
    return {
        type: ADD_CURRENT_COMPANY_DATA,
        currentUserData: currentUserData
    }
}

export function addExcelDataToCompanyList(data) {
    return {
        type: ADD_EXCEL_DATA_TO_COMPANY_LIST,
        excelData: data,
    }
}



