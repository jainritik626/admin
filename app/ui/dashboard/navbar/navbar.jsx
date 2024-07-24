import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 mr-8 p-2 shadow-md z-50 flex items-center">
      <div className="flex-1">
        <div>Welcome</div>
        <div>John Smith</div>
      </div>
      <div className="ml-4">
        <Image
          src="/Rectangle 77.png" 
          alt="Icon"
          width={36} 
          height={36} 
        />
      </div>
    </div>
  );
};

export default Navbar;
