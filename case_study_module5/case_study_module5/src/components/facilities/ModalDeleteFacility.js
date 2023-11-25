import * as facilityService from "../../services/facilityService"
import {toast} from "react-toastify";
export function ModalDeleteFacility({idDelete, nameDelete, setFacilities}){
    const handleDelete = async () => {
        let status = await facilityService.deleteFacility(idDelete);
        if (status===200){
            toast.success(`Delete facility ${nameDelete} successfully!`);
            setFacilities(await facilityService.getAllFacility(""));
        } else {
            toast.error(`Delete contract ${nameDelete} failed!`);
        }
    }
    return(
        <>
            <div
                className="modal fade"
                id="deleteFacility"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-danger">
                            <h1 className="modal-title fs-5 fw-bold text-bg-danger" id="staticBackdropLabel">
                                Delete Facility
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete facility <span className="text-danger fw-bold">
                                {nameDelete}</span></p>
                            <p className="text-danger">
                                <span className="text-decoration-underline">Note:</span>
                                &nbsp; You won't be able to revert this!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary btn-sm rounded-0"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-danger btn-sm rounded-0" data-bs-dismiss="modal"
                                    onClick={handleDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}