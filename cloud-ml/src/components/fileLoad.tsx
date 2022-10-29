import React from 'react';
import '../css/fileLoad.css';
import '../css/button_default.css';

function FileLoad(props: any){
    console.log(props);
    return (
        <React.Fragment>
            <div className="load-send row mt-auto">
                <form className="file-form col-md-12 col-lg-8 mb-1">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Загрузите <b>.csv</b> файл с вашими данными</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={evt=>props.onChange(evt)}/>
                    </div>
                </form>
                <button type="submit" onClick={evt=>props.onSend(evt)}className="btn button-default btn-send col-md-12 col-lg-4 ms-auto me-auto">Выполнить</button>
            </div>
        </React.Fragment>
    );
}

export default FileLoad;