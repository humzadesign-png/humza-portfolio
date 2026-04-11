export default function Footer() {
  return (
    <footer>
      <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '0.95rem', color: 'var(--text)' }}>
        humzadesign<span style={{ color: 'var(--accent)' }}>.</span>
      </span>
      <div>&copy; 2025 Humza Saeed. All rights reserved.</div>
      <div className="footer-links">
        <a href="mailto:humzadesign@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/humza-saeed-7b3761158" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}
