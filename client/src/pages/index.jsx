import react, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import axios from 'axios'
const host_server = process.env.NEXT_PUBLIC_HOST_SERVER

export default function Home() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    window.document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        window.location.href = '/root'
      }
    })
    axios.get(`${host_server}/getPosts`).then((res) => {
      setPosts(res.data)
      console.log(posts)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Header/>
      <main>
        <div className='posts'>
          {typeof(posts) !== 'undefined' && posts.map((post) => {
            const alterInnerHtmlP = (selectorE, content) => {
              if (document.querySelector(selectorE) !== null) {
                console.log(selectorE)
                document.querySelector(selectorE).innerHTML = content
              }
            }

            if (post.titulo === '') {
              return (
                <div className='post' key={`post-${post.id}`}>
                  <header key={`header-${post.id}`}>      
                    <div className='ctr_data' key={`ctr_date-${post.id}`}>
                      <span className='body-max' key={`date_update-${post.id}`}>{post.updatedAt}</span>
                      <hr key={`hr-${post.id}`}/>
                    </div>
                  </header>
      
                  <div className='ctr_content'>
                    <p data_idp={`content-${post.id}`} key={`content-${post.id}`}>
                      {post.content}
                    </p>
                    <span key={`span-${post.id}`}> | </span>
                  </div>
                  <div style={{display: 'none'}}>{setTimeout(() => {
                    document.querySelector('p') !== null && alterInnerHtmlP(`[data_idp="content-${post.id}"]`, post.content)
                  }, 100)}</div>
                </div>
              )
            } else {
              return (
                <div className='post' key={`post-${post.id}`}>
                  <header key={`header-${post.id}`}>
                    <h1 key={`title-${post.id}`}>{post.titulo}</h1>
      
                    <div className='ctr_data' key={`ctr_date-${post.id}`}>
                      <span className='body-max' key={`date_update-${post.id}`}>{post.updatedAt}</span>
                      <hr key={`hr-${post.id}`}/>
                    </div>
                  </header>
  
                  <div className='ctr_content'>
                    <p data_idp={`content-${post.id}`} key={`content-${post.id}`}>
                      {post.content}
                    </p>
                    <span key={`span-${post.id}`}> | </span>
                  </div>
                  <div style={{display: 'none'}}>{setTimeout(() => {
                    document.querySelector('p') !== null && alterInnerHtmlP(`[data_idp="content-${post.id}"]`, post.content)
                  }, 100)}</div>
                </div>
              )
            }
          })}
        </div>
      </main>
    </>
  )
}