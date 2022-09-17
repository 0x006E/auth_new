function Layout({ children }) {
  return (
    <div className="container px-6 mx-auto">
      <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
        <div className="w-full md:w-full lg:w-6/12 mx-auto md:mx-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
