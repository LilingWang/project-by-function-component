import { MdOutlineModeEdit, MdRestoreFromTrash } from "react-icons/md";

const TableCol = ({
    userData, index, handleDeleteBtn, handleEditBtn
}) => {

    return (
        <tr key={index}>
            <td onClick={handleEditBtn(userData._id)}><button style={{ border: 'none', color: '#53c5eb', fontWeight: 'bold ' }}><MdOutlineModeEdit />Edit</button></td>
            <td onClick={handleDeleteBtn(userData._id)}><button style={{ border: 'none', color: '#53c5eb', fontWeight: 'bold ' }}><MdRestoreFromTrash />Delete</button></td>
            <td>{userData.FirstName}</td>
            <td>{userData.LastName}</td>
            <td>{userData.Sex}</td>
            <td>{userData.Age}</td>
        </tr>
    )

}

export default TableCol;

