import {useMemo} from "react";

const getPagesCount = (totalCount: number, limit: number): number => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number) => {
    return useMemo(() => {
        let newArray: number[] = [];
        for (let i = 0; i < totalPages; i++) {
            newArray.push(i + 1);
        }
        console.log(newArray)
        return newArray;
    }, [totalPages]);
}
