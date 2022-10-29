import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/correlation.css';
import FileLoad from './fileLoad';
import Header from "./header";
import Axios from 'axios';
import ImagePlace from './imagePlace';

function Correlation() {

    // a local state to store the currently selected file.
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);
        try {
            let promise = new Promise((resolve, reject) => {
                Axios.post(`http://localhost:8080/correlation`,
                    formData,
                    { headers: { "Content-Type": "multipart/form-data"}, responseType: 'arraybuffer' }
                ).then
                    (response => {
                        resolve(response);
                        let base64ImageString: string = Buffer.from(response.data, 'binary').toString('base64');
                        let srcValue: string = "data:image/png;base64,"+base64ImageString;
                        setImage(srcValue);
                        return response;
                    });
            });
            let res: any=promise
                .then(
                    result => {
                        console.log(result);
                        return result;
                    },
                    error => {
                        alert(error);
                        return null
                    }
                );
            
        } catch (error) {
            console.log(error)
        }
        
    }

  const handleFileSelect = (event:any) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0], event.target.files[0].name);
  }

    let promise = new Promise((resolve, reject) => {
        Axios.get(`http://localhost:8080?name=axios`,  
        { headers: {
            "Content-type": "application/json; charset=UTF-8",
            
            "Accept" : "*/*"
          }}).then
        (response => {
            resolve(response);
        });
    });
    promise
    .then(
        result => {
        console.log(result)
        },
        error => {
            alert(error);
        }
    );
    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className = "template-section"> 
                    <div>
                        <h2>Корреляция</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                                <div className='template-title mb-1'>
                                    Параметры
                                </div>
                                <FileLoad onChange={handleFileSelect} onSend={handleSubmit}/>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image}/>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Correlation;