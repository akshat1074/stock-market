'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import NavItems from "@/components/Navitems";
import {signOut} from "@/lib/actions/auth.action";

const UserDropdown = ({ user, initialStocks }: {user: User, initialStocks: StockWithWatchlistStatus[]}) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                    <AvatarImage src="data:image/jpeg;base64,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" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className='text-base font-medium text-gray-400'>
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="data:image/jpeg;base64,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" />
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className='text-base font-medium text-gray-400'>
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600"/>
                <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
                <nav className="sm:hidden">
                    <NavItems initialStocks={initialStocks} />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown