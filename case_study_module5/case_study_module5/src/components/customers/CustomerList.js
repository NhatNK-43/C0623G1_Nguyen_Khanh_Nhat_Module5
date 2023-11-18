import {useEffect, useState} from "react";
import * as customerService from "../../service/customer_service";
import * as customerTypeService from "../../service/customer_type_service";
import {Link, NavLink} from "react-router-dom";
// import {ModalDeleteCustomer} from "./ModalDeleteCustomer";

export function CustomerList() {
    const [customers, setCustomers] = useState([]);
    const [idDelete, setIdDelete] = useState();
    const [nameDelete, setNameDelete] = useState();
    const [nameSearch, setNameSearch] = useState("");
    const [customerTypeId, setCustomerTypeId] = useState({id: 0, name: ""});
    const [customerTypes, setCustomerTypes] = useState([]);
    const [totalPage, setTotalPage] = useState([]);
    const [page, setPage] = useState(0);


    useEffect(() => {
        getAll();
        getAllCustomerType();
    }, [nameSearch, customerTypeId, page])


    const getAll = async () => {
        const res = await customerService.pageCustomer(page, nameSearch, customerTypeId.id);
        const totalP = totalPageArray(res.data.totalPages);
        console.log(totalP);
        setTotalPage(totalP);
        setCustomers(res.data.content);
    }
    console.log(page)
    console.log(totalPage)
    const getAllCustomerType = async () => {
        const data = await customerTypeService.getAllCustomerType();
        setCustomerTypes(data);
    }

    const totalPageArray = (totalP) => {
        const arr = [];
        for (let i = 0; i < totalP; i++) {
            arr[i] = i + 1;
        }
        return arr;
    }

    const handleSearchCustomerName = (event)=>{
        setNameSearch(event);
        setPage(0);
    }
    const handleSearchCustomerType = (event)=>{
        setCustomerTypeId(event);
        setPage(0);
    }

    const showModal = (id, name) => {
        setIdDelete(id);
        setNameDelete(name);
    }

    if (!customers || !customerTypes||!totalPage) {
        return null;
    }
    return (
        <>
            <div className="body">
                <div className="container shadow pb-1">
                    <div className="d-flex pt-3 mb-3 ">
                        <NavLink
                            to="/customers/create"
                            className="btn btn-sm btn-primary rounded-0"
                        >
                            Create customer
                        </NavLink>
                        <input className="form-control-sm rounded-0 border-1 w-25 ms-3" placeholder="Search name..."
                               name="nameSearch"
                               onChange={(event) => handleSearchCustomerName(event.target.value)}/>

                        <select
                            className="form-select-sm border-1 rounded-0"
                            aria-label="Default select example"
                            name="customerTypeId"
                            onChange={(event)=> handleSearchCustomerType(JSON.parse(event.target.value))}
                        >
                            <option value='{"id":0,"name":""}'>All customer type</option>
                            {
                                customerTypes.map(c => (
                                    <option
                                        key={c.id}
                                        value={JSON.stringify(c)}
                                    >{c.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div id="fix-tbody">
                        <table className="table table-hover border mb-0">
                            <thead className="table-primary">
                            <tr>
                                <th scope="col" className="">#</th>
                                <th scope="col" className="">Name</th>
                                <th scope="col" className="">Date of birth</th>
                                <th scope="col" className="">Gender</th>
                                <th scope="col" className="">Address</th>
                                <th scope="col" className="">Customer type</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                customers.length !== 0 ?
                                    customers.map((customer, index) => (
                                        <tr key={customer.id}>
                                            <td>{index + 1}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.dateOfBirth}</td>
                                            <td>{customer.gender ? "Nam" : "Nữ"}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.customerType.name}</td>
                                            <td className="text-center">
                                                <NavLink
                                                    to={`/customers/update/${customer.id}`}
                                                    className="btn btn-sm btn-outline-primary me-4 rounded-0">Update</NavLink>
                                                <button className="btn btn-sm btn-outline-danger rounded-0"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#staticBackdrop"
                                                        onClick={() => showModal(customer.id, customer.name)}
                                                >Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan="7" className="text-danger text-center">
                                            Not found customer
                                            {
                                                nameSearch !== "" && <span> named: <b>{nameSearch}</b></span>
                                            }
                                            {
                                                nameSearch !== "" && customerTypeId.id !== 0 && <span> and </span>
                                            }
                                            {
                                                customerTypeId.id !== 0 &&
                                                <span> type: <b>{customerTypeId.name}</b></span>
                                            }
                                        </td>
                                    </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end">
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page<=0?"disabled":""}`} aria-label="Previous" onClick={()=>setPage(0)}>
                                        <small aria-hidden="true">&lt;&lt;</small>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page<=0?"disabled":""}`} onClick={()=>setPage(page-1)}  aria-label="Previous">
                                        <span aria-hidden="true">&lt;</span>
                                    </button>
                                </li>
                                {
                                    totalPage.map((item,index) =>{
                                        return(
                                            <li className="page-item" key={index}>
                                                <button className={`page-link ${page===index?"active":""}`} id="page-number" onClick={()=>setPage(index)}>{index+1}</button>
                                            </li>
                                        )
                                    })
                                }

                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page+1>=totalPage[totalPage.length-1]||totalPage.length===0?"disabled":""}`} onClick={()=>setPage(page+1)} aria-label="Next">
                                        <small aria-hidden="true">&gt;</small>
                                    </button>
                                </li>
                                <li className="page-item">
                                    <button className={`page-link rounded-0 ${page+1>=totalPage[totalPage.length-1]||totalPage.length===0?"disabled":""}`}
                                            onClick={()=> setPage(totalPage[totalPage.length-1])} aria-label="Next">
                                        <small aria-hidden="true">&gt;&gt;</small>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/*<ModalDeleteCustomer*/}
            {/*    setCustomers={setCustomers}*/}
            {/*    idDelete={idDelete}*/}
            {/*    nameDelete={nameDelete}*/}
            {/*/>*/}
            <div>
                {/*<div>*/}
                {/*    <button className="btn btn-sm btn-success" onClick={handleClick}>*/}
                {/*        Alert*/}
                {/*    </button>*/}
                {/*    <SweetAlert2 {...swalProps}*/}
                {/*                 didOpen={() => {*/}
                {/*                     // run when swal is opened...*/}
                {/*                 }}*/}
                {/*                 didClose={() => {*/}
                {/*                     // run when swal is closed...*/}
                {/*                 }}*/}
                {/*                 onConfirm={result => {*/}
                {/*                     // run when clieked in confirm and promise is resolved...*/}
                {/*                 }}*/}
                {/*                 onError={error => {*/}
                {/*                     // run when promise rejected...*/}
                {/*                 }}*/}
                {/*                 onResolve={result => {*/}
                {/*                     // run when promise is resolved...*/}
                {/*                 }}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>

        </>
    )
}