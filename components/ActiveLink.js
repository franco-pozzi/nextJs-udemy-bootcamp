import Link from "next/dist/client/link"
import { useRouter } from "next/router"

const style = {
    color: "#0070f3",
    textDecoration: "underline",
}

function ActiveLink({ text, href }) {

    const { asPath } = useRouter()

    console.log(asPath)

    return (
        <Link href={href}>
            <a style={asPath === href ? style : null}>{text}</a>
        </Link>
    )
}

export default ActiveLink