import '../../styles/companyNavbar.css';
import { showCompanyForm } from '../../redux/action/companyActions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { addExcelDataToCompanyList } from '../../redux/action/companyActions';
import { addExcelData } from '../../api/axios';

export default function CompanyNavbar(props) {

  const [filInput, setFilInput] = useState(null);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleCreateUser = () => {
    dispatch(showCompanyForm(true, false));
  }


  const handleExcelSelect = (e) => {
    //console.log("e.target.files[0].type=", e.target.files[0].type);
    if (e.target.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setFilInput(e.target.files[0]);
    } else {
      setFilInput(null);
      addToast('Please select only xlsx file, You could not upload non-xlsx file', {
        appearance: 'error',
      });
    }
  }


  const handleFileUploadAndInsertData = async () => {
    const response = await addExcelData({ excelFile: filInput });
    if (response.success && response.data) {

      //console.log("response.data=", response.data);
      addToast('Excel Data added successfully', {
        appearance: 'success',
      });
      dispatch(addExcelDataToCompanyList(response.data));
      setFilInput(null);
    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }
  }



  return (
    <div className='HomeNavbar'>

      <div className='home_nav'>

        <div className='file_btn_container'>
          <label className="search_bar" id="search_label" htmlFor='file_input'>
            <u>Select Excel File:Click to Browse</u>
          </label>
          <input type="file" id="file_input" placeholder="Choose excel File" onChange={handleExcelSelect} />
          {
            filInput && <button className='create_user_btn upload_btn' onClick={handleFileUploadAndInsertData}>Upload & Add Data </button>
          }
        </div>

        <button className='create_user_btn' onClick={handleCreateUser}>
          <div className='user-icon-container'><img src={require('../../assets/avtar.png')} alt='ui' /></div>
          <span>Add Company </span>
        </button>
      </div>

    </div >
  )
}