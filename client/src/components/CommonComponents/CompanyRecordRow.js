import { useState } from "react";
import { ActionDropdownList } from './index';
import { showCompanyForm, addCurrentCompanyData, deleteCompanyToList } from '../../redux/action/companyActions'
import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../api/index';
import { useToasts } from 'react-toast-notifications';

const UserRecordRow = (props) => {
  const { data, index, userRowRefs } = props;
  const [showDropDownList, setShowDropDownList] = useState(false);
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  const handleCloseDropDownList = () => {
    setShowDropDownList(false);
  }

  const handleDeleteUserRecord = async () => {

    const response = await deleteCompany(data._id);
    if (response.success) {

      addToast('User successfully Deleted', {
        appearance: 'success',
      });

      dispatch(deleteCompanyToList(data))
      setShowDropDownList(false);

    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }
  };


  const handleEditUserRecord = () => {
    dispatch(addCurrentCompanyData(data));
    dispatch(showCompanyForm(true, true));
    setShowDropDownList(false);
  }

  return (
    <tr ref={(node) => userRowRefs.current[index] = node}>
      <td>{data.companyName}</td>
      <td>{data.emailId}</td>
      <td>{data.message}</td>
      <td><button onClick={() => setShowDropDownList(true)}>Setting</button></td>
      {
        showDropDownList &&
        <ActionDropdownList
          handleCloseDropDownList={handleCloseDropDownList}
          handleDeleteUserRecord={handleDeleteUserRecord}
          handleEditUserRecord={handleEditUserRecord}
        />
      }
    </tr>
  )
}

export default UserRecordRow;