'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
    const pathname = usePathname();
    return (
        <div className="menu">
            <div>
                <ul>
                    <li>
                        <Link
                            href="/"
                            style={{
                                fontFamily: 'Gotham-Book',
                                textDecoration:
                                    pathname === '/' ? 'underline' : 'none'
                            }}
                        >
                            h
                            <span
                                style={{
                                    fontFamily: 'BrushSCI',
                                    fontSize: '32px'
                                }}
                            >
                                o
                            </span>
                            m
                            <span
                                style={{
                                    fontFamily: 'BrushSCI',
                                    fontSize: '32px'
                                }}
                            >
                                e
                            </span>
                        </Link>
                    </li>
                    <li className="dropdown">
                        <a
                            href="#"
                            style={{
                                fontFamily: 'Gotham-Book',
                                textDecoration:
                                    pathname !== '/' &&
                                    !pathname.includes('about')
                                        ? 'underline'
                                        : 'none'
                            }}
                        >
                            Po
                            <span
                                style={{
                                    fontFamily: 'BrushSCI',
                                    fontSize: '32px'
                                }}
                            >
                                r
                            </span>
                            tfoli
                            <span
                                style={{
                                    fontFamily: 'BrushSCI',
                                    fontSize: '32px'
                                }}
                            >
                                o
                            </span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <Link
                                    href="/portfolio/photograph"
                                    style={{
                                        fontFamily: 'Gotham-Ultra',
                                        textDecoration: pathname.includes(
                                            'photograph'
                                        )
                                            ? 'underline'
                                            : 'none'
                                    }}
                                >
                                    Foto
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio/video"
                                    style={{
                                        fontFamily: 'Gotham-Ultra',
                                        textDecoration: pathname.includes(
                                            'video'
                                        )
                                            ? 'underline'
                                            : 'none'
                                    }}
                                >
                                    Vídeo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio/design"
                                    style={{
                                        fontFamily: 'Gotham-Ultra',
                                        textDecoration: pathname.includes(
                                            'design'
                                        )
                                            ? 'underline'
                                            : 'none'
                                    }}
                                >
                                    Design
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            href="/portfolio/about"
                            style={{
                                fontFamily: 'Gotham-Book',
                                textDecoration: pathname.includes('about')
                                    ? 'underline'
                                    : 'none'
                            }}
                        >
                            s
                            <span
                                style={{
                                    fontFamily: 'BrushSCI',
                                    fontSize: '32px'
                                }}
                            >
                                o
                            </span>
                            br
                            <span
                                style={{
                                    fontFamily: 'BrushSCI',
                                    fontSize: '32px'
                                }}
                            >
                                e
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="redesociais">
                <div>
                    <img
                        src="/images/instagram.png"
                        alt="instagram"
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <div>
                    <img
                        src="/images/whatsapp.png"
                        alt="whatsapp"
                        style={{
                            cursor: 'pointer'
                        }}
                    />
                </div>
                <div>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <img src="/images/o-email.png" alt="o-email" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
