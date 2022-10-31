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
    image_name: string
}

function Clusterization() {
    const clusterizationPath: string = 'http://localhost:8080/clusterization';
    const imagePath: string = 'http://localhost:8080/images';
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [withCenters, setWithCenters] = React.useState<boolean>(false);
    const [image, setImage] = React.useState<null | any>(null);
    const [clustersNumber, setClustersNumber] = React.useState<number>(1);
    // eslint-disable-next-line
    const [clusterizationData, setClusterizationData] = React.useState<ClusterizationData>({image_name: ""});

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
        if(clustersNumber <= 0){
            alert('Количество кластеров должно быть >=1');
            return;
        }
        console.log(clusterizationPath)
        console.log(withCenters)
        console.log(selectedFile)
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
        fieldName: 'cluster_num',
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