import '../../styles/companyNavbar.css';
import { showCompanyForm } from '../../redux/action/companyActions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CompanyNavbar(props) {

  const [filInput, setFilInput] = useState("");
  const dispatch = useDispatch();

  const handleCreateUser = () => {
    dispatch(showCompanyForm(true, false));
  }

  return (
    <div className='HomeNavbar'>

      <div className='home_nav'>

        <label className="search_bar" id="search_label" htmlFor='file_input'>
          <u>Select Excel File:Click to Browse</u>
        </label>

        <input type="file" id="file_input" placeholder="Choose excel File" value={filInput} onChange={(e) => setFilInput(e.target.value)} />

        <button className='create_user_btn' onClick={handleCreateUser}>
          <div className='user-icon-container'><img src={require('../../assets/avtar.png')} alt='ui' /></div>
          <span>Add Company </span>
        </button>
      </div>

    </div >
  )
}