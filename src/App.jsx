function App() {
  return (
    <div className="website">
      <header className="navbar">
        <h3 className="logo">✎ Blogify</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <button>Login</button>
        </nav>
      </header>

      <main>
        <article className="article">
          <a href="#" className="back">
            ← Back to Posts
          </a>

          <span className="category">Technology</span>

          <h1>The Future of Web Development</h1>

          <div className="info">
            <span>♟ John Doe</span>
            <span>▢ Nov 20, 2025</span>
          </div>

          <img
            className="hero"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
            alt="Technology"
          />

          <p>
            The landscape of web development is constantly evolving, and 2024
            promises to bring exciting new changes that will shape how we build
            and interact with web applications.
          </p>

          <h2>Modern Frameworks and Tools</h2>
          <p>
            The rise of modern frameworks like React, Vue, and Svelte has
            revolutionized how developers approach building user interfaces.
            These tools provide powerful abstractions that make it easier to
            create complex, interactive applications while maintaining clean and
            maintainable code.
          </p>

          <h2>Performance and User Experience</h2>
          <p>
            Web performance has become more critical than ever. Users expect
            lightning-fast load times and smooth interactions. Modern
            development focuses heavily on optimizing performance through
            techniques like code splitting, lazy loading, and efficient caching
            strategies.
          </p>

          <h2>The Rise of AI Integration</h2>
          <p>
            Artificial intelligence is becoming increasingly integrated into web
            applications, from chatbots and recommendation systems to advanced
            analytics and personalization features.
          </p>

          <h2>Web3 and Decentralization</h2>
          <p>
            The concept of Web3 and decentralized applications is gaining
            traction. Blockchain technology is being explored for various use
            cases beyond cryptocurrency, including identity management and
            content distribution.
          </p>

          <h2>Conclusion</h2>
          <p>
            The future of web development is bright and full of possibilities.
            By staying up-to-date with the latest technologies and best
            practices, developers can create amazing experiences that push the
            boundaries of what's possible on the web.
          </p>
        </article>

        <section className="related">
          <h2>Related Posts</h2>

          <div className="post-grid">
            <div className="post-card">
              <div className="image-box">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                  alt="Mastering Productivity"
                />
                <span className="tag">Productivity</span>
              </div>

              <small>▢ Nov 15, 2025</small>
              <h3>Mastering Productivity</h3>
              <p>
                Discover strategies to boost your productivity and achieve your
                goals.
              </p>
              <a href="#">Read more →</a>
            </div>

            <div className="post-card">
              <div className="image-box">
                <img
                  src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800"
                  alt="Design Principles"
                />
                <span className="tag purple">Design</span>
              </div>
              <small>▢ Nov 10, 2025</small>
              <h3>Design Principles That Matter</h3>
              <p>
                Understanding design principles is essential for building
                stunning user experiences.
              </p>
              <a href="#">Read more →</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <h3>✎ Blogify</h3>
            <p>
              Discover, read, and share stories. Explore amazing articles and
              stay informed with the latest trends.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#">Home</a>
            <a href="#">Posts</a>
            <a href="#">Login</a>
          </div>

          <div className="footer-connect">
            <h3>Connect</h3>
            <div className="socials">
              <a href="#">𝕏</a>
              <a href="#">◎</a>
              <a href="#">in</a>
            </div>
          </div>
        </div>

        <div className="copyright">© 2025 Blogify. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
