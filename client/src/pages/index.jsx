import react, { useEffect } from 'react'
import Header from '@/components/Header'

export default function Home() {
  useEffect(() => {
    window.document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        window.location.href = '/root'
      }
    })
  }, [])

  return (
    <>
      <Header/>
      <main>
        <div className='posts'>
          <div className='post'>
            <header>
              <h1>Primeiro post</h1>

              <div className='ctr_data'>
                <span className='body-max'>12:00/30/12/2023</span>
                <hr/>
              </div>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>
          </div>

          <div className='post'>
            <header>
              <h1>Primeiro post</h1>

              <div className='ctr_data'>
                <span className='body-max'>12:00/30/12/2023</span>
                <hr/>
              </div>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>
          </div>

          <div className='post'>
            <header>
              <h1>Primeiro post</h1>

              <div className='ctr_data'>
                <span className='body-max'>12:00/30/12/2023</span>
                <hr/>
              </div>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>
          </div>

          <div className='post'>
            <header>
              <h1>Primeiro post</h1>

              <div className='ctr_data'>
                <span className='body-max'>12:00/30/12/2023</span>
                <hr/>
              </div>
            </header>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto mollitia adipisci? Iure, officia sint, qui tenetur commodi error, ratione corporis deserunt ex tempore magni amet rerum velit. Sint, quas.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, sequi ut. A velit autem similique repudiandae illum ipsa at adipisci, recusandae rerum, eaque sit sapiente modi molestias eos neque hic.</p>
          </div>
        </div>
      </main>
    </>
  )
}