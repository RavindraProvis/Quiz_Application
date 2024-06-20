import { ReduxProvider } from '@/redux/ReduxProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AptilinkAppBar from './aptilink/_components/Navbar/Navbar'
import { Container } from '@mui/material'
import Cookies from 'js-cookie'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Container>
            {children}
          </Container>
        </ReduxProvider>
      </body>
    </html>

  )
}

