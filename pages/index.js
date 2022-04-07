import { useTheme } from 'next-themes'
import Link from 'next/link'
import 'sanitize.css'

const Index = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <h1>Dark Mode</h1>
      <p>A simple dark mode test using Next.js</p>
    <main>{/* prettier-ignore */}
        {theme !== undefined && (
          <select value={theme} onChange={e => setTheme(e.target.value)} aria-label="Select color theme">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
          </select>
        )}

        <br />
        <br />

        <div id="options">
          <Link href="/dark">
            <a>Forced Dark Page</a>
          </Link>
          <Link href="/light">
            <a>Forced Light Page</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Index