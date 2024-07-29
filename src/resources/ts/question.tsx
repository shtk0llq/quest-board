import axios from 'axios';
import type { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaUserCircle } from "react-icons/fa";


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
        <>
            <header className="bg-[#35383C] p-4">
                <div className="max-w-screen-lg mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Question</h1>
                    <button onClick={handleLogout} className='text-white bg-slate-700 rounded px-4 py-2 hover:bg-white hover:text-black transition duration-300'>
                        Logout
                    </button>
                </div>
            </header>

            <main className='flex-grow max-w-screen-lg mx-auto w-full py-8'>
                <div className='w-full border border-[#424547]'>
                    <ul className='flex justify-between px-4 py-2 border-b border-[#424547]'>
                        <li className='font-semibold px-8 py-2 rounded-md cursor-pointer bg-[#424548]'>最新</li>
                        <li className='font-semibold px-8 py-2 rounded-md cursor-pointer hover:bg-[#424548]'>トレンド</li>
                        <li className='font-semibold px-8 py-2 rounded-md cursor-pointer hover:bg-[#424548]'>未回答</li>
                        <li className='font-semibold px-8 py-2 rounded-md cursor-pointer hover:bg-[#424548]'>未解決</li>
                        <li className='font-semibold px-8 py-2 rounded-md cursor-pointer hover:bg-[#424548]'>解決済</li>
                    </ul>

                    <div className='flex gap-3 p-4 border-b border-[#424547]'>
                        <div className='flex flex-col justify-around w-20 flex-shrink-0'>
                            <div className='font-semibold bg-[#FF395C] text-xs text-center p-1.5 rounded-md'>未解決</div>
                            <div>
                                <p className='font-semibold text-center'>0</p>
                                <p className='font-semibold text-center'>回答</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-6 flex-grow'>
                            <p className='font-semibold cursor-pointer hover:text-[#e3e3e3] hover:underline hover:decoration-1'>GitHub Actionsの作業ブランチでの検証方法についてGitHub Actionsの作業ブランチでの検証方法についてGitHub Actionsの作業ブランチでの検証方法について</p>
                            <div className='flex justify-between flex-wrap'>
                                <ul className='flex items-end gap-2 mb-2 sm:mb-0'>
                                    <li className='font-semibold text-sm bg-[#FF395C] px-2 py-0.5 rounded-md'>PHP</li>
                                    <li className='font-semibold text-sm bg-[#FF395C] px-2 py-0.5 rounded-md'>Laravel</li>
                                </ul>

                                <div className='flex gap-3 text-xs flex-wrap'>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegBookmark size={20} />
                                        <p className='font-semibold'>1</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaEye size={20} />
                                        <p className='font-semibold'>100</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaUserCircle size={24} />
                                        <div>
                                            <p>ユーザー1</p>
                                            <p>2024年01月01日 00:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className='p-4 mt-auto'>
                <div className='max-w-screen-lg mx-auto'>
                    <ul className='flex justify-center gap-6 mb-2'>
                        <li className='text-sm cursor-pointer hover:underline'>利用規約</li>
                        <li className='text-sm cursor-pointer hover:underline'>プライバシーポリシー</li>
                    </ul>
                    <p className='text-center text-sm'>Copyright &copy; QuestBoard. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};
