import { useSelector } from 'react-redux';

const Table = ({ userList, handleEditBtn, handleDeleteBtn }) => {
    
    const testReducer = useSelector((state) => state);
    console.log("testReducer....",testReducer);

    /* const users = userList && userList.map((user, index) =>{
         return (
             <tableCol
                 userData={user}
                 key={index}
                 handleEditBtn={handleEditBtn}
                 handleDeleteBtn={handleDeleteBtn}
             />
         )
     })
     return users;*/

    const users = userList && userList.map((userData, index) => {

        return (
            <tr key={index}>
                <td onClick={handleEditBtn(userData._id)}><button>Edit</button></td>
                <td onClick={handleDeleteBtn(userData._id)}><button>Delete</button></td>
                <td>{userData.FirstName}</td>
                <td>{userData.LastName}</td>
                <td>{userData.Sex}</td>
                <td>{userData.Age}</td>
            </tr>
        )
    })
    return users;

}

export default Table;