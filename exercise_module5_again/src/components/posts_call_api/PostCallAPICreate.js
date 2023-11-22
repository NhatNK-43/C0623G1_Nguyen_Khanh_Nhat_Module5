import {Formik, Form, Field, ErrorMessage} from "formik";

export function PostCallAPICreate(){
    return(
        <>
            <div className="d-flex justify-content-center align-items-center"></div>
            <div className="w-25">
                <label className="form-label mt-3" htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title"/>

                <label className="form-label mt-3" htmlFor="slug">Slug</label>
                <input type="text" className="form-control" id="slug" name="slug"/>

                <label className="form-label mt-3" htmlFor="categotry">Category</label>
                <input type="text" className="form-control" id="categotry" name="categotry"/>

                <label className="form-label mt-3" htmlFor="thumbnail_url">Thumbnail URL</label>
                <input type="text" className="form-control" id="thumbnail_url" name="thumbnail_url"/>
            </div>
        </>
    )
}