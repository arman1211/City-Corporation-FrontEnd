import img from "../../../assets/authority.jpg";
const AuthorityProfile = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:w-4/5 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="authority image"
                    src={img}
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                Authority
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityProfile;
