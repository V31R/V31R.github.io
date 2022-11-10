import Axios, { AxiosError } from 'axios';

const imageBasePath: string = 'http://localhost:8080/images';

export async function getImage(imageName: string, user: string | null) {

    return Axios.get(`${imageBasePath}/${imageName}`,
        {
            params: { user: user },
            responseType: 'arraybuffer'
        }
    ).then
        (response => {
            let base64ImageString: string = Buffer.from(response.data, 'binary').toString('base64');
            return "data:image/png;base64," + base64ImageString;
        })
        .catch((error: AxiosError) => {
            alert(error.message);
        });

}