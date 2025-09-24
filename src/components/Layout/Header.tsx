import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/Logo/logo.svg'

const navigation = [
    { name: 'Creations', href: '#Creations' },
    { name: 'Expertise', href: '#Expertise' },
    { name: 'Passion', href: '#Passion' },
    { name: 'Inspirations', href: '#' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface HeaderProps {
    activePage?: string
    onNavigate?: (page: string) => void
}

export default function Header({ activePage, onNavigate }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleNavigation = (itemName: string) => {
        if (onNavigate) {
            onNavigate(itemName.toLowerCase())
        }
        setMobileMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-br from-slate-900/80 via-sky-900/60 to-cyan-900/40 border-b border-cyan-200/30 shadow-lg">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <a href="Home" className="-m-1.5 p-1.5">
                    <span className="sr-only">Heavenly Flowers</span>
                    <img
                        alt="Fleurs du Ciel"
                        src={logo}
                        className="h-10 w-auto lg:h-12 dark:hidden"
                    />
                    <img
                        alt="Fleurs du Ciel"
                        src={logo}
                        className="h-10 w-auto lg:h-12 not-dark:hidden"
                    />
                </a>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 rounded-md p-2.5 text-white"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <button
                            type="button"
                            key={item.name}
                            onClick={() => handleNavigation(item.name)}
                            className={classNames(
                                'text-base font-semibold transition-colors focus:outline-none focus:text-sky-200',
                                item.name.toLowerCase() === activePage
                                    ? 'text-sky-200'
                                    : 'text-white hover:text-sky-200'
                            )}
                        >
                            {item.name}
                        </button>
                    ))}
                    {/* Cart */}
                    <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-white group-hover:text-sky-200 transition-colors"
                        />
                        <span className="ml-2 text-sm font-semibold text-slate-500 group-hover:text-sky-200 transition-colors">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-sky-400/30 via-cyan-300/25 to-sky-500/30 backdrop-blur-lg border-l border-white/20 p-6 sm:max-w-sm">
                    <div className="flex items-center justify-between">
                        <a href="Home" className="-m-1.5 p-1.5">
                            <span className="sr-only">Heavenly Flowers</span>
                            <img
                                alt="Fleurs du Ciel"
                                src={logo}
                                className="h-10 w-auto dark:hidden"
                            />
                            <img
                                alt="Fleurs du Ciel"
                                src={logo}
                                className="h-10 w-auto not-dark:hidden"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-white hover:text-sky-200 hover:bg-white/10 transition-colors"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-7" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/20">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <button
                                        type="button"
                                        key={item.name}
                                        onClick={() => handleNavigation(item.name)}
                                        className={classNames(
                                            '-mx-3 block rounded-lg px-3 py-3 text-lg font-semibold text-white transition-all duration-200 backdrop-blur-sm w-full text-left focus:outline-none focus:bg-white/20 focus:text-cyan-100',
                                            item.name.toLowerCase() === activePage
                                                ? 'bg-white/20 text-cyan-100'
                                                : 'hover:bg-white/20 hover:text-cyan-100'
                                        )}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            <div className="py-6">
                                {/* Cart */}
                                <a href="#" className="group -m-2 flex items-center p-2">
                                    <ShoppingBagIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0 text-white group-hover:text-sky-200 transition-colors"
                                    />
                                    <span className="ml-2 text-sm font-semibold text-slate-500 group-hover:text-sky-200 transition-colors">0</span>
                                    <span className="sr-only">items in cart, view bag</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}