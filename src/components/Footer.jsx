const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center p-3">
      <small className="text-center text-sm text-slate-400 dark:text-gray-300">
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/marilynsaravia/"
          target="_blank"
          /* 'rel="noopener noreferrer"' is added for security reasons:
              it prevents the new tab from gaining access to the window.opener property,
              and avoids leaking the referrer information. */
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-400"
        >
          Marilyn Saravia
        </a>
      </small>
    </footer>
  );
};

export default Footer
