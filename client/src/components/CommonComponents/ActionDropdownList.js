import '../../styles/actionDropdownList.css';
export default function ActionDropdownList(props) {

  return (
    <ul className='UserDropdownList'>
      <button className='closeDropDownBtn' onClick={props.handleCloseDropDownList}>
        <img src={require('../../assets/crossbtn.png')} alt='cut' />
      </button>

      <li>
        <span>Delete User</span>
        <button onClick={props.handleDeleteUserRecord}>Delete</button>
      </li>

      <li>
        <span>Edit User</span>
        <button onClick={props.handleEditUserRecord}>Edit</button>
      </li>

    </ul>
  )
}