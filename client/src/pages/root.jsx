import react, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import FormLogin from '@/components/FormLogin'
import Image from 'next/image'

export default function Root() {
	const [styledText, setStyledText] = useState('')
	let fixEditor = false
	let atalho = {
		sendPost: {atalho: ['Control', 'Enter'], teclas: []}
	}
	let posting = false

	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			console.log(e.key)
			
			atalho.sendPost.teclas.push(e.key)
			atalho.sendPost.teclas.length > 2 && atalho.sendPost.teclas.pop()

			// console.log(atalho.sendPost.teclas.length)

			if (atalho.sendPost.teclas.length === 1) {
				atalho.sendPost.teclas[0] !== atalho.sendPost.atalho[0] && atalho.sendPost.teclas.pop()
				// console.log(atalho.sendPost)
			} else if (atalho.sendPost.teclas.length === 2) {
				atalho.sendPost.teclas[1] !== atalho.sendPost.atalho[1] && atalho.sendPost.teclas.pop()
				// console.log(atalho.sendPost)
			}

			if (atalho.sendPost.teclas[0] === atalho.sendPost.atalho[0] && 
				atalho.sendPost.teclas[1] === atalho.sendPost.atalho[1] &&
				posting === false) {
				console.log('enviar post')
				posting = true
				atalho.sendPost.teclas.pop()
				atalho.sendPost.teclas.pop()
			}

		})
	}, [])

	const openMenu = () => {
		alert('opa')
	}

	const getTextSelected = (e) => {
		let textTmp = window.getSelection().toString()

		if (typeof (textTmp) !== 'undefined' && textTmp !== null && textTmp !== '') {
			openEditorText(e)
			fixEditor = true
			setStyledText(textTmp)
			return true
		} else {
			closeEditorText()
			fixEditor = false
			return null
		}
	}

	const openEditorText = (e) => {
		if (fixEditor === false) {
			const editor = document.querySelector('.editor')
			editor.classList.remove('closed')

			editor.style.top = `${e.clientY - 60}px`
			editor.style.left = `${e.clientX - 20}px`
		}
	}

	const closeEditorText = () => {
		const editor = document.querySelector('.editor')
		editor.classList.add('closed')
	}

	const applyEffect = (e) => {
		const textarea = document.querySelector('.create_post .content_post')

		e.target.classList.length === 0? e = e.target.parentNode: e = e.target

		if (e.classList.contains('btn_text_negrito') === true) {
			applyNegrito(textarea, 'negrito')
		} else if (e.classList.contains('btn_text_italico') === true) {
			applyItalico(textarea, 'italico')
		}
	}

	const applyNegrito = (textarea, effect) => {
		const elementOfText = document.querySelector(`[data-id="${styledText}]`)
			
		if (elementOfText === null) {
			console.log('element not created')
			textarea.innerHTML = textarea.innerText.replace(
				styledText, 
				`<span data-id=${styledText} class=${effect}>${styledText}</span>`
			)
		} else {
			console.log('new element created')
			if (elementOfText.classList.contains(effect) === true) {
				elementOfText.classList.remove(effect)
			} else {
				elementOfText.classList.add(effect)
			}
		}
	}

	const applyItalico = (textarea, effect) => {
		const elementOfText = document.querySelector(`[data-id="${styledText}"]`)
			
		if (elementOfText === null) {
			console.log('element not created')
			textarea.innerHTML = textarea.innerText.replace(
				styledText, 
				`<span data-id=${styledText} class=${effect}>${styledText}</span>`
			)
		} else {
			console.log('new element created')
			if (elementOfText.classList.contains(effect) === true) {
				elementOfText.classList.remove(effect)
			} else {
				elementOfText.classList.add(effect)
			}
		}
	}

	return (
		<>
			<Header></Header>

			<main>
				{/* <FormLogin></FormLogin> */}
				<div className='create_post'>
					<div className='editor closed'>
						<button className='editor_btns btn_text_negrito' onClick={(e) => {applyEffect(e)}}>
							<Image src='/icon.svg' width='100' height='100' alt='ícone do botão negrito' />
						</button>

						<button className='editor_btns btn_text_italico' onClick={(e) => {applyEffect(e)}}>
							<Image src='/icon.svg' width='100' height='100' alt='ícone do botão negrito' />
						</button>

						<button className='editor_btns btn_text_sublinhado' onClick={(e) => {applyEffect(e)}}>
							<Image src='/icon.svg' width='100' height='100' alt='ícone do botão negrito' />
						</button>
					</div>
					<input type='text' name='titulo' className='titulo' placeholder='titulo do post...' />

					<div 
						onKeyDown={(e) => {
							if (e.code === 'IntlRo') {
								openMenu()
							} else if (e.code === 'Escape') {
								closeEditorText()
							}
						}}
						onDoubleClick={(e) => { getTextSelected(e) }}
						onMouseMove={(e) => {
							getTextSelected(e)
						}}
						onClick={(e) => {
							setTimeout(() => {getTextSelected(e)}, 50)
						}}
						onChange={(e) => {
							e.target.innerHTML = e.target.value
						}}
						id="content_post"
						className='content_post'
						contentEditable 
						suppressContentEditableWarning
						spellCheck={true}
						data-placeholder="Escreva algo legal sobre gatos"
						>
					</div>
				</div>
			</main>
		</>
	)
}