export default function ColorChange() {
    return (
      <div className="dropdown mt-2 mb-2">
        <div tabIndex={0} role="button" className="btn text-primary-content bg-primary">
          Keycaps
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-primary rounded-box z-[1] w-52 p-2 shadow-2xl overflow-y-scroll">
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Olivia"
              value="olivia" 
              onChange={() => localStorage.setItem("current", "olivia")} />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Botanical"
              value="botanical" 
              onChange={() => localStorage.setItem("current", "botanical")} />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Nimbus"
              value="nimbus" 
              onChange={() => localStorage.setItem("current", "nimbus")} />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Delta"
              value="delta"
              onChange={() => localStorage.setItem("current", "delta")} />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Mizu"
              value="mizu"
              onChange={() => localStorage.setItem("current", "mizu")} />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Yuru"
              value="yuru"
              onChange={() => localStorage.setItem("current", "yuru")} />
          </li>
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start text-primary-content"
              aria-label="Serika"
              value="serika"
              onChange={() => localStorage.setItem("current", "serika")} />
          </li>
        </ul>
      </div>
    );
  }
  