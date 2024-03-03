import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/Header';
import { NavBar } from '../components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'JP - Portfólio',
    description: 'Portfólio de João Pedro'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${inter.className}`}
            >
                <header>
                    <Header />
                    <NavBar />
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
