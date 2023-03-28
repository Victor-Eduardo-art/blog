import { useEffect, useState } from 'react'
import Axios from 'axios'
const host_server = process.env.NEXT_PUBLIC_HOST_SERVER

export default function FormLogin() {
	useEffect(() => {
		selectInput()
	})	

	const selectInput = () => {
		const inputs = document.querySelectorAll('.form .ctr-input input')

		for (let input of inputs) {
			input.addEventListener('click', (e) => {
				const label = e.target.parentElement.childNodes[1]
				label.classList.add('click')

				e.target.addEventListener('blur', (e) => {
					if (e.target.value.length === 0) {
						const label = e.target.parentElement.childNodes[1]
						label.classList.remove('click')
					}
				})
			})
		}
	}

	const [form, setForm] = useState({
		senha: '',
	})

	const f_handleInputs = (e) => {
		setForm({...form, [e.name]: e.value})
	}

	const validate = () => {
        let isValidate = true

        setForm({
            senha: form.senha.trim()
        })

        const regexSenha = new RegExp(
            /^[a-zA-Z0-9-@]$/
        )

        if (regexSenha.test(form.senha)) {
            openModal(`Por favor não use careceres especiais`)
            isValidate = false
        }

        if (form.senha.length < 5) {
            openModal(`Por favor crie uma senha com pelo menos 8 dígitos`)
            isValidate = false
        }

        return isValidate
    }

	const f_sendData = () => {
        if (validate()) {
            // Axios.post(` ${host_server}/login`, {
            //     senha: form.senha,
            // })
            // console.log(form)

            
        }
	}

	const openModal = (msg) => {
        const ctrModal = document.querySelector('.ctr-modal')
		const blur = document.querySelector('.blur')

		blur.classList.remove('none')

        ctrModal.classList.remove('close')
        document.querySelector('.modal p').innerHTML = msg

        document.addEventListener('keydown', (key) => {
            key = key.key
            
            if (key === 'Enter' || key === 'Escape') {
                closeModal()
            }
        })
    }

    const closeModal = () => {
        document.querySelector('.ctr-modal').classList.add('close')
        document.querySelector('.ctr-modal button').focus()

		const blur = document.querySelector('.blur')

		blur.classList.add('none')
    }

  return (
	<>    
    <main>
        <div className="blur"></div>
        <div className='ctr_login'>
            <div className='login'>
                <h1>Login for root</h1>
                {/* <Image src='/logotipo.svg' width='100' height='100' alt='logotipo do mey blog'/> */}

                <div className="ctr-modal close">
                    <div className="modal">
                        <div className="ctr-notice">

                        <h3 className="notice">Aviso:</h3>
                            <p></p>
                        </div>

                        <button className="close button-small" id="buttonModalClose" onClick={() => {closeModal()}}>Fechar</button>
                    </div>
                </div>
                <div className="blur none"></div>


                <div className='form'>
                    <div className='ctr-inputs'>
                        <div className='ctr-input' >
                            <input type='password' id='senha' name='senha' value={form.senha} onChange={(e) => {f_handleInputs(e.target)}}/>
                            <label htmlFor='senha'>Digite sua senha:</label>
                        </div>
                    </div>

                    <button onClick={() => {f_sendData()}} className='btn-send'>Entrar</button>
                </div>
            </div>
        </div>
    </main>
	</>
  )
}