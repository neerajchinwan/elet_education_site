
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { Container, PageIntro } from '../components/common'
import ContactForm from '../components/forms/ContactForm'

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact & Register Interest"
        title={
          <>
            Be part of the{' '}
            <span className="serif-italic text-champagne">
              2026 conversation.
            </span>
          </>
        }
        description="Connect with us to learn more about the initiative, nominations, participation and partnership opportunities."
      />

      <section className="bg-ivory py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">

            {/* Contact Information */}
            <aside className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative">
                <span className="eyebrow !text-champagne">
                  Celebrating Education
                </span>

                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">
                  Start a conversation.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  Have a question about the initiative, principal nominations,
                  participation or collaboration? We would love to hear from you.
                </p>

                <div className="mt-9 space-y-7">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Phone size={18} className="text-[#E63A62]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                        Phone
                      </p>
                      <a
                        href="tel:8587899665"
                        className="mt-2 block text-sm transition hover:text-champagne"
                      >
                        8587899665
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Mail size={18} className="text-[#E63A62]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                        Email
                      </p>

                      <a
                        href="mailto:lifeskillindia1@gmail.com"
                        className="mt-2 block break-all text-sm transition hover:text-champagne"
                      >
                        lifeskillindia1@gmail.com
                      </a>

                      <a
                        href="mailto:support@lamppostrust.org"
                        className="mt-2 block break-all text-sm transition hover:text-champagne"
                      >
                        support@lamppostrust.org
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <MapPin size={18} className="text-[#E63A62]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                        Location
                      </p>
                      <p className="mt-2 text-sm">New Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <p className="text-xs leading-6 text-white/45">
                    Recognising educators, schools and changemakers building
                    confident, safe, emotionally resilient and future-ready learners.
                  </p>
                </div>
              </div>
            </aside>

            {/* Contact Form Card */}
            <div className="overflow-hidden rounded-2xl border border-[#E9D0D7] bg-white shadow-[0_20px_60px_rgba(61,25,36,0.07)]">
              <div className="border-b border-[#F0E5E5] bg-[#FFFCF9] px-6 py-7 sm:px-9 sm:py-8">
                <span className="eyebrow">
                  Contact the Team
                </span>

                <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-[#24171D] sm:text-3xl">
                  Register your interest.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slatecopy">
                  Share your professional details so our team can understand
                  your enquiry and get in touch with you.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs text-[#817477]">
                  <span className="h-2 w-2 rounded-full bg-[#A51D3D]" />
                  All fields marked with * are required
                </div>
              </div>

              <div className="p-6 sm:p-9">
                <ContactForm />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}
