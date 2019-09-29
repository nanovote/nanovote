import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-black">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-white" to="/">
          <svg height="39" width="85" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="M65.943 38.057h-46.98C8.49 38.057 0 29.566 0 19.094 0 8.623 8.49.132 18.962.132h47.123c10.33 0 18.82 8.49 18.82 18.962s-8.49 18.963-18.962 18.963zM18.963 3.528A15.521 15.521 0 0 0 3.395 19.094 15.521 15.521 0 0 0 18.962 34.66h47.123A15.521 15.521 0 0 0 81.65 19.094 15.521 15.521 0 0 0 66.085 3.528H18.962z"/><path d="M32.406 21.925c-.566 0-1.132-.283-1.415-.708-1.133-1.698-2.972-2.689-4.953-2.689-1.981 0-3.821.99-4.953 2.689-.566.849-1.557.99-2.406.425-.849-.567-.99-1.557-.424-2.406 1.698-2.547 4.67-4.104 7.783-4.104 3.113 0 6.085 1.557 7.783 4.104.566.849.283 1.84-.425 2.406-.283.141-.566.283-.99.283zM65.66 21.925c-.566 0-1.132-.283-1.415-.708-1.132-1.698-2.971-2.689-4.953-2.689-1.98 0-3.82.99-4.952 2.689-.566.849-1.557.99-2.406.425-.85-.567-.99-1.557-.425-2.406 1.699-2.547 4.67-4.104 7.783-4.104 3.114 0 6.085 1.557 7.783 4.104.567.849.283 1.84-.424 2.406-.425.141-.708.283-.99.283z"/></g></svg>
          <span className="ml-4 font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
