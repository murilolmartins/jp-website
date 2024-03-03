import { CircleMenu } from '../../components/CircleMenu/CircleMenu';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <CircleMenu />
            {children}
        </>
    );
}
