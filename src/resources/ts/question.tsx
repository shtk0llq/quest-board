import axios from 'axios';
import type { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Question(): React.JSX.Element {
    const navigate = useNavigate();

    async function handleLogout(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        try {
            const response = await axios.post('/logout');
            alert(response.data.message);
            navigate('/login');
        } catch (error) {
            console.error('Logout Error:', error);
            alert('ログアウトに失敗しました。もう一度お試しください。');
        }
    };

    return (
        <div>
            <h1>Question</h1>
            <button onClick={handleLogout} className='text-white bg-slate-800 rounded-e p-1 hover:bg-white hover:text-black'>
                Logout
            </button>
        </div>
    );
};
