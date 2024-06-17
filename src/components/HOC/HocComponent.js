import Sidebar from "../sidebar/Sidebar";

const WithSidebar = (WrapedCompenet) => {
  return (prop) => (
    <div className="flex bg-gray-100 ">
      <div className="w[30%] ml-40">
        <Sidebar />
      </div>

      <div className="w-[70%] mr-40">
        <WrapedCompenet {...prop} />
      </div>
    </div>
  );
};

export default WithSidebar;
