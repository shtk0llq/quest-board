import React from 'react';
import type { AxiosResponse } from 'axios';
import axios from 'axios';

interface AuthResponse {
	redirect_url: string;
}

export default function Login(): React.JSX.Element {
	const handleLogin = async (_e: React.MouseEvent<HTMLButtonElement>, provider: string) => {
		try {
			const response: AxiosResponse<AuthResponse> = await axios.get(`/auth/${provider}/redirect`);
			window.location.href = response.data.redirect_url;

			// 新しいウィンドウでGitHub認証を行い、認証が完了してウィンドウが閉じられたらメインウィンドウをリロードします。
			// const newWindow = window.open(response.data.redirect_url);
			// if (newWindow) {
			// 	const timer = setInterval(() => {
			// 		if (newWindow.closed) {
			// 			clearInterval(timer);
			// 			window.location.reload(); // ログイン後にメインウィンドウをリロード
			// 		}
			// 	}, 500);
			// }
		} catch (error) {
			console.error('Error during GitHub login:', error);
		}
	};

	return (
		<div>
			<button onClick={(e) => handleLogin(e, 'github')} className='text-white bg-slate-800 rounded-e p-1 hover:bg-white hover:text-black'>
				GitHub
			</button>
		</div>
	);
};
