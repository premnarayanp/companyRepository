import '../styles/home.css';
import React, { useEffect, useRef, useState } from 'react';
import { CompanyForm, CompanyNavbar, CompanyRecordRow } from '../components/CommonComponents';
import { addCompanyList } from '../redux/action/companyActions';
import { useSelector, useDispatch } from 'react-redux';
import { allCompanyData } from '../api/index';
import { useToasts } from 'react-toast-notifications';

export default function Company(props) {
    const companyReducer = useSelector((state) => state.companyReducer);
    const dispatch = useDispatch();
    //console.log("companyReducer=====", companyReducer);
    const { companyList, isShowCompanyForm, isEditModeOn, currentCompanyData, } = companyReducer;
    const userRowRefs = useRef([])
    const { addToast } = useToasts();

    useEffect(() => {
        async function fetchData() {
            const response = await allCompanyData();
            if (response.success && response.data) {
                dispatch(addCompanyList(response.data));
            } else {
                addToast(response.message, {
                    appearance: 'error',
                });
            }
        }
        fetchData();
    }, [])

    return (
        <div className="Home">
            {
                isShowCompanyForm &&
                <CompanyForm
                    currentCompanyData={currentCompanyData}
                    isEditModeOn={isEditModeOn}
                />
            }

            <CompanyNavbar />

            <div className='home_main'>
                <div className='table-container'>
                    <table className="user_info_table">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Email Id</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody id="batchTableBody">
                            {
                                companyList.map((data, refIndex) =>
                                    <CompanyRecordRow
                                        userRowRefs={userRowRefs}
                                        index={refIndex}
                                        data={data}
                                    />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}