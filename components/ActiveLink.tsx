import Link from "next/dist/client/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

const activeStyle: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
    margin: "0 1rem"
}

const defaultStyle: CSSProperties = {    
    margin: "0 1rem"
}

interface Props {
    text: string
    href: string
}

const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a style={asPath === href ? activeStyle : defaultStyle}>{text}</a>
        </Link>
    )
}

export default ActiveLink