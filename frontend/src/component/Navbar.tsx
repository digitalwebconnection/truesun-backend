import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  Menu,
  X,
  Sun,  
  ChevronDown,
  ChevronRight,
  Wrench,
  Users2,
} from "lucide-react";
import logo from '../assets/truesun.png';
/* ============================ Utilities ============================ */
function cn(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

/* ============================ Types & Data ============================ */
type ChildLink = { label: string; to: string };
type ServiceGroup = {
  key: string;
  label: string;
  icon: ReactNode;
  to?: string;
  children?: ChildLink[];
};

const SERVICES: ServiceGroup[] = [
  {
    key: "rooftop",
    label: "Rooftop Solar",
    icon: <Wrench className="h-4 w-4" />,
    children: [
      { label: "C&I", to: "/services/rooftop/C&I" },
      { label: "Residential", to: "/services/rooftop/residential" },
      { label: "O&M ", to: "/services/rooftop/O&M" },
      { label: "BESS ", to: "/services/rooftop/BESS" },
      { label: "Subsidy ", to: "/services/rooftop/Subsidy" },
      // { label: "Solar Finance Solutions ", to: "/services/rooftop/Solar-Finance-Solutions" },
    ],
  },
  {
    key: "consulting",
    label: "Consulting",
    icon: <Users2 className="h-4 w-4" />,
    children: [
      {
        label: "Carbon Footprinting",
        to: "/services/consulting/carbon-footprinting",
      },
    ],
  },
];

/* ============================ Services Menu (Desktop) ============================ */
function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string>(SERVICES[0].key);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const active = SERVICES.find((s) => s.key === activeKey);

  // Close dropdown on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Click outside to close
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center gap-1">
      {/* Text: navigates to /services page */}
      <NavLink
        to="/services"
        className={({ isActive }) =>
          cn(
            "font-medium text-gray-800 transition-colors hover:text-[#FC763A]",
            isActive && "text-[#FC763A]"
          )
        }
      >
        Our Services
      </NavLink>

      {/* Small arrow button: only toggles dropdown */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Toggle services menu"
        className={cn(
          "inline-flex items-center justify-center rounded-full p-1 text-gray-700 hover:bg-gray-100 hover:text-[#FC763A] transition-colors"
        )}
      >
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-0 top-full mt-3 flex rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black/5 z-100"
          )}
          role="menu"
          aria-label="Services"
        >
          {/* Left panel: parent items */}
          <div className="w-48 rounded-lg p-1">
            {SERVICES.map((s) => {
              const ParentInner = (
                <>
                  <span className="text-[#FC763A]">{s.icon}</span>
                  <span>{s.label}</span>
                  <ChevronRight className="ml-auto h-4 w-4 opacity-60" />
                </>
              );

              return (
                <button
                  key={s.key}
                  type="button"
                  onMouseEnter={() => setActiveKey(s.key)}
                  onFocus={() => setActiveKey(s.key)}
                  onClick={() => {
                    setActiveKey(s.key);
                    if (!s.children?.length && s.to) {
                      navigate(s.to);
                      setOpen(false);
                    }
                  }}
                  className={cn(
                    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm",
                    s.key === activeKey
                      ? "bg-orange-50 text-[#FC763A]"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  {ParentInner}
                </button>
              );
            })}
          </div>

          {/* Right panel: children */}
          <div className="ml-2 w-64 rounded-lg bg-white p-2 shadow-lg">
            {(active?.children ?? []).map((c) => (
              <NavLink
                key={c.to}
                to={c.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block rounded-md px-3 py-2 text-sm hover:bg-orange-50",
                    isActive
                      ? "text-[#FC763A]"
                      : "text-gray-700 hover:text-[#FC763A]"
                  )
                }
              >
                {c.label}
              </NavLink>
            ))}

            {/* If parent has no children, show CTA to its page */}
            {(!active?.children || active.children.length === 0) &&
              active?.to && (
                <button
                  className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FC763A]"
                  onClick={() => {
                    navigate(active.to!);
                    setOpen(false);
                  }}
                >
                  View {active.label}
                </button>
              )}
          </div>
        </div>
      )}
    </div>
  );
}


