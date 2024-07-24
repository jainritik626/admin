"use client";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard, MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Opportunities",
    path: "/dashboard/opportunities",
    icon: <MdDashboard />,
  },
  {
    title: "Assigned to me",
    path: "/dashboard/assigned-to-me",
    icon: <MdDashboard />,
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="h-dvh mx-4 px-2">
      <div className="flex flex-col h-svh justify-between">
        <div className="pt-6">
          <Image src={"/logo.png"} alt="" width="50" height="50" />

          <hr className="my-6 h-0.5 border-t-2 bg-neutral-100 dark:bg-white/10" />

          <ul className='flex flex-col gap-4'>
            {menuItems.map((item) => {
              const isActive = pathName === item.path;
              return (
                <li key={item.title} className="border-2 rounded-md text-xl font-medium">
                  <Link href={item.path}>
                    <div
                      className={`flex items-center p-4 gap-2 ${
                        isActive ? "bg-[#f2f2f2] rounded-md" : ""
                      }`}
                    >
                      {item.icon}
                      {item.title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="flex items-center cursor-pointer p-4 gap-2"
          >
            <MdLogout />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
