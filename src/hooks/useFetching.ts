import {useState} from "react";
import {usePostsStore} from "../zustand/store.ts";

type FetchCallback = () => Promise<void>;

type UseFetchingResult = [() => Promise<void>, boolean, string | undefined];
export const useFetching = (callback: FetchCallback): UseFetchingResult => {
    const {isLoading, setIsLoading} = usePostsStore(state => ({
        isLoading: state.isLoading,
        setIsLoading: state.setIsLoading
    }))
    const [error, setError] = useState()
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
};

export default useFetching;