import { Button } from "../../components/atoms/Button"
import { InputText } from "../../components/molecules/InputText"
import { Link } from "../../components/molecules/link"
import { SidebarHero } from "../../components/organism/SidebarHero"
import { TemplateContainer, 
  TemplateContent, 
  TemplateMainHeroSection 
} from "../../components/templates"


export const Login = () => {
  return (
    <TemplateContainer>
      <TemplateContent>
        <SidebarHero />
        <TemplateMainHeroSection>
          <h1 className='font-bold text-3xl'>Controle seus gastos</h1>
          <form className='flex flex-col w-full gap-4 max-w-xs'>      
            <InputText label='email' type="email" />
            <InputText label='senha' type="password" />
            <Button disabled>Log In</Button>
          </form>
          <Link href='/registrer'>Criar Conta</Link>
        </TemplateMainHeroSection>
      </TemplateContent>
    </TemplateContainer>
  )
}
