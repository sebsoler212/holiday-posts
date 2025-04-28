// src/components/Footer.tsx
import Link from 'next/link'
import { HOLIDAYS } from '../utils/holidays'
import { DynamicIcon } from 'lucide-react/dynamic'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-4">
        
        {/* Column 1: Logo & Social */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.svg" alt="Holiday Posts" className="h-8 mr-2" />
            <span className="text-xl font-bold">Holiday Posts</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Holiday Posts. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-white">
              <DynamicIcon name="facebook" size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <DynamicIcon name="twitter" size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <DynamicIcon name="instagram" size={20} />
            </Link>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Holidays */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Holidays</h4>
          <ul className="space-y-1 text-sm">
            {HOLIDAYS.map(h => (
              <li key={h.name}>
                <Link href="#" className="hover:text-white">
                  {h.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/refund-policy" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
