import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (paramter1 : string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    const [like, setLikes] = useState(0)

    function handleLike(){
        like === 0 ? setLikes(1) : setLikes(0);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/PedroSodreUFES.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Pedro Sodré</strong>
                            <time >Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={/*() => {like === 0 ? setLikes(1) : setLikes(0)}*/ handleLike}>
                        <ThumbsUp />
                        Aplaudir<span>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}