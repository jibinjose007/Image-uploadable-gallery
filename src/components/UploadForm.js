import React, { useState } from 'react'

function UploadForm() {

    const [file, setFiles] = useState(null);
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) =>{
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)){
            setFiles(selected);
            setError('')
        }else
            {setFiles(null);
            setError('Please select (png or jpeg)');
        }
        
    }

    return (
        <div>
            <form>
                <input type="file" onChange={changeHandler} />
                <div className="output">
                    {error && <div className='error'>{error}</div>}
                </div>
            </form>
        </div>
    )
}

export default UploadForm
