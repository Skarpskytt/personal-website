import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
}

export function useMultipleScrollAnimation(count, threshold = 0.1) {
    const refs = useRef([]);
    const [visibleItems, setVisibleItems] = useState(new Array(count).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = refs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setVisibleItems((prev) => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            { threshold }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [count, threshold]);

    const setRef = (index) => (el) => {
        refs.current[index] = el;
    };

    return [setRef, visibleItems];
}
