// React Imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ShadcnUI Imports
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Image Imports
import proposalImage from "../../../public/proposals/proposal-8.jpg";
import weddingImage from "../../../public/wedding/wedding-8.jpg";
import ReceptionImage from "../../../public/reception/reception-8.jpg";

export function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative z-20 w-full bg-secondary">
      {isSmallScreen ? (
        <div className="flex justify-center p-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/janes-photography/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-secondary">
                  Gallery
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex h-auto w-[280px] select-none flex-col justify-center items-center mx-auto rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md text-center">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link to="/janes-photography/proposal">Proposals</Link>
                    </li>
                    <li>
                      <Link to="/janes-photography/wedding">Weddings</Link>
                    </li>
                    <li>
                      <Link to="/janes-photography/reception">Reception</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/janes-photography/form">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ) : (
        <div className="flex justify-center p-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/janes-photography/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavLink
                to="/janes-photography/proposal"
                img={proposalImage}
                title="Proposals"
                description="Capture The first moment of Eternity!"
              />
              <NavLink
                to="/janes-photography/wedding"
                img={weddingImage}
                title="Weddings"
                description="Capture The I Do!"
              />
              <NavLink
                to="/janes-photography/reception"
                img={ReceptionImage}
                title="Receptions"
                description="Capture The Party!"
              />
              <Link to="/janes-photography/form">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
}

// Internal Component
interface Props {
  img: string;
  title: string;
  description: string;
  to: string;
}

const NavLink = ({ img, title, description, to }: Props) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-secondary">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-2 w-full">
          <li>
            <NavigationMenuLink>
              <Link
                className="flex h-auto w-[520px] select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md"
                to={to}
              >
                <figure className="w-full h-auto">
                  <img src={img} className="opacity-75 rounded-md" />
                  <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {description}
                  </p>
                </figure>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
