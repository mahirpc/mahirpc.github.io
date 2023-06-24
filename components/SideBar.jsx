import Link from 'next/link'

const SideBar = ({selected,setSelected}) => {
    
    const handleSelectItem = (e) => {
        setSelected(e.target.textContent.toLowerCase() === 'home' || 
            e.target.textContent.toLowerCase() === 'pc' ?
            '/' : 
            '/'+e.target.textContent.toLowerCase())
    }
    const styleOnSelected = 'pt-1 pb-1 pl-3 pr-3 rounded-sm border-solid border-slate-300 bg-gray-200 transition-all capitalize'
    const styleOnNotSelected = 'pt-1 pb-1 pl-3 pr-3 text-slate-500 transition-all lowercase hover:text-slate-800'
    return (
        <section className='side-texts flex flex-col justify-center
                             items-start md:sticky md:top-0 md:w-28'>
            <Link href="/" 
                className='logo text-3xl mb-2 md:text-5xl md:mb-7 ml-2'
                onClick={handleSelectItem}
            >
                <h1>Pc</h1>
            </Link>
            <div className='flex flex-row justify-start fade
                             md:flex md:flex-col md:justify-start 
                             flex-wrap w-full'>
                <Link href='/'
                    className= { 
                        selected === '/' ? 
                        styleOnSelected :
                        styleOnNotSelected}
                    onClick={handleSelectItem}
                >
                    <p>home</p>
                </Link>
                <Link href='/about'
                    className= { 
                        selected === '/about' ? 
                        styleOnSelected :
                        styleOnNotSelected}
                    onClick={handleSelectItem}
                >
                    <p>about</p>
                </Link>
                <Link href='/education'
                    className= { 
                        selected === '/education' ? 
                        styleOnSelected :
                        styleOnNotSelected}
                    onClick={handleSelectItem}
                >
                    <p>education</p>
                </Link>
                <Link href='/projects'
                    className= { 
                        selected === '/projects' ? 
                        styleOnSelected :
                        styleOnNotSelected}
                    onClick={handleSelectItem}
                >
                    <p>projects</p>
                </Link>
                <Link href='/contact'
                    className= { 
                        selected === '/contact' ? 
                        styleOnSelected :
                        styleOnNotSelected}
                    onClick={handleSelectItem}
                >
                    <p>contact</p>
                </Link>
            </div>
        </section>
    )
    }

export default SideBar
