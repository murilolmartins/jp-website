import { useEffect, useState } from 'react';

export const useCircle = () => {
    const [isLoading, setIsLoading] = useState(true);

    const rotateCircle = () => {
        if (typeof document !== 'undefined') {
            const text = document.querySelector('.text p');
            text!.innerHTML = text!
                .textContent!.split('')
                .map(
                    (char, i) =>
                        `<span style="transform:rotate(${
                            i * 7.3
                        }deg)">${char}</span>`
                )
                .join('');

            setIsLoading(false);
        }
    };

    useEffect(() => {
        rotateCircle();
    }, []);

    return { isLoading, rotateCircle };
};
