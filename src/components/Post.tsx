import { Comment } from './Comment'
import styles from './Post.module.css'
import { Avatar } from './Avatar'
import { format , formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState, InvalidEvent } from 'react'

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

export interface PostType{
    id: number
    author: Author;
    publishedAt : Date;
    content: Content[];
}



interface PostProps {
    post: PostType;
}


export function Post({post}: PostProps) {

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:m'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
        locale:ptBR,
        addSuffix: true,
    });

    const [comments, setComments] = useState<string[]>([])

    const [newCommentText, setNewCommentText] = useState('');

    function handleCrateNewComment(event: FormEvent) {
        event.preventDefault()
    
        setComments([...comments, newCommentText]);
        setNewCommentText('');
      }
    
      function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
      }
    
      function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
      }
    
      function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
        })
    
        setComments(commentsWithoutDeletedOne);
      }

      const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()} >{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                }
                )}
            </div>

            <form className={styles.commentForm} onSubmit={handleCrateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário' 
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                    />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item => 
                    {return <Comment key={item} content={item} onDeleteComment={deleteComment}/>})}
            </div>
        </article>
    )
}