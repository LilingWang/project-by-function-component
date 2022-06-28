import react, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Table from "../components/table";
import { useDispatch, useSelector } from 'react-redux';
import { initUser, deleteUser, getUser } from "../actions";
import ReactPaginate from "react-paginate";
import "./style.css";

const PER_PAGE = 6;

const MainPage = () => {

    const [userList, setUserList] = useState([]);
    const dispatch = useDispatch();
    const pagination = useRef();
    const itemsPerpage = 6;
    const [userOffset, setUserOffset] = useState(0);
    const [currentUserlist, setCurrentUserlist] = useState(null);
    const [searchInput, setSearchInput] = useState();
    useEffect(() => {
        // initUser(dispatch)();

        const fetchData = async () => {
            const result = await axios("http://localhost:3002/users/getAll");
            setUserList(result.data);
           const user = result.data;
            const endOffset = userOffset + itemsPerpage;
            setCurrentUserlist(user.slice(userOffset, endOffset));

           // console.log(result.data);
        };
        fetchData();
    }, [userOffset]);

    useEffect(() => {
        initUser(dispatch)();
    });
    
    const setPage = (event) => {
        const newOffset = (event.selected * itemsPerpage) % userList.length;
        setUserOffset(newOffset);

    }

    const handleDeleteBtn = (index) => () => {
        // console.log(index)
        window.alert("You are successful Delete user!");
        deleteUser(dispatch)(index);
        window.location.href = "/"
    };

    const handleEditBtn = (index) => () => {
        // getUser(dispatch)(index);
        window.location.href = "/EditUserPage/" + index;
    };

    const searchInputBtn = (e) =>{
        setSearchInput(e.target.value);
        let searchByName = [];
        userList.forEach((item) => {
            if(item.FirstName.includes(searchInput)) {
                searchByName.push(item)
            }
        }
        );
        setCurrentUserlist(searchByName);
    }

    return (
        <div>
        <div>
            <label>Search:  </label>
            <input 
            type="text" 
            placeholder="Search" 
            value={searchInput} 
            onChange={searchInputBtn}
            
            >
           </input>
        </div>
            <table>
                <thead>
                    <tr>
                        <td>Edit</td>
                        <td>Delete</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Sex</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>


                    <Table
                        userList={currentUserlist}
                        handleDeleteBtn={handleDeleteBtn}
                        handleEditBtn={handleEditBtn} />

                </tbody>
            </table>
            <ReactPaginate
                ref={pagination}
                pageCount={Math.ceil(userList.length / itemsPerpage)}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                onPageChange={setPage}
                containerClassName="pagination"
                activeClassName="pagination__link--active a"
                pageLinkClassName="pagination__link"
                breakLinkClassName="pagination__link"
                nextLinkClassName="pagination__link"
                previousLinkClassName="pagination__link"
                pageClassName="page-item"
                breakClassName="pagination__link--disabled a"
                nextClassName="page-item"
                previousClassName="page-item"
                previousLabel={<>&laquo;previous</>}
                nextLabel={<>&raquo;next</>}
            />

            <button onClick={() => { window.location.href = "/createNewUser" }}>Create New User</button>


        </div>
    )
}

export default MainPage;