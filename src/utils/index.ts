
export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, value);
}
export const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value?? undefined
}
export const setAppTheme = (savedTheme: string | undefined, setTheme:( x: string) => void ) => {
    const prefersDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme("dark");
    }
}

export const getTemp = (value: number) => {
    return +((+value - 32) / 1.8).toFixed(0)
}