import '../../styles/companyNavbar.css';
import { showCompanyForm } from '../../redux/action/companyActions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CompanyNavbar(props) {

  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleCreateUser = () => {
    dispatch(showCompanyForm(true, false));
  }

  const handleSearchClick = async () => {
    //const response= await searchUser(searchText);
    // if (response.success && response.data) {
    //   dispatch(addUserList(response.data.userList));
    //   setSearchText("")
    //   addToast(`$(response.data.userList.length+" User records found")`, {
    //     appearance: 'success',
    //   });

    // } else {
    //   addToast(response.message, {
    //     appearance: 'error',
    //   });
    // }
  }

  return (
    <div className='HomeNavbar'>
      {/* <div className='title_bar'>
        <span>Information System</span>
      </div> */}

      <div className='home_nav'>
        <div className='search_bar'>
          <input type="search" id="search-input" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button className="search_btn" onClick={handleSearchClick}><img src={require('../../assets/serch_icon 3.png')} alt='si' /></button>
        </div>

        <button className='create_user_btn' onClick={handleCreateUser}>
          <div className='user-icon-container'><img src={require('../../assets/avtar.png')} alt='ui' /></div>
          <span>Add Company </span>
        </button>
      </div>

    </div>
  )
}