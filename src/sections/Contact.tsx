import ArrowUp from '@/assets/icons/arrow-up-right.svg'
import grain from '@/assets/images/grain.jpg'
export const ContactSection = () => {
  return <div className='py-16 pt-12 lg:py-24 lg:20'>
    <div className="container">
      <div className='bg-gradient-to-r from-emerald-300 md:text-left to-sky-400 text-gray-900 p-8 rounded-3xl text-center relative'>
        <div className='absolute inset-0 opacity-5 overflow-hidden -z-10' style={{ backgroundImage: `url(${grain.src})` }}></div>
        <div className='flex flex-col gap-4 items-center  md:flex-row md:gap-16'>
<div>

    
      <h2 className='font-serif text-2xl md:text-3xl'> Let&apos;s create something amazing together</h2>
      <p className='text-sm mt-2 md:text-base'>
        Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achive your goals
      </p>
    </div>
    <div>

      <button className='text-white border border-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 bg-gray-900 w-max'>
        <span className='font-semibold'>Contact Me</span>
        <ArrowUp className='size-4'/>
      </button>
    </div>
    </div>
      </div>
    </div>
  </div>;
};
