import {classNames} from "../../../lib/classNames.ts";
import {getPagesArray} from "../../../utils/pages.ts";
import {usePostsStore} from "../../../zustand/store.ts";
import {FC} from "react";

interface iPagination {
    changePage: (page: number) => void
}

const Pagination: FC<iPagination> = (props) => {
    const {changePage} = props
    const totalPages = usePostsStore(state => state.totalPages)
    const page = usePostsStore(state => state.page)
    const pagesArr: number[] = getPagesArray(totalPages)

    return (
        <div className="page__wrapper">
            {pagesArr.map((p, index) =>
                <span
                    onClick={() => changePage(p)}
                    className={classNames("page", {"page__current": page === p})}
                    key={index}
                >
                    {p}
                </span>)}
        </div>
    );
};

export default Pagination;