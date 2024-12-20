import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import Image from "next/image";

const navItems = {
  "/experience": {name: "Experience"},
  "/projects": { name: "Projects" },
  // "/photos": { name: "Photos" },
};

export function Navbar() {
  const logoSize = 80
  return (
    <nav className="py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            <div className="flex flex-row items-center gap-5">
              <Image 
                src="/img/White-Crane-Logo.png"
                alt="Crane Logo"
                className="hidden dark:block"
                width={logoSize}
                height={logoSize}
                priority
                unoptimized
              />
              <Image
                src="/img/Black-Crane-Logo.png"
                alt="Crane Logo"
                className="dark:hidden"
                width={logoSize}
                height={logoSize}
                priority
                unoptimized
              />
              <p className="text-gradient-hover">Sam Crane</p>
            </div>
            
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="text-gradient-hover flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
