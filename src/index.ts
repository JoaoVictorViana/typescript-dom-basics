type Componente<T = any> = {
    variables: T
    init: () => void
    render: () => void
}

type MenuItem = {
    label: string
    link: string
}

type NavbarVariables = {
    container: HTMLElement | null
    menu: Array<MenuItem>
}

const Navbar: Componente<NavbarVariables> = {
    variables: {
        container: document.querySelector("#navbar"),
        menu: []
    },
    init: function () {
        this.variables.menu = [
            {
                label: 'Home',
                link: '/'
            },
            {
                label: 'google',
                link: 'http://google.com'
            },
            {
                label: 'teste',
                link: '/test'
            }
        ]

        this.render()
    },
    render: function() {
        if (!this.variables.container) {
            alert('Sem navbar')
            return;
        }

        this.variables.container.innerHTML = `
            <ul>
            ${this.variables.menu.map((item) => `
                <li><a href="${item.link}">${item.label}</a></li>
            `).join("")}
            </ul>
        `
    }
}


type FunctionComponente = () => Componente

const renderComponente: FunctionComponente = () => Navbar;

renderComponente().init()

