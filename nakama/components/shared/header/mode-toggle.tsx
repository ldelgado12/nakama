'use client';
import { useState, useEffect} from "react";
import { DropdownMenu, DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuContent,
    DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ModeToggle = () => {
    const [mounted, setMounted] = useState (false);
    const { theme, setTheme } = useTheme();

    useEffect (() =>{
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                { theme === 'system' ?(
                    <SunMoon/>
                ) : theme === 'dark' ? (
                    <MoonIcon/>
                ) : <SunIcon/> }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Apariencia</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system') }>
                Sistema
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark') }>
                Oscuro
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked={theme === 'ligth'} onClick={() => setTheme('ligth') }>
                Claro
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>;
}
 
export default ModeToggle;