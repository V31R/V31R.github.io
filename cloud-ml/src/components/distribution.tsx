import React from 'react';
import '../css/operationTemplateComponent.css';
import '../css/distribution.css';
import MethodPanel from './methodPanel';
import Header from "./header";
import { getImage } from '../apis/imageApi';
import ImagePlace from './imagePlace';

interface DistributionData {
    image_name: string,
    names: string[]
}

function Distribution() {
    // eslint-disable-next-line
    const [distributionData, setDistributionData] = React.useState<DistributionData>({ image_name: "", names: [] });
    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);
    const [image, setImage] = React.useState<null | any>(null);
    React.useEffect(() => {
        if (distributionData!.image_name === "") {
                return;
        }
        console.log(distributionData)
        getImage( setImage, distributionData!.image_name);
    },
        [distributionData]
    );
    const handleSubmit=(event: any) =>{
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
                        <h2>Распределение</h2>
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

export default Distribution;