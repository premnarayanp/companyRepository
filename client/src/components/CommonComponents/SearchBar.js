import '../../styles/companyNavbar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCompany } from '../../api/index'
import { addCompanyList } from '../../redux/action/companyActions';
export default function SearchBar(props) {

    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    const handleSearchClick = async () => {
        //console.log("searchText", searchText);
        const response = await searchCompany({ searchText });

        if (response.success && response.data) {
            dispatch(addCompanyList(response.data));
        }
    }

    return (
        <div className='HomeNavbar'>

            <div className='home_nav search_nav'>
                <div className='search_bar'>
                    <input type="search" id="search-input" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search_btn" onClick={handleSearchClick}><img src={require('../../assets/serch_icon 3.png')} alt='si' /></button>
                </div>
            </div>

        </div>
    )
}