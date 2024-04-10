import MobileSidebar from '@/components/sidebar/MobileSidebar'
import RighNav from '@/components/sidebar/RightSidebar'
import LeftSideBar from '@/components/sidebar/LeftSidebar'
import Topbar from '@/components/topbar/Topbar'
import { TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TooltipProvider>
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <LeftSideBar />
                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <div className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                            <MobileSidebar />
                            <Topbar />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="flex min-h-screen flex-1 grid grid-cols-[1fr_300px] gap-6 px-6 pb-6 pt-0 max-md:pb-14 sm:px-14"> {/* Adjusted pt-36 to pt-0 */}
                            <div className="flex flex-col">
                                {children}
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
