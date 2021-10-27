import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { ContentBox as Content } from 'components/Content/content.styles'

import { FooterContainer, SectionFooter, FooterLink } from './footer.styles'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <FooterContainer bg="nord5">
      <Content>
        <SectionFooter>
          <FooterLink href="https://github.com/LuisFOsG" target="_blank" color="nord2">GitHub</FooterLink>
          <FooterLink href="https://twitter.com/LuisFOsG_" target="_blank" color="nord2">Twitter</FooterLink>
          <Link href="/blog" passHref>
            <FooterLink color="nord2">Blog</FooterLink>
          </Link>
          <FooterLink href="mailto:luisfosgdev@gmail.com" target="_blank" color="nord2">{ t('email') }</FooterLink>
          <Link href="/contact" passHref>
            <FooterLink color="nord2">{ t('contact') }</FooterLink>
          </Link>
        </SectionFooter>
      </Content>
    </FooterContainer>
  )
}

export default Footer
