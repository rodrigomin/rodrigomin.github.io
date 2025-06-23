import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Star, Menu, X, Mail, Phone, MapPin, Code, Palette, Smartphone, CheckCircle, ChevronUp, Lightbulb, Sparkles, ClipboardPen, User, UserSearch, CirclePlay} from 'lucide-react';
import emailjs from '@emailjs/browser'
import propaganda_video_1 from '../src/assets/propaganda_video_1.mp4'




function App() {
  

  

  const cards = document.querySelectorAll("#card")
  const video = document.querySelector("#video")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach ( entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
      if (entry.isIntersecting) {
        console.log('🧨')
        entry.target.classList.add("show");
        observer.disconnect()
      }

    })
    
  }, 
  {
    threshold: 0.1,
  }
)

  cards.forEach(card => {
    observer.observe(card)

  })


  

  const [emailValue, setEmailValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [nameValue, setNameValue] = useState("")

  const info = [nameValue, emailValue, messageValue]
  const error_num = [false, false, false]

  const [menu, setMenu] = useState(false)
  const [mostrarVideo, setMostrarVideo] = useState(false)

  const handleNameInputChange = (event) => {setNameValue(event.target.value)}
  const handleMessageInputChange = (event) => {setMessageValue(event.target.value)}
  const handleEmailInputChange = (event) => {setEmailValue(event.target.value)}

  function coisa(nome, email, mensagem) {
  
    if (nameValue == "" || emailValue == "" || messageValue == "") { // se tem algum erro em algum campo
      const info_Error = ["nome", "email", "mensagem"]
      
      for (let index = 0; index < info.length; index++) {
        
        if (info[index] == "") {
          const element = document.getElementsByName(info_Error[index])[0]
          element.placeholder='Preencha todos os campos corretamente';
          element.classList.add('animation-error')
          element.addEventListener('animationend', () => {
            element.classList.remove('animation-error')
        });
          console.log("ERRO: ", info_Error[index])
        } else {
          document.getElementsByName(info_Error[index])[0].placeholder=`Insira seu ${info_Error[index]} aqui`
        }

      }
      
      return
    }
  
    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email
    }
  
    emailjs.send("service_9ucjd3v", "template_9l9p2cs", templateParams, 'UYp0DaT8KEeq7BkZb')
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setNameValue('')
      setEmailValue('')
      setMessageValue('')
    }, (error) => {
      console.log("ERRO: ", error)
    })
  }

  
  return (
    
    <>
    <style> @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap');</style>

        <div className='w-screen'>
          <div className='flex flex-row-reverse w-full text-black p-5 rounded-xl'>
            <button id='button' className='bg-black text-white text-center p-5 ml-5 rounded-xl'> <a href='#contato'>Entre em Contato</a>  </button>
            <a id='button' className='text-black p-5 mr-10 cursor-pointer max-xl:hidden' href='#sobre'> Sobre Mim</a>
            <a id='button' className='text-black p-5 mr-10 cursor-pointer max-xl:hidden' href='#servicos'> Serviços </a>
            <div className='flex flex-row absolute p-5 left-1 ml-5'>
              <div className='relative xl:hidden'>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  id='button' 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="size-6" 
                  onClick={() => {
                    const element = document.getElementById('menu')

                    if (menu === false) { // se tiver fechado
                      
                      console.log(element.classList)
                      element.classList.remove('menu-animation-reverse')

                      void element.offsetWidth; // reinicia o layout, consequentemente a animação tb reinicia

                      element.classList.add('menu-animation') 
                      setMenu(true)   
                    } else { //se tiver aberto
                      console.log(element.classList)
                      element.classList.remove('menu-animation')

                      void element.offsetWidth;

                      element.classList.add('menu-animation-reverse')

                      setMenu(false)
                     
                    }
                  }
                  }> {/* tres barrinhas */} 
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                {(<div id='menu' className='absolute w-[260px] h-[250px] bg-gray-100 mt-2 rounded-lg overflow-hidden shadow-lg xl:hidden'>
                    <div className="h-full w-full overflow-hidden flex flex-col items-center justify-start overflow-hidden">
                      <a href='#sobre'><p id='button' className="my-6 flex flex-row"> <User className='mr-2'></User> Sobre Mim</p></a>
                      <hr className="border-t border-gray-200 w-4/5" />
                      <a href='#servicos'><p id='button' className="my-6 flex flex-row"> <ClipboardPen className='mr-2'></ClipboardPen> Serviços</p></a>
                      <hr className="border-t border-gray-200 w-4/5" />
                      <a href='#contato'><p id='button' className="my-6 flex flex-row"> <UserSearch className='mr-2'> </UserSearch> Entre em contato</p></a>
                      <hr className="border-t border-gray-200 w-4/5" />
                      {/* Adicione mais para testar o scroll */}
                    </div>
                </div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Hero */}
        <section className='pb-10 w-screen items-center'>
          <div className='w-screen max-xl:flex max-xl:flex-col max-xl:text-center'>
            <h1 id='text' className='text-black xl:ml-30 mt-10  bold'> Landing Page </h1>
            <div className='max-xl:flex max-xl:justify-center'>
              <p className='w-6/10 mt-4 leading-7 text-gray-600 mb-5 xl:ml-30'> Landing Page ou página de aterrissagem é uma página que serve para divulgar e apresentar um evento ou produto. Essa página é um ótimo exemplo disso! Nela você coloca informações sobre o evento/produto e se quiser, pode colocar um fórmulário para contato, ou até um redirecionamento para seu site de vendas (como Hotmart ou Kiwify). No vídeo de apresentação a seguir também é brevemente explicado.</p>
            </div>
          </div>
          <div className='max-xl:flex max-xl:justify-center max-xl:m-0'>
            <button id='button' className='bg-black text-white text-center p-5 pl-10 pr-10 xl:ml-30 rounded-xl' onClick={() => setMostrarVideo(true)}> Assistir Vídeo de Apresentação </button>
          </div>

          
          
            
            {mostrarVideo &&
            <div id='video' className='flex w-screen justify-center h-screen fixed bottom-0 z-1'>
              
              <div className='absolute right-1 m-2 cursor-pointer z-3'><X className='text-white w-10 h-10' onClick={() => setMostrarVideo(false)}></X></div>
              <div id='video' className='flex w-full absolute items-center relative z-2'>
  
                  <iframe src='https://www.youtube.com/embed/kkhe6m3cQc4' className='flex rounded-2xl h-9/10 center w-9/10'></iframe> 
                  
              </div>
              <div className="loader"></div>
              
              
              <div className='w-full absolute  h-full bg-black opacity-80'></div>
            </div>
          }
        </section>

        <section id='sobre' className='mt-10 mb-20'>
          <div className='max-xl:flex max-xl:w-screen max-xl:justify-center'>
          <h1 id='text' className='text-black xl:ml-30 mt-10 bold'> Sobre mim</h1>
          </div>
          <div className='xl:ml-30 max-xl:w-screen flex flex-row max-xl:flex-col'>
            <div className='max-xl:flex max-xl:w-screen max-xl:justify-center'>
              <p className='text-gray-600 p-5 leading-7 mt-5 max-xl:text-center md:w-100'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam modi voluptatum molestiae accusamus sequi sed facere. A tempore quo veniam sunt obcaecati, repellendus corporis impedit aperiam autem explicabo magni excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est doloribus libero impedit minus incidunt, quibusdam veniam hic explicabo tempora totam, veritatis numquam? Animi tempora dignissimos, corporis quo quibusdam officia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quod iure omnis dolore aliquid facere expedita dicta veniam perferendis laudantium, temporibus possimus ullam quis consectetur, incidunt id sed vel architecto?</p>
            </div>
            <div className='xl:w-full flex flex-row-reverse max-xl:flex-col flex items-center ml-50'> 
              <img className='w-100 h-100 rounded-full max-xl:mt-20 mr-50 max-xl:w-50 max-xl:h-50' src='https://yt3.googleusercontent.com/Y9-Xwxb9G1tHzASQzWoXA3GEV26HI0s4bsfOCzod42vdd3EKlJJLRUX0vSxu8XO1RpN-vzSB=s160-c-k-c0x00ffffff-no-rj'></img>
            </div>
          </div>
        </section>

          <section id='servicos' className='bg-gray-50 pt-10 pb-10'>
              <div className='flex flex-col w-screen justify-center items-center'>
                <h1 id='text' className='text-black'> O que posso oferecer </h1>
                <p className='text-gray-600 text-lg mt-5 text-center'> Obviamente os serviços que eu posso prestar com meu nível de conhecimento. </p>
              </div>
            <div className='w-screen flex flex-row max-xl:flex-col drop-shadow-lg drop-shadow-gray-500/50'>
              <div id='card' className='opacity-0 m-10 bg-white text-black p-5 xl:w-1/3 rounded-xl'>
                <Code className='text-gray-500'></Code>
                <h1 id='text' className='mb-5 mt-2'>Landing Pages/Sites </h1>
                <p className='text-gray-500'> Como já explicado, eu crio páginas simples. Páginas como Landing Pages, Sites Institucionais, etc. Para criação dos sites eu utilizo o Vite com ReactJS e Tailwind para o design da página.</p>
              </div>
              <div id='card' className='opacity-0 m-10 bg-white text-black xl:w-1/3 p-5 rounded-xl'>
                <Palette className='text-gray-500'></Palette>
                <h1 id='text' className='mb-5 mt-2'>UI Design </h1>
                <p className='text-gray-500'> Sou capaz de fazer os Designs da página (claro que com ajuda do cliente para tomada de decisões). Uso o Framework TailwindCSS para fazer o design do site.</p>
              </div>
              <div id='card' className='opacity-0 m-10 bg-white text-black xl:w-1/3 p-5 rounded-xl'>
                <Sparkles className='text-gray-500'></Sparkles>
                <h1 id='text' className='mb-5 mt-2'>Responsividade </h1>
                <p className='text-gray-500'> Assim como nesta Landing Page, consigo criar sites responsivos que funcionam tanto para aparelhos smartphones, quanto para computadores.</p>
              </div>
            </div>
          </section>

          <section id='contato' className='pt-10 pb-10 bg-gray-950'>
            <div className='flex flex-col w-screen p-5'>
                <h1 id='text' className='text-white center'> Vamos Trabalhar Juntos </h1>
                <p className='p-5 center'> Preparado para ter seu próprio site? Me contate pelo email e traga suas ideias à vida. </p>
                

                <div className='flex flex-row mt-25 max-xl:flex-col items-center w-full'>
                  <div className='flex flex-col xl:left w-1/2 max-xl:w-screen max-xl:items-center xl:ml-20'>
                  <h1 id='text' className='text-white'> Entre em contato</h1>
                  
                  <div className='flex items-center m-2 mt-5 relative'> 
                    {true && (<Phone className='max-xl:absolute max-xl:left-0'></Phone>)}
                    <div className='ml-10 mr-10'> 
                      <p className='max-xl:text-center text-white font-extrabold text-lg'> Telefone </p>
                      <p> +55 14 99786-7938</p>
                    </div>
                  </div>

                  <div className='flex items-center m-2 mt-5 relative'> 
                    {true && (<Mail className='max-xl:absolute max-xl:left-0'></Mail>)}
                    <div className='ml-10 mr-10'>
                      <p className='max-xl:text-center text-white font-extrabold text-lg'> Email </p> 
                      <p> rodrigo.minotic@gmail.com </p>
                    </div>
                  </div> 

                  <div className='flex items-center m-2 mt-5 relative'> 
                    {true && (<MapPin className='max-xl:absolute max-xl:left-0'></MapPin>)}
                    <div className='ml-10 mr-10'>
                      <p className='max-xl:text-center text-white font-extrabold text-lg'> Localização </p> 
                      <p> São Paulo, Brasil </p>
                    </div>
                  </div> 
                  </div>

                  <div className='flex w-1/3 flex-col mb-2 max-xl:w-9/10 max-xl:items-center max-xl:mt-20'>
                  <p className='mb-2 font-bold'> Nome </p>
                  <input id='inputs' name='nome' type='text' value={nameValue} onChange={handleNameInputChange} placeholder='Seu nome' className='bg-white text-black rounded-lg max-xl:w-full' ></input>
                  <p className='mb-2 mt-10 font-bold'> Email </p>
                  <input id='inputs' name='email' type='text' value={emailValue} onChange={handleEmailInputChange} placeholder='seuemail@email.com' className='bg-white text-black rounded-lg max-xl:w-full' ></input>
                  <p className='mb-2 mt-10 font-bold'> Mensagem </p>
                  <textarea id='inputs' name='mensagem' maxLength='1000' value={messageValue} onChange={handleMessageInputChange} type='text' size='' placeholder='Me conte sobre seu projeto...' className='bg-white text-black rounded-lg max-xl:w-full h-25' ></textarea>
                  <div className='items-center w-full'>
                    <button id='button' onClick={() => coisa(nameValue, emailValue, messageValue)} className='p-5 w-full mt-10 bg-white text-black rounded-xl'> Enviar </button>
                  </div>
                  </div>
                </div>

            </div>
          </section>

    </>
  )
}

export default App
