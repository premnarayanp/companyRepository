import { useEffect, useRef, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from '../../styles/companyForm.module.css';
import { showCompanyForm, addCompanyToList, updateCompanyToList } from '../../redux/action/companyActions'
import { useDispatch } from 'react-redux';
import { addCompany, updateCompany } from '../../api/index';

const UserForm = (props) => {
  // const [userId, setUserId] = useState('');
  const [companyName, setCompanyName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [message, setMessage] = useState("");
  const [creating, setCreating] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { addToast } = useToasts();

  const dispatch = useDispatch();
  const { currentCompanyData, isEditModeOn } = props
  //console.log("======currentCompanyData======", currentCompanyData);

  useEffect(() => {

    async function setDataForEdit() {
      //setUserId(currentCompanyData._id);
      setEmailId(currentCompanyData.emailId);
      setCompanyName(currentCompanyData.companyName)
      setMessage(currentCompanyData.message);
    }

    if (props.isEditModeOn) {
      setDataForEdit();
    }
  }, []);

  const handleCloseUserForm = () => {
    dispatch(showCompanyForm(false));
  }

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreating(true);

    if (!companyName || !message || !emailId) {
      setCreating(false);
      return addToast('Please Enter All Field', {
        appearance: 'error',
      });
    }

    const response = await addCompany({ companyName, emailId, message });
    if (response.success && response.data) {

      addToast(response.message, {
        appearance: 'success',
      });

      dispatch(addCompanyToList({ companyName: companyName, message: message, emailId: emailId, }));
      handleCloseUserForm();
      setCreating(false);

    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }

  };


  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setUpdating(true);

    if (!currentCompanyData._id || !companyName || !message || !emailId) {
      setUpdating(false);
      return addToast('Please Enter All Field', {
        appearance: 'error',
      });
    }

    const response = await updateCompany({ companyName, emailId, message }, currentCompanyData._id);
    if (response.success && response.data) {

      addToast('User successfully updated', {
        appearance: 'success',
      });

      dispatch(updateCompanyToList(response.data));
      setUpdating(false);
      handleCloseUserForm();

    } else {
      addToast(response.message, {
        appearance: 'error',
      });
    }
  };



  return (
    <div className={styles.UserForm}>
      <form className={styles.userForm} onSubmit={isEditModeOn ? handleUpdateUser : handleCreateUser}>
        <button className={styles.closeUserFormBtn} onClick={handleCloseUserForm}>
          <img src={require('../../assets/crossbtn.png')} alt='cut' />
        </button>
        <span className={styles.userHeader}>Company Form</span>

        <div className={styles.field}>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <input
            type="email"
            placeholder="EmailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </div>


        <div className={styles.field}>
          <input
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>


        <div className={styles.field}>
          {
            isEditModeOn ?
              <button disabled={updating}>{updating ? 'Updating...' : 'Update'}</button>
              :
              <button disabled={creating}>{creating ? 'Creating...' : 'Create'}</button>
          }
        </div>
      </form>
    </div>
  );
};

export default UserForm;
