import { useSelector } from 'react-redux';
import TableCol from '../tableCol';

const Table = ({ userList, handleEditBtn, handleDeleteBtn }) => {
    
   // const testReducer = useSelector((state) => state);
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
            <TableCol 
                userData = {userData}
                index = {index}
                handleEditBtn={handleEditBtn}
                handleDeleteBtn={handleDeleteBtn}
            />
        )
    })
    return users;

}

export default Table;