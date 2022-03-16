import ActiveLink from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Contact',
        href: '/contact',
    },
    {
        text: 'Pricing',
        href: '/pricing',
    },
]

export default function NavBar() {
    return (
        <nav>
            {menuItems.map(({ text, href }, key) => (
                <ActiveLink text={text} href={href} key={key} />
            ))}
        </nav>
    )
}
