import { FooterContainer, SectionFooter, FooterLink } from './footer.styles'

import { ContentBox as Content } from 'components/content/content.styles'
import useTranslation from 'next-translate/useTranslation'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <FooterContainer bg="nord5">
      <Content>
        <SectionFooter>
          <FooterLink href="https://github.com/LuisFOsG" target="_blank" color="nord2">GitHub</FooterLink>
          <FooterLink href="https://twitter.com/LuisFOsG_" target="_blank" color="nord2">Twitter</FooterLink>
          <FooterLink href="mailto:luisfosgdev@gmail.com" target="_blank" color="nord2">{ t('email') }</FooterLink>
        </SectionFooter>
      </Content>
    </FooterContainer>
  )
}

export default Footer
