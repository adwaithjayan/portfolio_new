import React, { Fragment } from 'react'
import { Icons } from './Icons'
import { twMerge } from 'tailwind-merge'

export default function Toolboxs({tools,className,itemwrapper}:{tools:{title:string,iconType:React.ElementType}[],className?:string,itemwrapper?:string}) {
  return (
    <div className={twMerge('flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',className)}>
        <div className={twMerge('flex flex-none py-0.5 gap-6 pr-6',itemwrapper)}>
          {[...new Array(2)].fill(0).map((_,i)=>(
            <Fragment key={i}>

            
            {tools.map(tool=>(
                <div key={tool.title} className="inline-flex gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg items-center">
                <Icons component={tool.iconType}/>
                <span className="font-semibold">{tool.title}</span>
            </div>
            ))}

            
            </Fragment>
          ))}
        </div>

    </div>
  )
}
