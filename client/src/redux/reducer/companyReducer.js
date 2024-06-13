import {
    ADD_COMPANY_LIST,
    ADD_COMPANY_TO_LIST,
    DELETE_COMPANY_TO_LIST,
    UPDATE_COMPANY_TO_LIST,
    SHOW_COMPANY_FORM,
    ADD_CURRENT_COMPANY_DATA

} from "../action/actionType"

const initialUserState = {
    companyList: [],
    isShowCompanyForm: false,
    isEditModeOn: false,
    currentCompanyData: null
};

export default function userReducer(state = initialUserState, action) {

    switch (action.type) {
        case ADD_COMPANY_LIST:
            return {
                ...state,
                companyList: action.userList
            }

        case ADD_COMPANY_TO_LIST:
            return {
                ...state,
                companyList: [...state.companyList, action.user]
            }

        //i delete user from userList that  _id match 
        case DELETE_COMPANY_TO_LIST:
            const filteredArray = state.companyList.filter(
                user => user._id !== action.user._id
            );

            return {
                ...state,
                companyList: filteredArray
            }

        case SHOW_COMPANY_FORM:
            return {
                ...state,
                isShowCompanyForm: action.isShowUserForm,
                isEditModeOn: action.isEditModeOn,
            }


        case UPDATE_COMPANY_TO_LIST:
            const newUserList = state.companyList.map(user => {
                if (user._id === action.user._id) {
                    return action.user;
                }
                return user;
            });

            return {
                ...state,
                companyList: [...newUserList],
            }

        case ADD_CURRENT_COMPANY_DATA:
            return {
                ...state,
                currentCompanyData: action.currentUserData
            }


        default:
            return state;
    }

}