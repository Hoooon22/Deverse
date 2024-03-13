import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Header } from 'containers';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <React.Fragment>
            <Header />
            <div>
                백엔드에서 가져온 데이터입니다 : {hello}
            </div>
        </React.Fragment>
    );
}

export default App;