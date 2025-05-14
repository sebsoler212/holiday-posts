import { ThemeProvider, useTheme } from '../components/ThemeProvider'
import ThemeBanner from '../components/ThemeBanner'
import Footer from '../components/Footer'

export default function Support() {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <ThemeBanner />
      <main className='container space-y-12 px-4 max-w-6xl mx-auto shantell-sans-holiday'>

        <h1 className="text-3xl pb-2">Terms of Service</h1>

        <p className="pb-2">Effective Date: 5/14/2025</p>

        <p className="pb-2">Welcome to Holiday Posts ("we", "our", or "us"). These Terms of Service ("Terms") govern your access to and use of our web app. By using our service, you agree to be bound by these Terms.</p>

        <h2 className="text-2xl pb-1">1. Use of the Service</h2>
        <p>You may use our web app only if you can form a binding contract with us, and only in compliance with these Terms and all applicable laws.</p> 
        <p>You agree not to misuse the service, including but not limited to:</p>
        <ul>
          <li className="pl-8"><p>&#x2022; Attempting to interfere with or disrupt the operation of the app</p></li>
          <li className="pl-8"><p>&#x2022; Generating or sharing content that is unlawful, harmful, or offensive</p></li>
          <li className="pl-8"><p>&#x2022; Attempting to reverse engineer, copy, or resell the service</p></li>
        </ul>

        <h2 className="text-2xl pt-4 pb-1">2. Accounts and Authentication</h2>
        <p>We collect only your email address for the purpose of sending you the AI-Generated content you requested.</p>

        <h2 className="text-2xl pt-4 pb-1">3. AI-Generated Content</h2>
        <p>Our app uses AI to generate images based on your input. You are solely responsible for the use of these images. You agree not to use generated content for illegal, abusive, or harmful purposes.</p>
        <p>We make no guarantees about the ownership, accuracy, or appropriateness of AI-generated content.</p>

        <h2 className="text-2xl pt-4 pb-1">4. Intellectual Property</h2>
        <p>All code, features, and designs of the app are the property of Studio Martian LLC, unless otherwise stated. You may not copy, reproduce, or distribute any part of the app without permission.</p>

        <h2 className="text-2xl pt-4 pb-1">5. Disclaimer</h2>
        <p>Our service is provided "as is" and "as available" without warranties of any kind. We do not guarantee the reliability, availability, or accuracy of the app or the generated content.</p>

        <h2 className="text-2xl pt-4 pb-1">6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Holiday Posts is not liable for any damages or losses resulting from your use or inability to use the service.</p>

        <h2 className="text-2xl pt-4 pb-1">7. Termination</h2>
        <p>We may suspend or terminate your access to the app at any time if you violate these Terms or use the service in a way that could harm us or others.</p>

        <h2 className="text-2xl pt-4 pb-1">8. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the app after changes constitutes acceptance of the new Terms.</p>

        <h2 className="text-2xl pt-4 pb-1">9. Contact</h2>
        <p>If you have any questions about these Terms, please contact us at: <a href="mailto:admin@groupswap.ai" className={`underline ${theme.colors.accent}`}>admin@groupswap.ai</a></p>

        <div className="h-10"></div>

      </main>
      <Footer />
    </ThemeProvider>
  )
}
