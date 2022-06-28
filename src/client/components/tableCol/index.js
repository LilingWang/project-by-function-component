const TableCol = ({
    userData, handleDeleteBtn, handleEditBtn
}) => {

    return (
        <tr>
            <td onClick={handleEditBtn}><button>Edit</button></td>
            <td onClick={handleDeleteBtn}><button>Delete</button></td>
            <td>{userData.FistName}</td>
            <td>{userData.LastName}</td>
            <td>{userData.Sex}</td>
            <td>{userData.Age}</td>
        </tr>
    )

}