'use client';

import Image from 'next/image';
import Header from './components/Header';

export default function Home() {
  const speakers = [
    { name: 'Balaji Rao', image: 'Balaji Rao.jpg', title: 'AVP- India & SAARC', company: 'Commvault' },
    { name: 'Bhavyan Mehta', image: 'Bhayvan Mehta.jpg', title: 'VP Engineering', company: 'Commvault' },
    { name: 'Vijay Anand', image: 'Vijay Anand.jpg', title: 'Director, Sales Engineering', company: 'Commvault' },
    { name: 'Aneesh Dhawan', image: 'Aneesh Dhawan.png', title: 'Director Sales- India & SAARC', company: 'Commvault' },
    { name: 'Amit Mahajan', image: 'Amit Mahajan.jpg', title: 'Senior DIrector, Development', company: 'Commvault' },
    { name: 'Sachin Bawse', image: 'Sachin Bawse.jpg', title: 'GTM Specialist Solution Architect India', company: 'AWS' },
    { name: 'Varun Kumar', image: 'Varun Kumar.png', title: 'Manager - Solutions Engineering', company: 'NetApp' },
    { name: 'Andy Walsky', image: 'Andy Walsky.jpg', title: 'VP of EMEA & APAC Sales', company: 'Exagrid' },
    { name: 'Haresh Chandnani', image: 'Haresh Chandnani.jpg', title: 'Systems Engineer', company: 'Pure Storage' },
    { name: 'Rakesh Thayyil', image: 'Rakesh Thayyil.jpg', title: 'Associate Director- Research', company: 'Think Teal' },
    { name: 'Shikha Singh', image: 'Shikha Singh.jpg', title: 'Emcee', company: '' },
    { name: 'Zaheer Khan', image: 'Zaheer Khan.jpg', title: 'Former Indian Cricketer', company: '' },
  ];

  const platinumSponsors = [
    { name: 'AWS', logo: 'AWS.png' },
    { name: 'NetApp', logo: 'NetApp.png' },
  ];

  const goldSponsors = [
    { name: 'Pure Storage', logo: 'PureStorage.png' },
    { name: 'Exagrid', logo: 'Exagrid.png' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full mt-16 sm:mt-20 bg-white">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
          <Image
            src="/images/SHIFT_Desktop-LP-Header_Jakarta_5.7.26.png"
            alt="SHIFT Event Banner"
            fill
            className="object-contain object-center hidden md:block"
            priority
          />
          <Image
            src="/images/SHIFT_Mobile-LP-Header_Jakarta_5.7.26.png"
            alt="SHIFT Event Banner Mobile"
            fill
            className="object-contain object-center md:hidden"
            priority
          />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                7 May 2026 | 08:30 – 14:00 WIB
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Ballroom 1 & 2 A, Fairmont Hotel Jakarta
              </p>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Join us on May 7, 2026, as we explore a new era of cyber resilience—born in the cloud, designed to help fortify against cyber threats, and built for the evolving landscape of Agentic AI. Be part of a high-impact experience that can help reshape how organizations protect, recover, and scale efficiently across every cloud environment.
              </p>

              <p>
                Discover Commvault Cloud Unity™, our innovative platform that helps integrate data protection, data security, and recovery across your entire hybrid cloud estate. It&apos;s designed to help simplify complex environments, help fortify your defenses against advanced AI-powered threats, and support rapid, reliable recovery when it matters most.
              </p>

              <p>
                Hear from an exceptional lineup of global cyber resilience visionaries, including Commvault® leaders and renowned experts from some of the world&apos;s most influential technology and cybersecurity brands.
              </p>

              <div className="mt-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Why Attend?</h2>
                <p>
                  SHIFT is the destination for resilience leaders who want to drive real change in their organizations. It brings together CISOs helping secure AI-powered environments, IT leaders aiming to optimize multi-cloud recovery, and partners looking to innovate—helping every attendee to find relevant value.
                </p>
                <p className="mt-4">
                  You will walk away better equipped to address advanced AI-powered threats across every cloud, along with actionable insights to help roll out modern cyber resilience technologies and strategies tailored to your business.
                </p>
              </div>

              <div className="flex justify-center mt-10">
                <a
                  href="https://event.kimcommunication.com/fcf94f65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
              Our Speakers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {speakers.map((speaker, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative w-full aspect-square mb-3 sm:mb-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={`/images/${speaker.image}`}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{speaker.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">{speaker.title}</p>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">{speaker.company}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 md:mt-12">
              <a
                href="https://event.kimcommunication.com/fcf94f65"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
              Event Agenda
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {/* Agenda Items */}
              <AgendaItem
                time="08:15 AM – 09:15 AM"
                title="Breakfast"
              />
              <AgendaItem
                time="09:15 AM – 09:25 AM"
                title="[OPENING ACT] | The SHIFT Ignition - Experiential Artist"
              />
              <AgendaItem
                time="09:30 AM – 09:55 AM"
                title="[VISION KEYNOTE] | The AI Imperative: The Next Standard of Resilience"
                speaker="Balaji Rao, Commvault"
                description="Enterprise resilience is being rewritten. This keynote showcases how next-generation innovations are setting a new benchmark by unifying intelligent cyber recovery, AI-driven threat detection, and automated security orchestration. Learn how these capabilities work together to deliver faster recovery, stronger protection, and operational confidence across today's complex, multi-cloud environments—so organizations can withstand disruption and bounce back smarter than ever."
              />
              <AgendaItem
                time="10:00 AM – 10:35 AM"
                title="[PRODUCT KEYNOTE] | The Next Standard of Resilience"
                speaker="Bhavyan Mehta, Commvault"
                description="Cyber resilience is no longer just about defense—it's a decisive competitive advantage. Join Balaji as he explores how organizations can move beyond reactive security models and harness AI to stay ahead of relentless, sophisticated cyber threats. Discover how AI-powered intelligence enables continuous protection, ensures uninterrupted business operations, and accelerates the shift to resilient, cloud-native architectures—turning today's threat landscape into an opportunity for long-term advantage."
              />
              <AgendaItem
                time="10:35 AM – 10:50 AM"
                title="TEA / COFFEE BREAK | Booth Visits"
              />
              <AgendaItem
                time="10:50 AM – 11:05 AM"
                title="KAHOOT"
                speaker="Shikha Singh, Emcee"
              />
              <AgendaItem
                time="11:05 AM – 11:30 AM"
                title="[PARTNER SPOTLIGHT] | Securing Data to Accelerate Innovation: Protecting AI Data at Cloud Scale with Commvault and AWS"
                speaker="Sachin Bawse, AWS + Vijay Anand, Commvault"
              />
              <AgendaItem
                time="11:35 AM – 12:10 PM"
                title="[CYBER RESILIENCE PANEL DISCUSSION] | The Adaptive Enterprise: Powering Growth in the AI Era"
                speaker="Haresh Chandani, Pure + Customer + Balaji Rao, Commvault"
              />
              <AgendaItem
                time="12:15 PM – 12:40 PM"
                title="[PARTNER SPOTLIGHT] | UNLOCKING POSSIBILITIES with Intelligent Data Infrastructure"
                speaker="Varun kumar, NetApp + Vijay Anand, Commvault"
              />
              <AgendaItem
                time="12:45 PM – 01:40 PM"
                title="LUNCH BREAK | Booth Visits"
                description="CXO EXCHANGE | PRIVATE CXO NETWORKING LUNCH"
              />
              <AgendaItem
                time="01:40 PM – 02:00 PM"
                title="KAHOOT"
              />
              <AgendaItem
                time="02:00 PM – 02:20 PM"
                title="[CYBER RESILIENCE PANEL DISCUSSION] | The Resilient Enterprise: Architecting Security in the AI Era"
                speaker="Andy Walsky, ExaGrid + Customer + Aneesh Dhawan, Commvault"
              />
              <AgendaItem
                time="02:25 PM – 03:00 PM"
                title="[THE ANALYST PERSPECTIVE] | Navigating the Cyber Resilience Imperative in India's AI-Driven Cloud Era"
                speaker="Rakesh Thayyil, Think Teal"
                description="Leading industry analysts provide an independent, data-driven perspective on the critical shifts transforming cyber resilience in India—examining how AI-powered threats, multi-cloud complexity are reshaping enterprise data protection strategies. Gain unbiased insights on regional market trends, and actionable best practices to help organizations build measurable resilience in an increasingly volatile threat landscape."
              />
              <AgendaItem
                time="03:05 PM – 03:30 PM"
                title="Commvault Cloud Unity"
                speaker="Amit Mahajan, Commvault"
                description="Discover how Cloud Unity is redefining resilience for the cloud-first era. This session unveils the latest innovations in unified protection, identity-aware defense, autonomous recovery, and AI-driven intelligence—showing how a single, intelligent platform replaces fragmented tools and becomes the operational fabric for secure, always-on enterprises."
              />
              <AgendaItem
                time="03:30 PM – 03:45 PM"
                title="TEA / COFFEE BREAK | Booth Visits"
              />
              <AgendaItem
                time="03:45 PM – 04:20 PM"
                title="[RESILIENCE DIARIES] | Session by Motivational Speaker"
                speaker="Zaheer Khan, Former Indian Cricketer"
                description="From bouncing back from career-threatening injuries to spearheading India's 2011 World Cup triumph, Zaheer Khan reveals how champions build resilience, adapt to changing conditions, and deliver when stakes are highest—lessons every enterprise needs in the face of today's relentless cyber threats."
              />
              <AgendaItem
                time="04:30 PM – 05:00 PM"
                title="Networking and Close of Event"
              />
              <AgendaItem
                time="05:00 PM"
                title="Close of Event"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
              Our Sponsors
            </h2>

            {/* Platinum Sponsors */}
            <div className="mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6 md:mb-8">
                Platinum Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
                {platinumSponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <Image
                      src={`/images/${sponsor.logo}`}
                      alt={sponsor.name}
                      width={250}
                      height={100}
                      className="object-contain w-full h-auto max-w-[200px] sm:max-w-[250px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-6 md:mb-8">
                Gold Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
                {goldSponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                    <Image
                      src={`/images/${sponsor.logo}`}
                      alt={sponsor.name}
                      width={200}
                      height={80}
                      className="object-contain w-full h-auto max-w-[150px] sm:max-w-[200px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section with Map */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              {/* Left side - Registration Info */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Register Now</h2>
                <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 text-gray-200">
                  Don&apos;t miss out on the opportunity to be part of SHIFT 2026. Register now to secure your spot and stay updated with the latest event details.
                </p>
                <div className="mb-6 md:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Location</h3>
                  <p className="mb-1 text-sm sm:text-base">Ballroom 1 & 2 A, Fairmont Hotel Jakarta</p>
                  <p className="text-gray-300 text-sm sm:text-base">Kota BNI JL. Jend. Sudirman Kav. 1, Jakarta 10220 Indonesia</p>
                  <p className="font-semibold mt-2 text-pink-400 text-sm sm:text-base">Date: May 7, 2026</p>
                </div>
                <a
                  href="https://event.kimcommunication.com/fcf94f65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-lg text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Register Here
                </a>
              </div>

              {/* Right side - Google Map */}
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.1525238732704!2d106.79912319245545!3d-6.221781338386618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1495c27f11b%3A0x63e8f2ff2aa408d2!2sFairmont%20Jakarta!5e0!3m2!1sen!2sid!4v1771246081042!5m2!1sen!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Fairmont Hotel Jakarta Location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm mb-2 leading-relaxed">
            This event is co-hosted in partnership with Commvault. As a result Commvault is collecting your personal data when you submit such information as part of the registration process above. For more information on each party&apos;s privacy practices, please see:
          </p>
          <p className="text-xs sm:text-sm break-all sm:break-normal">
            Commvault Statement:{' '}
            <a
              href="https://www.commvault.com/privacy-policy"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.commvault.com/privacy-policy
            </a>
          </p>
          <p className="text-xs mt-4">© 2026 Commvault. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Agenda Item Component
function AgendaItem({ time, title, speaker, description }: { time: string; title: string; speaker?: string; description?: string }) {
  return (
    <div className="border-l-4 border-purple-600 pl-4 sm:pl-6 py-3 sm:py-4 hover:bg-gray-200 transition-colors rounded-r-lg">
      <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-1">{time}</p>
      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">{title}</h3>
      {speaker && <p className="text-xs sm:text-sm text-gray-700 font-medium mb-2">{speaker}</p>}
      {description && <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>}
    </div>
  );
}
