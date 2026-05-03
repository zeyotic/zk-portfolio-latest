export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <span>© {year} Zeyad Khaled</span>
        <nav className="site-footer__social" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/zeyotic/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
