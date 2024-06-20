import { Container } from '@mui/material'
import AptilinkAppBar from './_components/Navbar/Navbar'




export default function TestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Container>
            <AptilinkAppBar />
            {children}
        </Container>

    )
}


