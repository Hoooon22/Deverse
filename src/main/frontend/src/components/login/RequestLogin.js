import React, { useEffect } from 'react';
import axios from 'axios';

const RequestLogin = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/check');

                if (response.status === 200) {
                    console.log('@check success : ', response.data);
                } else {
                    console.log('@check failed');
                }
            } catch (error) {
                console.log('@check error : ', error);
            }
        };

        fetchData();
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

    return null; // 이 컴포넌트는 화면에 렌더링하지 않으므로 null을 반환
}

export default RequestLogin;
