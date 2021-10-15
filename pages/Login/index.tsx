import { InputText } from "../../src/components/molecules/InputText"


export const Login = () => {
  return (
    <div className='w-screen h-screen bg-gray-50 flex justify-center'>
      <div className='w-full h-full max-w-screen-lg grid grid-cols-2'>
        <aside className='flex justify-center items-center'>
          <img src="/hero-image.png" alt="" />
        </aside>
        <main className='flex flex-col justify-center items-center gap-16'>
          <h1 className='font-bold text-3xl'>Controle seus gastos</h1>
          <form className='flex flex-col w-full gap-2'>      
            <InputText label='email'/>
            <InputText label='senha' />
            <button>Log In</button>
          </form>
          <a href="/registrer">Criar conta</a>
        </main>
      </div>
    </div>
  )
}
