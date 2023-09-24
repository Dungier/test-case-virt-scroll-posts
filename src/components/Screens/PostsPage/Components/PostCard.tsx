import {IPost} from "@/shared/types/post.interface";
import {FC, useState} from "react";
import styles from "../PostCard.module.scss"

const PostCard: FC<IPost> = ({userId, id, title, body}) => {
    const [isButtonPressed, setIsButtonPressed] = useState(false)
    return (
    <div
        className="block max-w-[22rem] max-h-[20rem] rounded-lg bg-white text-left dark:bg-neutral-700 mt-5">
        <div className="p-6">
            <h5
                className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {title}
            </h5>
            <h6
                className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50 line-clamp-1">
                Post number: {id}
            </h6>
            <p
                className={isButtonPressed ? styles.p2 : styles.p}
                >
                {body}
            </p>
            <button
                className={styles.button}
                onClick={() => setIsButtonPressed(!isButtonPressed)}
            >просмотр</button>

        </div>
    </div>
    )
}

export default PostCard

