import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/clusterization.css';
import MethodPanel from './methodPanel';
import Header from "./header";
import CheckBox, {CheckBoxData} from './checkBox';
import ImagePlace from './imagePlace';
import NumberInput from './numberInput';
import InputData from '../inputData';
import Axios, {AxiosResponse } from 'axios';

interface ClusterizationData{
    image_name: string,
    clusters_centers: any,
    clusters_labels: number[]
}

function Clusterization() {
    const clusterizationPath: string = 'http://localhost:8080/clusterization';
    const imagePath: string = 'http://localhost:8080/images';
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [withCenters, setWithCenters] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<null | any>(null);
    const [clustersNumber, setClustersNumber] = React.useState<number>(1);
    // eslint-disable-next-line
    const [clusterizationData, setClusterizationData] = React.useState<ClusterizationData>({image_name: "", clusters_centers: [], clusters_labels:[]});

    React.useEffect(() => {
        try {
            if (clusterizationData!.image_name === "") {
                return;
            }
            console.log(clusterizationData)
            let promise = new Promise((resolve, reject) => {
                Axios.get(`${imagePath}/${clusterizationData!.image_name}`,
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
        [clusterizationData]
    );

    const handleSubmit=(event: any) =>{
        event.preventDefault()
        if (selectedFile == null) {
            alert('Загрузите файл формата *.csv');
            return;
        }
        if(clustersNumber <= 0){
            alert('Количество кластеров должно быть >=1');
            return;
        }

        const formData = new FormData();
        formData.append(`${selectedFile.name}`, selectedFile);

        try {
            let promise = new Promise((resolve, reject) => {
                Axios.post(clusterizationPath,
                    formData,
                    { params: { clusters_num: clustersNumber, clusters_centers:withCenters }, headers: { "Content-Type": "multipart/form-data" }, responseType: "json" }
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
                        let data: ClusterizationData = (result as AxiosResponse<any, any>).data;
                        setClusterizationData(clustData => ({ ...clustData, ...data }));
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

    const handleCenterCheckBox = (event: any) => {
        event.preventDefault()
        setWithCenters(wc=>!wc);
    }

    const handleClusterNumber = (event: any) => {
        setClustersNumber(event.target.value);
    }

    const inputClusterNumber: InputData = {
        mainLabel: 'Введите количество кластеров',
        fieldName: 'clusters_num',
        defaultValue: '1',
        min: "1",
        onChangeHandle: handleClusterNumber
    };

    let clustersCenterCheckBox: CheckBoxData = {
        name:"clusters_center", 
        text:"Рисовать центры кластеров", 
        onChangeHandle:handleCenterCheckBox
    };
    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Кластеризация</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
                            <NumberInput {...inputClusterNumber} />
                            <CheckBox {...clustersCenterCheckBox} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Результат
                            </div>
                            <ImagePlace image={image} />
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Clusterization;