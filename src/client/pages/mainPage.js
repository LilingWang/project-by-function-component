import react, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Table from "../components/table";
import { useDispatch, useSelector } from 'react-redux';
import { initUser, deleteUser, getUser } from "../actions";
import ReactPaginate from "react-paginate";
import "./style.css";
import { MdOutlineImportExport, MdPersonAddAlt1 } from "react-icons/md";

import styled from '@emotion/styled';

const TableContainer = styled.div`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    font-size: calc(5px + 2vmin);
    td, th {
         border: 1px solid #dddddd;
         text-align: left;
         padding: 8px;
         border:none;
         width:130px
    }
    th button {
         border:none;
         background-color:white;
         font-family: arial, sans-serif;
         font-weight:bold;
         font-size: calc(5px + 2vmin);
    }
    tr:nth-child(even) {
         background-color: #dddddd;
    }

    tr th {
         fontWeight:70px;
    }

    tr {
         border-bottom:2px solid lightgray;
    }
`;

const MainPage = () => {

    const [userList, setUserList] = useState([]);
    const dispatch = useDispatch();
    const pagination = useRef();
    const itemsPerpage = 6;
    const [userOffset, setUserOffset] = useState(0);
    const [currentUserlist, setCurrentUserlist] = useState(null);
    const [searchInput, setSearchInput] = useState();
    const [sortDirection, setSortDirection] = useState(false);
    const [inputList, setInputList] = useState([]);

    useEffect(() => {
        // initUser(dispatch)();

        const fetchData = async () => {
            const result = await axios("http://localhost:3002/users/getAll");
            setUserList(result.data);
            const user = result.data;
            const endOffset = userOffset + itemsPerpage;
            setCurrentUserlist(user.slice(userOffset, endOffset));
            setInputList(currentUserlist);

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
        //window.alert("You are successful Delete user!");
        deleteUser(dispatch)(index);
        //window.location.href = "/"
    };

    const handleEditBtn = (index) => () => {
        // getUser(dispatch)(index);
        window.location.href = "/EditUserPage/" + index;
    };

    const searchInputBtn = (e) => {
        setSearchInput(e.target.value);
        let searchByName = [];
       // console.log(inputList,"test --99w48jer")
        userList.slice(userOffset, userOffset + itemsPerpage).forEach((item) => {
            if (item.FirstName.includes(searchInput)) {
                searchByName.push(item)
            }
        }
        );
        setCurrentUserlist(searchByName);
    }

    const handleSort = e => {
        const { name } = e.target;
        setSortDirection(!sortDirection);

        if (name === 'fn') {
            const sortList = userList.sort((f1, f2) => f1.FirstName.localeCompare(f2.FirstName)) ;
            setCurrentUserlist(sortList.slice(0, 6))

        } else if (name === 'ln') {
            const sortList = userList.sort((f1, f2) => f1.LastName.localeCompare(f2.LastName));
            setCurrentUserlist(sortList.slice(0, 6))
        } else if (name === 'age') {
            const sortList = userList.sort((a1, a2) => sortDirection ? a1.Age - a2.Age : a2.Age - a1.Age);
            setCurrentUserlist(sortList.slice(0, 6))
        };
    }

    return (
        <div>
            <h2 style={{ textAlign: 'left' }}>User List: </h2>
            <div style={{ textAlign: 'left' }}>

                <label className="searchDiv_label">Search:  </label>
                <input
                    className="searchDiv_input"
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={searchInputBtn}

                >
                </input>

            </div>
            <TableContainer>
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th><button name="fn" className="btn-default" onClick={handleSort}>First Name<MdOutlineImportExport /> </button></th>
                        <th><button name="ln" className="btn-default" onClick={handleSort}>Last Name<MdOutlineImportExport /> </button></th>
                        <th>Sex</th>
                        <th><button name="age" className="btn-default" onClick={handleSort}>Age<MdOutlineImportExport /> </button></th>
                    </tr>
                </thead>
                <tbody>

                    <Table
                        userList={currentUserlist}
                        handleDeleteBtn={handleDeleteBtn}
                        handleEditBtn={handleEditBtn} />

                </tbody>
            </TableContainer>
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
            <div className="btnContainer">
                <button onClick={() => { window.location.href = "/createNewUser" }}><MdPersonAddAlt1 />Create New User</button>

            </div>


        </div>
    )
}

export default MainPage;