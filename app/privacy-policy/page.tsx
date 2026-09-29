import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ShieldCheck, Mail, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | PROQRA',
  description:
    'Privacy Policy for PROQRA. Learn how we handle your business contact details, engineering drawings, and technical specifications with complete confidentiality.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 2026'

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2.5 text-blue-600 mb-3">
              <ShieldCheck size={20} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Legal & Data Protection
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-slate-600">
              Last updated: {lastUpdated}. Explaining clearly how we collect, use, and protect your company information, technical drawings, and personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 2xl:px-16 3xl:px-24">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Section 1: Who We Are */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              1. Who We Are
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              PROQRA (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides manufacturing supplier qualification, on-site audits, and initial production oversight for UK engineering and manufacturing companies looking for verified suppliers in India.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              PROQRA is registered in England and Wales. For all matters concerning data protection and your privacy rights under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, the data controller is PROQRA.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Direct all privacy queries to:{' '}
              <a
                href="mailto:hello@proqra.co.uk"
                className="text-blue-600 font-medium hover:underline"
              >
                hello@proqra.co.uk
              </a>
            </p>
          </div>

          {/* Section 2: What Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              2. Information We Collect
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We collect only the essential information needed to evaluate manufacturing feasibility, qualify suppliers, and coordinate with your team:
            </p>
            <ul className="space-y-3 pl-4 text-sm sm:text-base text-slate-700 list-disc">
              <li>
                <strong className="text-slate-900">Contact Details:</strong> Your name, business email address, company name, phone number, and job title provided when requesting a consultation, submitting drawings, or contacting our UK team.
              </li>
              <li>
                <strong className="text-slate-900">Technical Specifications & Engineering Drawings:</strong> CAD models, 2D/3D component drawings, material specifications, required tolerances, batch volume forecasts, and target pricing shared for manufacturing evaluation.
              </li>
              <li>
                <strong className="text-slate-900">Audit & Project Correspondence:</strong> Notes from discovery calls, factory visit requests, qualification reports, quality inspection logs, and communication history.
              </li>
              <li>
                <strong className="text-slate-900">Technical Usage Data:</strong> Basic standard web server logs including IP address, browser type, device information, and pages accessed to ensure the security, reliability, and proper functioning of our website.
              </li>
            </ul>
          </div>

          {/* Section 3: Engineering IP & Confidentiality */}
          <div className="space-y-4 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-slate-900">
              3. Protection of Engineering IP & Drawings
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We recognise that technical drawings, part geometries, and manufacturing specifications represent proprietary commercial intellectual property.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Any technical files submitted through our website or direct correspondence are held strictly confidential. We execute Non-Disclosure Agreements (NDAs) upon request before reviewing proprietary designs. Technical data is shared only with vetted prospective Indian manufacturing facilities that are bound by reciprocal confidentiality commitments for feasibility assessment.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              For complete details on our IP protection commitments and NDA execution, read our dedicated{' '}
              <Link href="/client-confidentiality" className="text-blue-600 font-semibold hover:underline">
                Client Confidentiality Policy
              </Link>.
            </p>
          </div>

          {/* Section 4: How We Use Your Data */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              4. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We process your personal and technical data for the following essential business purposes:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm sm:text-base text-slate-700 list-disc">
              <li>Reviewing drawing feasibility and matching suitable Indian engineering facilities.</li>
              <li>Conducting in-person factory audits, capability checks, and safety evaluations.</li>
              <li>Supervising the production of pilot batches and sharing stage documentation.</li>
              <li>Arranging live shop-floor video walk-throughs with verified suppliers.</li>
              <li>Communicating project updates directly via our UK-based team.</li>
              <li>Ensuring network security and fulfilling statutory accounting and compliance requirements.</li>
            </ul>
          </div>

          {/* Section 5: Lawful Basis for Processing */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              5. Lawful Basis for Processing (UK GDPR)
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Under UK data protection law, we rely on the following legal bases:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm sm:text-base text-slate-700 list-disc">
              <li>
                <strong className="text-slate-900">Performance of a Contract:</strong> To take necessary steps at your request prior to entering into a supplier qualification agreement or performing our sourcing oversight services.
              </li>
              <li>
                <strong className="text-slate-900">Legitimate Interests:</strong> To respond to your business inquiries, manage customer relationships, secure our digital infrastructure, and improve our services.
              </li>
              <li>
                <strong className="text-slate-900">Legal Obligation:</strong> To comply with UK statutory accounting, tax, and trade regulations.
              </li>
            </ul>
          </div>

          {/* Section 6: Sharing & International Transfers */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              6. Data Sharing & International Transfers
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We never sell or rent your personal information to third parties. Information is only shared in these limited circumstances:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm sm:text-base text-slate-700 list-disc">
              <li>
                <strong className="text-slate-900">Audited Indian Suppliers:</strong> Technical drawings and manufacturing parameters are shared under strict confidentiality with vetted Indian facilities for quoting and manufacturing feasibility.
              </li>
              <li>
                <strong className="text-slate-900">Service Providers:</strong> Trusted third-party cloud infrastructure, email delivery, and secure hosting providers operating under standard data processing agreements.
              </li>
              <li>
                <strong className="text-slate-900">Legal Authorities:</strong> Where required by law, court order, or governmental regulation.
              </li>
            </ul>
          </div>

          {/* Section 7: Data Retention & Security */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              7. Data Retention & Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We retain contact details and project files only as long as necessary to fulfill the purposes for which they were collected, or as required by applicable UK tax and commercial laws. Unused technical quote inquiries and associated CAD drawings are purged upon client request.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We implement appropriate technical and organizational safeguards to prevent unauthorized access, accidental loss, disclosure, or modification of your data.
            </p>
          </div>

          {/* Section 8: Your Rights */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
              8. Your Rights Under UK GDPR
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              Under UK data protection legislation, you possess specific rights regarding your personal information:
            </p>
            <ul className="space-y-2 pl-4 text-sm sm:text-base text-slate-700 list-disc">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data where there is no ongoing legal requirement for retention.</li>
              <li><strong>Right to Restrict or Object:</strong> Restrict or object to the processing of your personal information under certain circumstances.</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another organization where technically feasible.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 mt-2">
              You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                ico.org.uk
              </a>.
            </p>
          </div>

          {/* Section 9: Contact */}
          <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Have questions regarding our privacy policy?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Reach out to our UK team directly at any time.
              </p>
            </div>
            <a
              href="mailto:hello@proqra.co.uk"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded transition-colors shrink-0"
            >
              <Mail size={15} />
              <span>Contact Privacy Officer</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
