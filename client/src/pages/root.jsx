import react from 'react'
import Header from '@/components/Header'
import FormLogin from '@/components/FormLogin'

export default function Root() {
  return (
    <>
        <Header></Header>

        <main>
            <FormLogin></FormLogin>
            <div className='create_post'>
                <input type='text' name='titulo' className='titulo' placeholder='titulo do post...'/>

                <textarea name="content" id="content" className='content_post' cols="30" rows="10" placeholder='escreva algo legal sobre gatos'></textarea>
            </div>
        </main>
    </>
  )
}