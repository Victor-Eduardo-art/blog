import react, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import FormLogin from '@/components/FormLogin'
import Image from 'next/image'
import Axios from 'axios'
const host_server = process.env.NEXT_PUBLIC_HOST_SERVER

export default function Root() {
	const [styledText, setStyledText] = useState('')
	const [form, setForm] = useState({
		titulo: '',
		content: ''
	})

	let fixEditor = false

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

	const manageEffects = (e) => {
		const textarea = document.querySelector('.create_post .content_post')

		e.target.classList.length === 0? e = e.target.parentNode: e = e.target

		if (e.classList.contains('btn_text_negrito') === true) {
			applyNegrito(textarea, 'negrito')
		} else if (e.classList.contains('btn_text_italico') === true) {
			applyItalico(textarea, 'italico')
		}
	}

	const applyEffects = (textarea, effect) => {
		const spanText = document.querySelector(`[data_text="${styledText.toUpperCase()}"]`)

		if (spanText !== null) {
			if (spanText.classList.contains(effect) === true) {
				spanText.parentNode.innerHTML = spanText.parentNode.innerHTML.replace(
					`<span data_id="${spanText.attributes.getNamedItem('data_id').textContent}" data_text="${spanText.attributes.getNamedItem('data_text').textContent}" class="${spanText.className}">${spanText.innerHTML}</span>`,
					styledText.replace(/_/g, ' ')
				)
			} else {
				let tagSpanTag = `<span data_id="${spanText.attributes.getNamedItem('data_id').textContent}" data_text="${spanText.attributes.getNamedItem('data_text').textContent}" class="${spanText.className}">${spanText.innerHTML}</span>`

				spanText.parentNode.innerHTML = spanText.parentNode.innerHTML.replace(
					tagSpanTag,
					`<span data_id="${textarea.childNodes.length}" data_text="${spanText.attributes.getNamedItem('data_text').textContent}" class="${effect}">${tagSpanTag}</span>`
				)
			}
		} else {
			let styledTextTmp = styledText.split(' ')
			console.log(styledTextTmp)

			let repeatedText = []
			let existingElements = []

			for (let text of styledTextTmp) {
				let elementOfText = document.querySelector(`[data_text="${text.toUpperCase()}"]`)

				if (elementOfText === null) {
					elementOfText = document.querySelector(`[data_text="${text.toUpperCase()}"]`)
				}

				repeatedText.push(false)

				if (elementOfText !== null) {
					existingElements.push({element: elementOfText, text: text})
				}
			}
			console.log(existingElements)
			console.log(styledTextTmp)
			// styledText.replace(/ /g, '')

			if (existingElements.length === 0) {
				console.log('new element')

				textarea.innerHTML = textarea.innerHTML.replace(
					styledText,
					`<span data_id="${textarea.childNodes.length}" data_text="${styledText.replace(/ /g, '_').toUpperCase()}" class="${effect}">${styledText.replace(/ /g, "<span class='hide'>_</span>")}</span>`
				)
				console.log(styledText.replace(/ /g, "<span class='hide'>_</span>"))
			} else {
				let elementOfText = ''

				repeatedText = []
				existingElements = []
				console.log(repeatedText)

				for (let text of styledTextTmp) {
					const elementOfText = document.querySelector(`[data_text="${text.toUpperCase()}"]`)
					repeatedText.push(false)

					if (elementOfText !== null) {
						existingElements.push({element: elementOfText, text: text})
					} else {
						existingElements.push(false)
					}
				}

				for (let i in styledTextTmp) {
					if (existingElements[i] !== false) {
						if (styledTextTmp[i] === existingElements[i].text && repeatedText[i] === false) {
							let element = existingElements[i].element

							elementOfText = elementOfText +`<span data_id="${element.attributes.getNamedItem('data_id').textContent}" data_text="${element.attributes.getNamedItem('data_text').textContent}" class="${element.className}">${element.innerHTML}</span> `
							repeatedText[i] = true

						} else if (repeatedText[i] === false) {
							elementOfText = elementOfText + `${styledTextTmp[i]} `
							repeatedText[i] = true
						}
					} else if (repeatedText[i] === false) {
						elementOfText = elementOfText + `${styledTextTmp[i]} `
						repeatedText[i] = true
						console.log(`text2: ${styledTextTmp[i]}`)
					}
				}

				elementOfText = elementOfText.trim()
				console.log(elementOfText)
				console.log(textarea.innerHTML)
				textarea.innerHTML = textarea.innerHTML.replace(
					elementOfText,
					`<span data_id="${textarea.childNodes.length}" data_text="${styledText.toUpperCase()}" class="${effect}">${elementOfText}</span>`
				)
			}
			
		}
	}

	const applyNegrito = (textarea, effect) => {
		applyEffects(textarea, effect)
	}

	const applyItalico = (textarea, effect) => {
		applyEffects(textarea, effect)
	}

	const sendPost = () => {
		if (form.content !== '') {
			if (form.titulo !== '') {
				Axios.post(`${host_server}/sendPost`, {
					titulo: form.titulo,
					content: form.content,
				}).then((res) => {
				  console.log(res)
				}).catch((error) => console.log(error))
			} else {
				Axios.post(`${host_server}/sendPost`, {
					titulo: false,
					content: form.content,
				}).then((res) => {
				  console.log(res)
				}).catch((error) => console.log(error))
			}
		}
	}

	const getValuesForm = (e) => {
		if (e.id !== 'content') {
			setForm({...form, [e.id]: e.value})
		} else {
			setForm({...form, [e.id]: e.innerHTML})
		}
	}
	
	return (
		<>
			<Header></Header>

			<main>
				{/* <FormLogin></FormLogin> */}
				<div className='create_post'>
					<div className='editor closed'>
						<button className='editor_btns btn_text_negrito' onClick={(e) => {manageEffects(e)}}>
							<Image src='/icon.svg' width='100' height='100' alt='ícone do botão negrito' />
						</button>

						<button className='editor_btns btn_text_italico' onClick={(e) => {manageEffects(e)}}>
							<Image src='/icon.svg' width='100' height='100' alt='ícone do botão negrito' />
						</button>

						<button className='editor_btns btn_text_sublinhado' onClick={(e) => {manageEffects(e)}}>
							<Image src='/icon.svg' width='100' height='100' alt='ícone do botão negrito' />
						</button>
					</div>

					<input 
						type='text' 
						name='titulo' 
						className='titulo' 
						id='titulo'
						placeholder='titulo do post...' 
						onChange={(e) => {getValuesForm(e.target)}}
						value={form.titulo}
					/>

					<div 
						onKeyDown={(e) => {
							setTimeout(() => {
								getValuesForm(e.target)
							}, 100)
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
						id="content"
						className='content_post'
						contentEditable 
						suppressContentEditableWarning
						spellCheck={true}
						data-placeholder="Escreva algo legal sobre gatos"
						>
					</div>
					<span onClick={() => {sendPost()}}>enviar</span>
				</div>
			</main>
		</>
	)
}