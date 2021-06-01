import React from 'react'

function UploadForm() {

    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        console.log(selected);
    }

    return (
        <div>
            <form>
                <input type="file" onChange={changeHandler} />
            </form>
        </div>
    )
}

export default UploadForm
