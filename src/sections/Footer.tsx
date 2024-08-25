import ArrowUp from '@/assets/icons/arrow-up-right.svg'



const links =[
  {
    title:'YouTube',
    href:'#'
  },
  {
    title:'Twitter',
    href:'#'
  },
  {
    title:'Instagram',
    href:'#'
  },
  {
    title:'LinkedIn',
    href:'#'
  },
]

export const Footer = () => {
  return <footer className='relative -z-10 overflow-x-clip'>
    <div className='absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>
    <div className="container">
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row  md:justify-between'>
          <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
          <nav className='flex-col flex items-center gap-8 md:flex-row'>
            {links.map(l=>(
              <a href={l.href} className="inline-flex items-center gap-1.5" key={l.title}>
                <span className='font-semibold'>{l.title}</span>
                <ArrowUp className='size-4'/>
              </a>
            ))}
          </nav>
        </div>
    </div>
  </footer>;
};
