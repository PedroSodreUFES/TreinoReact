import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Robert Willian',
        role: 'CTO Queen Mary University'
      },
      content: [
        { type: 'paragraph', content: 'Fala, galera! 👋' },
        { type: 'paragraph', content: 'Gostaria de compartilhar com vocês meu novo projeto! É um projeto que fiz na universidade em conjunto com outros professores. O nome do projeto é HomeSchooling!' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-12-24 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Adam Shearer',
        role: 'Educator London College'
      },
      content: [
        { type: 'paragraph', content: 'Oi, pessoal! 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto. É um projeto que fiz na Universidade de Computação aqui na Inglaterra. O nome do projeto é DoctorCare!' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-12-24 20:00:00'),
    },
  ];


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          {
            posts.map(post => {
              return <Post 
                key={post.id}
                post={post}
              />
            })
          }
        </main>
      
      </div>
    </>
  )
}

export default App
