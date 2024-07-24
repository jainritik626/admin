import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="basis-1/5 bg-[var(--bgsoft)] ">
        <Sidebar />
      </div>
      <div className="basis-4/5 p-4">
        <Navbar />
        <div className="bg-white rounded-lg mt-16 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
