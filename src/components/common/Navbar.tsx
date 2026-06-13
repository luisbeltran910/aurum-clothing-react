import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex items-center justify-between py-4'>
            <div className='text-xl font-bold tracking-wider text-gold'>Aurum</div>
            <div className='flex gap-6 text-sm uppercase tracking-medium'>
                <Link href="/products" className='hover:text-gold transition'>Shop All</Link>
                <Link href="/categories/men" className='hover:text-gold transition'>Men</Link>
                <Link href="/categories/women" className='hover:text-gold transition'>Women</Link>
            </div>
            <div className='flex items-center gap-4'>
                {/* TODO: Will add cart icon later */}
                <span className='cursor-pointer'>Cart (0)</span>
            </div>
        </nav>
    );
}