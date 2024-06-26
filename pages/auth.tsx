import Image from "next/image";
import Input from "@/components/Input";
import { useCallback, useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black h-full w-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={178}
                        height={48}
                        className="h-12"
                    />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                            <Input
                                id="name"
                                type="text"
                                label="Username"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                            />
                            )}
                            <Input
                                id="email"
                                type="email"
                                label="Email address or phone number"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)} 
                            />
                            <Input
                                type="password" 
                                id="password" 
                                label="Password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant} >{variant === 'login' ? 'Create an account' : 'Login'}</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;