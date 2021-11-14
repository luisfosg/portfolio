import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import { ContentBox as Content } from 'components/Content/content.styles'

import { FooterContainer, SectionFooter, FooterLink } from './footer.styles'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <FooterContainer>
      <Content>
        <SectionFooter>
          <FooterLink href="https://github.com/LuisFOsG" target="_blank">GitHub</FooterLink>
          <FooterLink href="https://twitter.com/LuisFOsG_" target="_blank">Twitter</FooterLink>
          <Link href="/blog" passHref>
            <FooterLink>Blog</FooterLink>
          </Link>
          <Link href="/contact" passHref>
            <FooterLink>{ t('contact') }</FooterLink>
          </Link>
        </SectionFooter>
      </Content>
    </FooterContainer>
  )
}

export default Footer
