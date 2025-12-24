import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    NavigationMenu
} from "@/components/ui/navigation-menu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


import { User } from "lucide-react";
import { Link } from "react-router";
import Logo from "../../assets/images/logo.png";
import { ModeToggle } from "./ModeToggler";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/feature", label: "Features", role: "PUBLIC" },
  { href: "/pricing", label: "Pricing", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/faq", label: "FAQ", role: "PUBLIC" },
//   { href: "/admin", label: "Dashboard", role: role.ADMIN },
//   { href: "/user", label: "Dashboard", role: role.USER },
//   { href: "/agent", label: "Dashboard", role: role.AGENT },
];

export default function Navbar() {


  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-[#623283] text-white text-xs py-1 text-center">
        DWallet · Simplify your group’s finances with a platform →
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-8">
              {/* Mobile Menu */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="6" x2="20" y2="6" />
                      <line x1="4" y1="12" x2="20" y2="12" />
                      <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                  </Button>
                </PopoverTrigger>

                <PopoverContent align="start" className="w-56 md:hidden">
              
                </PopoverContent>
              </Popover>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-blue-700 lowercase">
                  dWallet
                </span>
              </Link>

              {/* Desktop Navigation */}
              <NavigationMenu className="hidden md:flex">
               
              </NavigationMenu>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <ModeToggle />

              
                
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full h-9 px-3 flex items-center gap-2"
                    >
                     
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-48">
                   
                    <DropdownMenuSeparator />

                   

                    <DropdownMenuItem asChild>
                      <Link to="/profile">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
