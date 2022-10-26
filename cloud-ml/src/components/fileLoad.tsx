import React from 'react';
import '../css/fileLoad.css';

function FileLoad(){
    return (
        <React.Fragment>
            <section className="file-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Загрузите <b>.csv</b> файл с вашими данными</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form>
            </section>
        </React.Fragment>
    );
}

export default FileLoad;