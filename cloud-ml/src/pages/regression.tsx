import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/regression.css';
import MethodPanel from '../components/methodPanel';
import Header from "../components/header";
import { getImage } from '../apis/imageApi';
import ImagePlace from '../components/imagePlace';

interface RegressionData {
    image_name: string,
    names: string[]
}

function Regression() {
    // eslint-disable-next-line
    const [regerssionData, setRegressionData] = React.useState<RegressionData>({ image_name: "", names: [] });
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    React.useEffect(() => {
        if (regerssionData!.image_name === "") {
            return;
        }
        console.log(regerssionData)
        getImage(setImage, regerssionData!.image_name);
    },
        [regerssionData]
    );
    const handleSubmit = (event: any) => {
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

    return (
        <React.Fragment>
            <Header />
            <main className="container">
                <div className="template-section">
                    <div>
                        <h2>Регрессия</h2>
                    </div>
                </div>
                <section className="functions-list row mt-2 mb-3">
                    <div className="col-md-12 col-lg-6 mt-1">
                        <div className="function">
                            <div className='template-title mb-1'>
                                Параметры
                            </div>
                            <MethodPanel onChange={handleFileSelect} onSend={handleSubmit} />
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

export default Regression;