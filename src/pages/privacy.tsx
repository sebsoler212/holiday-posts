import { ThemeProvider, useTheme } from '../components/ThemeProvider'
import ThemeBanner from '../components/ThemeBanner'
import Footer from '../components/Footer'

export default function Support() {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <ThemeBanner />
      <main className='container space-y-12 px-4 max-w-6xl mx-auto shantell-sans-holiday'>

        <h1 className="text-3xl pb-2">Privacy Policy</h1>

        <p className="pb-2">Effective Date: 05/14/2025</p>

        <p className="pb-2">Holiday Posts ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our web app.</p>

        <h2 className="text-2xl pb-1">1. Information We Collect</h2>
        <p>We collect only the following personal information:</p>
        <ul>
          <li className="pl-8"><p>&#x2022; Email address, for the purpose of sending you your AI-Generated content</p></li>
        </ul>
        <p><b>We do not collect, store, or share any other personal data, including payment information, usage history, or image generation content.</b></p>

        <h2 className="text-2xl pt-4 pb-1">2. How We Use Your Information</h2>
        <p>We use your email address solely for:</p>
        <ul>
          <li className="pl-8"><p>&#x2022; Sending you our AI-Generated content</p></li>
          <li className="pl-8"><p>&#x2022;  Communicating with you if necessary (e.g., support requests)</p></li>
        </ul>
        <p>We do not sell, rent, or share your email address with third parties.</p>

        <h2 className="text-2xl pt-4 pb-1">3. Data Retention</h2>
        <p>We retain your email address only as long as your account is active or as needed to provide you with access to the app. You may contact us at any time to request deletion of your account and associated data.</p>

        <h2 className="text-2xl pt-4 pb-1">4. Security</h2>
        <p>We implement reasonable measures to protect your email address and prevent unauthorized access.</p>

        <h2 className="text-2xl pt-4 pb-1">5. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through the app.</p>

        <h2 className="text-2xl pt-4 pb-1">6. Contact</h2>
        <p>If you have any questions or concerns about this policy, please contact us at: <a href="mailto:admin@groupswap.ai" className={`underline ${theme.colors.accent}`}>admin@groupswap.ai</a></p>

        <div className="h-10"></div>

      </main>
      <Footer />
    </ThemeProvider>
  )
}
