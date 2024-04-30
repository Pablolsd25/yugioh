const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <font></font>
      <div className="navbar-start">
        <font></font>
        <div className="dropdown">
          <font></font>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <font></font>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <font></font>
          </div>
          <font></font>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <font></font>
            <li>
              <a>Homepage</a>
            </li>
            <font></font>
            <li>
              <a>Portfolio</a>
            </li>
            <font></font>
            <li>
              <a>About</a>
            </li>
            <font></font>
          </ul>
          <font></font>
        </div>
        <font></font>
      </div>
      <font></font>
      <div className="navbar-center">
        <font></font>
        <a className="btn btn-ghost text-xl">¡Yu-gi-oh!</a>
        <font></font>
      </div>
      <font></font>
      <div className="navbar-end">
        <font></font>
        <button className="btn btn-ghost btn-circle">
          <font></font>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <font></font>
        </button>
        <font></font>
        <button className="btn btn-ghost btn-circle">
          <font></font>

          <font></font>
        </button>
        <font></font>
      </div>
      <font></font>
    </div>
  );
};

export default NavBar;
