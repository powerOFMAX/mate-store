import { Container } from 'semantic-ui-react'
import NavBar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
