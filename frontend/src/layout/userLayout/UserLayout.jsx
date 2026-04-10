import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

function UserLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r bg-[#181818] hidden md:block">
        <Sidebar />
      </aside>

      {/* Content */}
      <div className="bg-[#212121] flex flex-1 flex-col">
        
        {/* Navbar */}
        <header className="h-16 shrink-0 ">
          <Navbar />
        </header>

        {/* Page */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>

      </div>
    </div>
  );
}

export default UserLayout;
