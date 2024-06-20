import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    // <div className=" flex justify-center items-center">
    //   return (
    //   <Circles
    //     height="80"
    //     width="80"
    //     color="#4fa94d"
    //     ariaLabel="circles-loading"
    //     wrapperStyle={{}}
    //     wrapperClass=""
    //     visible={true}
    //   />
    //   );
    // </div>
    <div className="flex justify-center items-center min-h-screen">
      <Circles color="	#008080" height={80} width={80} />
    </div>
  );
}

export default Loader;