/* ============================ Mobile Services Menu ============================ */
function MobileServicesMenu({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-2">
      {/* Row: text navigates, arrow toggles dropdown */}
      <div
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-4 text-xl font-semibold text-gray-700 transition-all duration-300 ease-out",
          "hover:bg-orange-50 hover:text-[#FC763A] hover:scale-105",
          expanded ? "bg-orange-50 text-[#FC763A]" : "",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        )}
        style={{
          transitionDelay: isOpen ? "200ms" : "0ms",
        }}
      >
        {/* MAIN LINK → /services */}
        <NavLink
          to="/services"
          onClick={() => {
            closeDrawer();
          }}
          className={({ isActive }) =>
            cn(
              "flex-1 text-left",
              isActive ? "text-[#FC763A]" : "text-gray-700"
            )
          }
        >
          Our Services
        </NavLink>

        {/* ARROW → ONLY TOGGLE DROPDOWN */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded((prev) => !prev);
          }}
          aria-expanded={expanded}
          aria-label="Toggle services submenu"
          className={cn(
            "ml-2 inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-orange-100 hover:text-[#FC763A] transition-all duration-300",
          )}
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-300",
              expanded ? "rotate-180" : "rotate-0"
            )}
          />
        </button>
      </div>

      {/* Children container */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          expanded ? "max-h-[480px] opacity-100 mt-1" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-3 pl-2">
          {SERVICES.map((group) => (
            <div key={group.key} className="border-l border-orange-100 pl-3">
              <div className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                <span className="text-[#FC763A]">{group.icon}</span>
                <span>{group.label}</span>
              </div>

              <div className="space-y-1">
                {group.children?.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-md px-3 py-2 text-base transition-all duration-200",
                        "text-gray-700 hover:bg-orange-50 hover:text-[#FC763A]",
                        isActive ? "bg-orange-100 text-[#FC763A]" : ""
                      )
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}

                {!group.children?.length && group.to && (
                  <NavLink
                    to={group.to}
                    onClick={closeDrawer}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-md px-3 py-2 text-base transition-all duration-200",
                        "text-gray-700 hover:bg-orange-50 hover:text-[#FC763A]",
                        isActive ? "bg-orange-100 text-[#FC763A]" : ""
                      )
                    }
                  >
                    View {group.label}
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================ Navbar ============================ */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile drawer state
  const [hidden, setHidden] = useState(false); // hide-on-scroll
  const [elevated, setElevated] = useState(false); // shadow when scrolling
  const lastY = useRef(0);
  const ticking = useRef(false);

  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Hide-on-scroll + elevation (desktop & mobile)
  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const diff = y - lastY.current;

        // add small shadow when not at very top
        setElevated(y > 4);

        // only auto-hide if drawer closed (mobile)
        if (!isOpen) {
          const THRESHOLD = 8;
          if (diff > THRESHOLD) {
            // scrolling down
            setHidden(true);
          } else if (diff < -THRESHOLD) {
            // scrolling up
            setHidden(false);
          }
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkBase =
    "transition-colors duration-300 hover:text-[#FC763A]";
  const activeClass = "text-[#FC763A]";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full",
        "transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
      role="banner"
    >
      {/* Top shell with blur + optional shadow */}
      <div
        className={cn(
          "bg-white/90 backdrop-blur-md",
          elevated ? "shadow-lg ring-1 ring-black/5" : "shadow-none"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 w-40"
            aria-label="Home"
          >
            <img src={logo} alt="" />

          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center   gap-8 font-medium text-gray-800 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(linkBase, isActive && activeClass)
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                cn(linkBase, isActive && activeClass)
              }
            >
              About Us
            </NavLink>

            <ServicesMenu />

            <NavLink
              to="/solar-finance"
              className={({ isActive }) =>
                cn(linkBase, isActive && activeClass)
              }
            >
              Solar Finance
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                cn(linkBase, isActive && activeClass)
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) =>
                cn(linkBase, isActive && activeClass)
              }
            >
              Careers
            </NavLink>
            <NavLink
              to="/Knowledgwe"
              className={({ isActive }) =>
                cn(linkBase, isActive && activeClass)
              }
            >
              Knowledgwe HUB
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                cn(
                  "rounded-full bg-[#FC763A] px-5 py-2 text-white shadow-lg transition hover:bg-[#FC763A]",
                  isActive && "ring-2 ring-orange-300 ring-offset-2"
                )
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className={cn(
              "relative text-gray-800 transition-all duration-300 hover:text-[#FC763A] md:hidden",
              isOpen ? "rotate-180" : "rotate-0"
            )}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay (dark background behind drawer) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-all duration-500 ease-in-out",
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl transition-all duration-500 ease-in-out md:hidden",
          isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"
        )}
      >
        {/* Drawer header with logo + close btn */}
        <div
          className={cn(
            "flex items-center justify-between border-b border-gray-100 px-6 py-4 transition-all duration-500 ease-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <Sun className="h-8 w-8 text-[#FC763A]" />
            <h2 className="text-2xl font-extrabold text-gray-900">
              True<span className="text-[#FC763A]">Sun</span>
            </h2>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 text-gray-800 transition-all duration-200 hover:bg-gray-100 hover:rotate-90"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex -mt-5 flex-col space-y-2 bg-white p-6 font-semibold">
          {[
            { name: "Home", to: "/" },
            { name: "About us", to: "/about" },
            { name: "Solar Finance", to: "/solar-finance" },
            { name: "Projects", to: "/projects" },
            { name: "Knowledgwe HUB", to: "/Knowledgwe" },
            { name: "Careers", to: "/careers" },
          ].map(({ name, to }, index) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "transform rounded-lg px-3 py-4 text-xl transition-all duration-300 ease-out",
                  "text-gray-700 hover:bg-orange-50 hover:text-[#FC763A] hover:scale-105",
                  isActive ? "bg-orange-100 text-[#FC763A]" : "",
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                )
              }
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {name}
            </NavLink>
          ))}

          {/* Mobile Services Accordion (shows children) */}
          <MobileServicesMenu
            isOpen={isOpen}
            closeDrawer={() => setIsOpen(false)}
          />

          {/* CTA button */}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "mt-6 w-full transform rounded-xl bg-[#FC763A] py-3 text-center text-lg text-white shadow-xl transition-all duration-300 ease-out",
              "hover:bg-[#FC763A] hover:scale-105 focus:ring-4 focus:ring-orange-300",
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "1000ms" : "0ms" }}
          >
            Get a Free Quote
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
