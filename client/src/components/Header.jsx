import react from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='body'>
      <Image 
        src='/logotipo.svg' 
        width='100' 
        height='100' 
        alt='logotipo do meu blog, é um gato roxo com uma coroa'
        className='logo' 
      />
    </header>
  )
}