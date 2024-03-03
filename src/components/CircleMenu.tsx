'use client';

import { usePathname } from 'next/navigation';
import { useCircle } from '../hooks/useCircle';

export const CircleMenu = () => {
    const pathname = usePathname();
    const { isLoading } = useCircle();

    return (
        <main
            className="content"
            style={isLoading ? { display: 'none' } : { display: 'initial' }}
        >
            <div className={pathname === '/' ? `` : `conteudoCirculo`}>
                <div className="circle">
                    <div className="text">
                        <p>
                            <span
                                style={{
                                    textDecoration: pathname.includes(
                                        'photograph'
                                    )
                                        ? 'line-through'
                                        : 'none'
                                }}
                            >
                                photo
                            </span>{' '}
                            - video - design - photo - video - design -
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};
