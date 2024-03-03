import { CircleMenu } from "../../components/CircleMenu";

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
