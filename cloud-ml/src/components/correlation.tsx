import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/correlation.css';
import MethodPanel from './methodPanel';
import Header from "./header";
import Axios, { AxiosResponse } from 'axios';
import ImagePlace from './imagePlace';
import Matrix from './matrix';
import StringInput from './stringInput';
import InputData from '../inputData';

interface CorrelationData {
    image_name: string,
    names: string[],
    values: number[]
}

function Correlation() {
    const correlationPath: string = 'http://localhost:8080/correlation';
    const imagePath: string = 'http://localhost:8080/images';
    const [correlationData, setCorrelationData] = React.useState<CorrelationData>({ image_name: "", names: [], values: [] });
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    const [colorMap, setColorMap] = React.useState<string | null>(null);
    React.useEffect(() => {
        try {
            if (correlationData!.image_name === "") {
                return;
            }
            console.log(correlationData)
            let promise = new Promise((resolve, reject) => {
                Axios.get(`${imagePath}/${correlationData!.image_name}`,
                    { responseType: 'arraybuffer' }
                ).then
                    (response => {
                        resolve(response);
                    })
                    .catch((e: Error) => {
                        reject(e);
                    });;
            });
            promise
                .then(
                    result => {
                        let base64ImageString: string = Buffer.from((result as AxiosResponse<any, any>).data, 'binary').toString('base64');
                        let srcValue: string = "data:image/png;base64," + base64ImageString;
                        setImage(srcValue);
                    },
                    error => {
                        alert(`${error.response.status} ${error.response.data}.`);
                    }
                );

        } catch (error) {
            console.log(error)
        }
    },
        [correlationData]
    );

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);

        try {
            let promise = new Promise((resolve, reject) => {
                Axios.post(correlationPath,
                    formData,
                    { params: { colormap: colorMap }, headers: { "Content-Type": "multipart/form-data" }, responseType: "json" }
                ).then
                    (response => {
                        resolve(response);
                    })
                    .catch((e: Error) => {
                        reject(e);
                    });
            });
            promise
                .then(
                    result => {
                        let data: CorrelationData = (result as AxiosResponse<any, any>).data;
                        setCorrelationData(corrData => ({ ...corrData, ...data }));
                    },
                    error => {
                        alert(`${error.response.status} ${error.response.data}.`);
                    }
                );

        } catch (error) {
            console.log(error)
        }

    }

    const handleFileSelect = (event: any) => {
        if (event.target.files[0] !== undefined) {
            setSelectedFile(event.target.files[0]);
            console.log(event.target.files[0], event.target.files[0].name);
        } else {
            setSelectedFile(null);
        }
    }

    const handleColorMap = (event: any) => {
        setColorMap(event.target.value)
    }

    const inputColormap: InputData = {
        mainLabel: 'Введите название colormap',
        fieldName: 'color_map',
        defaultValue: '',
        tipLabel: 'Допустимые colormap',
        tipLabelLink: 'https://matplotlib.org/stable/tutorials/colors/colormaps.html',
        onChangeHandle: handleColorMap
    };

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
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
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                            <StringInput {...inputColormap} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image} />
                            <Matrix names={correlationData.names} values={correlationData.values} />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Correlation;