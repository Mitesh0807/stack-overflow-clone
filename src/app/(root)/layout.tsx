// import MobileSidebar from '@/components/sidebar/MobileSidebar'
// import RighNav from '@/components/sidebar/sidebar'
// import Sidebar1 from '@/components/sidebar/sidebar1'
// import Topbar from '@/components/topbar/Topbar'
// import { TooltipProvider } from '@/components/ui/tooltip'
// import React from 'react'

// const HomeLayout = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <>
//             <TooltipProvider>
//                 <div className='flex min-h-screen w-full flex-col bg-muted/40'>
//                     <Sidebar1 />
//                     <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
//                         <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
//                             <MobileSidebar />
//                             <Topbar />
//                         </header>
//                     </div>
//                     <div className="flex">
//                         <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
//                             {/* <div className="mx-auto w-full max-w-5xl"> */}
//                             Content
//                             {children}

//                             {/* </div> */}
//                         </section>
//                         <RighNav />
//                     </div>
//                 </div>
//             </TooltipProvider >
//         </>
//     )
// }

// export default HomeLayout

// "use client"
// import MobileSidebar from '@/components/sidebar/MobileSidebar'
// import RighNav from '@/components/sidebar/sidebar'
// import Sidebar1 from '@/components/sidebar/sidebar1'
// import Topbar from '@/components/topbar/Topbar'
// import { TooltipProvider } from '@/components/ui/tooltip'
// import React from 'react'

// const HomeLayout = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <>
//             <TooltipProvider>
//                 <div className="flex min-h-screen w-full flex-col bg-muted/40">
//                     <Sidebar1 />
//                     <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
//                         <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
//                             <MobileSidebar />
//                             <Topbar />
//                         </div>
//                     </div>
//                     <div className="flex w-full">
//                         <div className="flex min-h-screen flex-1 grid grid-cols-[1fr_300px] gap-6 px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
//                             <div className="flex flex-col">
//                                 {/* <div className="mx-auto w-full max-w-5xl"> */}
//                                 {children}
//                                 {/* </div> */}
//                             </div>
//                             <RighNav />
//                         </div>
//                     </div>
//                 </div>
//             </TooltipProvider>
//         </>
//     )
// }

// export default HomeLayout

"use client"
import MobileSidebar from '@/components/sidebar/MobileSidebar'
import RighNav from '@/components/sidebar/sidebar'
import Sidebar1 from '@/components/sidebar/sidebar1'
import Topbar from '@/components/topbar/Topbar'
import { TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TooltipProvider>
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <Sidebar1 />
                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                            <MobileSidebar />
                            <Topbar />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex min-h-screen flex-1 grid grid-cols-[1fr_300px] gap-6 px-6 pb-6 pt-0 max-md:pb-14 sm:px-14"> {/* Adjusted pt-36 to pt-0 */}
                            <div className="flex flex-col">
                                {/* <div className="mx-auto w-full max-w-5xl"> */}
                                {children}
                                {/* </div> */}
                            </div>
                            <RighNav />
                        </div>
                    </div>
                </div>
            </TooltipProvider>
        </>
    )
}

export default HomeLayout
