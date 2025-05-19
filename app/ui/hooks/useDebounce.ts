import { useEffect, useRef, useState } from "react"

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timerRef = useRef<NodeJS.Timeout>(null);

    function debounceFn(...args: any[]) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            callback(...args)
        }, delay)

    }

    useEffect(() => {
        return (() => {
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        })
    }, [])

    return debounceFn;


}
export default useDebounce;

