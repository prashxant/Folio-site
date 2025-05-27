function Intro() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <span className="mt-4 sm:mt-0 sm:ml-5 text-center sm:text-left">
          <p className="font-bold text-3xl sm:text-4xl">Prashant Sharma</p>
          <p className="py-1 opacity-50 text-sm sm:text-base">
            Trying to understand why tech is so fascinating
          </p>
        </span>
        <img
          className="h-24 w-24 sm:h-32 sm:w-32 mt-4 sm:mt-0 mr-0 sm:mr-5 border rounded-full"
          src="./fevicon 1-modified.png"
          alt="Profile"
        />
      </div>
      <div className="mt-6">
        <p className="font-bold text-2xl sm:text-3xl ml-0 sm:ml-5 text-center sm:text-left">
          Proof of Work
        </p>
        <p className="py-1 opacity-50 text-sm sm:text-base ml-0 sm:ml-5 text-center sm:text-left">
          Stuff I tried to build and learn till now
        </p>
      </div>
    </div>
  );
}

export default Intro;