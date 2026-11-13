/**
 * Centralized MockData Store
 * Contains profile, brand, location, contact, navigation, services,
 * journal entries, testimonials, FAQs, and scrollytelling steps.
 * 
 * Usage in any component/page:
 *   import { mockData } from '../data/mockData.js';
 *   or:
 *   import { mockData, siteInfo, contactInfo } from '../data';
 */

export const mockData = {
  // Primary Profile & Brand Information
  profile: {
    name: 'E-yhan',
    displayName: 'E-YHAN',
    fullName: 'E-yhan Mindful Coaching & Mentorship',
    title: 'Transformational Life & Mindful Leadership Coach',
    credentials: 'PCC, MA in Applied Psychology',
    email: 'eyhan@gmail.com',
    phone: '+63 917 845 2291',
    whatsapp: 'https://wa.me/639178452291',
    location: 'Sorsogon, Philippines',
    city: 'Sorsogon City',
    province: 'Sorsogon',
    region: 'Bicol Region',
    country: 'Philippines',
    postalCode: '4700',
    fullAddress: 'Rizal Street, West District, Sorsogon City, Sorsogon 4700, Philippines',
    studioName: 'E-yhan Sanctuary Studio',
    quote: 'True transformation begins not when you strive to become someone else, but the moment you remember the calm, sovereign truth of who you already are.',
    bioShort: 'A certified master coach with over 12 years helping leaders, creatives, and seekers bridge inner alignment with outer impact.',
    images: {
      heroMain: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
      heroSecondary: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85',
      aboutStudio: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
      aboutNature: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
      sereneWheat: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=85',
    },
  },

  // Contact Details
  contact: {
    brandName: 'E-yhan Mindful Coaching',
    email: 'eyhan@gmail.com',
    emails: [
      { label: 'Direct & Discovery', value: 'eyhan@gmail.com', href: 'mailto:eyhan@gmail.com' },
      { label: 'Executive Concierge', value: 'concierge@eyhan.com', href: 'mailto:concierge@eyhan.com' },
    ],
    phones: [
      { label: 'Studio Direct', value: '+63 917 845 2291', href: 'tel:+639178452291' },
      { label: 'WhatsApp Concierge', value: '+63 917 845 2291', href: 'https://wa.me/639178452291' },
    ],
    address: {
      line1: 'Rizal Street, West District',
      line2: 'Sanctuary Studio',
      city: 'Sorsogon City',
      province: 'Sorsogon',
      postalCode: '4700',
      country: 'Philippines',
      displayFull: 'Rizal Street, West District, Sorsogon City, Sorsogon 4700, Philippines',
    },
    hours: [
      { days: 'Monday – Friday', time: '9:00 AM – 6:00 PM PHT' },
      { days: 'Saturday', time: '10:00 AM – 3:00 PM PHT (By Private Appointment)' },
      { days: 'Sunday', time: 'Sanctuary Rest (Closed)' },
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62057.44755106511!2d123.9780004!3d12.9742491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0e10b10077977%3A0x6e2ba597ffc49e7b!2sSorsogon%20City%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph',
    googleMapsLink: 'https://maps.google.com/?q=Sorsogon+City+Sorsogon+Philippines',
  },

  // Site Meta & Copy
  site: {
    name: 'E-YHAN',
    fullName: 'E-yhan Mindful Coaching',
    tagline: 'Mindful Leadership & Transformational Life Coaching',
    subtitle: 'Guiding visionary leaders, entrepreneurs, and seekers toward grounded purpose, emotional clarity, and intentional living.',
    founder: {
      name: 'E-yhan',
      credentials: 'PCC, MA in Applied Psychology',
      title: 'Transformational Life & Leadership Coach',
      bioShort: 'A certified master coach with over 12 years helping leaders and creatives bridge inner alignment with outer impact.',
      quote: 'True transformation begins not when you strive to become someone else, but the moment you remember the calm, sovereign truth of who you already are.',
      images: {
        heroMain: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
        heroSecondary: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85',
        aboutStudio: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85',
        aboutNature: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
        sereneWheat: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=85',
      },
    },
    mission: 'To create sanctuaries of stillness where high-achieving individuals can dismantle overwhelm, reclaim their authentic voice, and architect a life of resonant depth.',
    pillars: [
      {
        id: 'clarity',
        number: '01',
        title: 'The Power of Clarity',
        description: 'Shed the noise of external expectations and reconnect with the quiet compass of your authentic core values.',
        actionText: 'Explore Clarity',
        link: '/services/transformational-life-coaching',
      },
      {
        id: 'purpose',
        number: '02',
        title: 'The Path to Purpose',
        description: 'Design intentional rituals, career milestones, and leadership habits rooted in genuine meaning rather than frantic burnout.',
        actionText: 'Discover Purpose',
        link: '/services/mindful-leadership-mentorship',
      },
      {
        id: 'mentorship',
        number: '03',
        title: 'Masterful Guidance',
        description: 'Experience deep, confidential 1-on-1 dialogue backed by somatic psychology, cognitive reframing, and actionable strategy.',
        actionText: 'Begin Mentorship',
        link: '/services/career-pivot-clarity',
      },
    ],
    newsletter: {
      heading: 'SUBSCRIBE TO THE JOURNAL',
      subheading: 'Receive bi-weekly reflections on intentional leadership, mindful rituals, and inner clarity directly in your inbox.',
      placeholder: 'Enter your email address',
      buttonText: 'SUBSCRIBE NOW',
      disclaimer: 'We honor your sanctuary. Zero spam, unsubscribe whenever you choose.',
    },
  },

  // Navigation Links
  navLinks: [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'JOURNAL', path: '/journal' },
    { label: 'CONTACT', path: '/contact' },
  ],

  primaryCTA: {
    label: 'SAY HELLO',
    mobileLabel: 'BOOK A CALL',
    path: '/contact',
  },

  // Social Channels
  socialLinks: [
    { platform: 'Instagram', handle: '@eyhan.coach', url: 'https://instagram.com/eyhan.coach', icon: 'Instagram' },
    { platform: 'LinkedIn', handle: 'E-yhan Coaching', url: 'https://linkedin.com/in/eyhan', icon: 'Linkedin' },
    { platform: 'Pinterest', handle: 'E-yhan Mindful Living', url: 'https://pinterest.com/eyhancoach', icon: 'Share2' },
    { platform: 'Substack', handle: 'The Still Point by E-yhan', url: 'https://substack.com/@eyhan', icon: 'BookOpen' },
  ],

  // Signature Services & Programs
  services: [
    {
      slug: 'transformational-life-coaching',
      title: 'Transformational Life Coaching',
      subtitle: 'Private 1-on-1 Sanctuary for Deep Personal Alignment',
      tagline: 'Uncover your authentic values and build an uncompromising life of harmony.',
      duration: '12-Week Intensive (Bi-weekly 75-min Sessions)',
      price: '₱78,000 / $1,400 USD',
      priceNumeric: 78000,
      category: '1-on-1 Mentorship',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85',
      summary: 'A signature journey designed for individuals ready to strip away social conditioning, dismantle chronic overthinking, and embody quiet personal sovereignty.',
      description: 'Life coaching with E-yhan is not a generic advice session or toxic positivity cheerleading. It is a contemplative, scientifically validated immersion that integrates modern cognitive psychology, somatic nervous system regulation, and deep existential inquiry. Together, we identify the invisible scripts keeping you in habitual stress cycles, clarify what truly matters at this chapter of your existence, and design daily practices that allow peace and achievement to co-exist without sacrifice.',
      whoItsFor: [
        'High-achieving professionals feeling hollowed out despite outward milestones of success',
        'Individuals navigating major life thresholds, relationship evolutions, or identity redefinitions',
        'People desiring a safe, non-judgmental space to express vulnerabilities and reconnect with intuition',
        'Anyone struggling with habitual people-pleasing, boundary fatigue, or chronic self-doubt',
      ],
      curriculum: [
        {
          phase: 'Phase 01',
          title: 'Excavation & Grounding',
          description: 'Mapping your current emotional ecosystem, unearthing root limiting narratives, and establishing daily nervous system anchoring practices.',
        },
        {
          phase: 'Phase 02',
          title: 'Core Value Reclamation',
          description: 'Separating internal desire from societal expectation. Crafting your personal Manifesto of Non-Negotiables and emotional sovereignty.',
        },
        {
          phase: 'Phase 03',
          title: 'Boundary Architecture & Action',
          description: 'Redefining work rhythms, social energy boundaries, and courageous conversations with partners, peers, and family.',
        },
        {
          phase: 'Phase 04',
          title: 'Integration & Sustainable Flourishing',
          description: 'Solidifying long-term resilience protocols to maintain alignment during turbulence and future life transitions.',
        },
      ],
      includedFeatures: [
        'Six 75-minute private coaching immersions via encrypted video or private Sorsogon studio',
        'Voice note & text support (Voxer/WhatsApp) Monday to Thursday for real-time guidance',
        'Customized Guided Somatic Breathwork recordings tailored to your regulation profile',
        'Personalized Life Architecture Workbook with journal prompts and boundary templates',
        'Post-session integration summaries and curated philosophical readings',
      ],
    },
    {
      slug: 'mindful-leadership-mentorship',
      title: 'Mindful Leadership & Executive Presence',
      subtitle: 'Strategic & Somatic Mentorship for Founders & Senior Executives',
      tagline: 'Lead with quiet conviction, emotional intelligence, and steady poise.',
      duration: '6-Month Executive Partnership',
      price: '₱165,000 / $2,950 USD',
      priceNumeric: 165000,
      category: 'Executive Mentorship',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=85',
      summary: 'A confidential sounding board for senior directors, startup founders, and organizational leaders seeking to navigate pressure with calm mastery.',
      description: 'Leadership at senior levels can be an intensely solitary experience. The pressures of stakeholder management, team morale, high-stakes decisions, and market volatility frequently exact a quiet toll on personal wellness and mental clarity. This mentorship program blends executive advisory with mindfulness methodologies to help you cultivate unshakeable groundedness. You will learn to respond rather than react, hold emotional space for complex teams without absorbing their chaos, and embody a leadership presence that inspires profound trust.',
      whoItsFor: [
        'C-suite executives, directors, and startup founders bearing immense responsibility',
        'Newly promoted leaders managing high-friction team dynamics or organizational restructuring',
        'Executives seeking to overcome imposter syndrome in high-stakes boardroom environments',
        'Leaders wishing to shift away from urgency-driven burnout culture toward sustainable excellence',
      ],
      curriculum: [
        {
          phase: 'Phase 01',
          title: 'Executive Energy & Stress Mapping',
          description: 'Comprehensive audit of decision fatigue, delegation bottlenecks, and personal energy drains across your leadership calendar.',
        },
        {
          phase: 'Phase 02',
          title: 'Emotional Regulation in High-Stakes Arenas',
          description: 'Techniques for physiological self-soothing before critical negotiations, board reviews, and conflict mediation.',
        },
        {
          phase: 'Phase 03',
          title: 'Culture Architecture & Compassionate Candor',
          description: 'Mastering the art of direct feedback that preserves human dignity while holding uncompromising performance standards.',
        },
        {
          phase: 'Phase 04',
          title: 'Legacy & Visionary Alignment',
          description: 'Re-aligning your personal philosophy with company mission to ensure long-term vitality without personal sacrifice.',
        },
      ],
      includedFeatures: [
        'Twelve 60-minute executive advisory sessions with direct calendar priority access',
        'On-demand emergency advisory calls (up to 3 urgent 20-min prep sessions for key meetings)',
        '360-degree leadership values assessment and stakeholder impact analysis',
        'Executive communication frameworks for conflict resolution and high-stakes alignment',
        'Confidentiality agreement guaranteeing complete privacy and discreet counsel',
      ],
    },
    {
      slug: 'career-pivot-clarity',
      title: 'Career Pivot & Purpose Exploration',
      subtitle: 'Strategic Blueprint for Purposeful Vocational Reinvention',
      tagline: 'Transition from routine exhaustion into work that feels deeply true.',
      duration: '8-Week Structured Pathway',
      price: '₱56,000 / $1,000 USD',
      priceNumeric: 56000,
      category: 'Vocational Mentorship',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=600&q=85',
      summary: 'A clear-eyed, practical, and soulful container for corporate leaders and creatives planning their next professional leap.',
      description: 'Walking away from an established career or pivoting toward entrepreneurial autonomy is among the most courage-testing decisions an adult can make. Fear of financial instability, identity disruption, and external skepticism can leave you frozen in analysis paralysis for years. In this 8-week container with E-yhan, we combine rigorous transferable skills auditing with deep passion excavation. We dismantle the risk myth, craft low-risk testing prototypes, and build a concrete financial and energetic roadmap for your pivot.',
      whoItsFor: [
        'Established corporate leaders contemplating entrepreneurship, consulting, or creative ventures',
        'Mid-career professionals seeking profound meaning and alignment with personal ethics',
        'Individuals returning to the workforce or seeking a balanced hybrid working lifestyle',
        'Creatives transitioning from client service to independent thought leadership or studio work',
      ],
      curriculum: [
        {
          phase: 'Phase 01',
          title: 'Untangling Identity from Title',
          description: 'Deconstructing what part of your career was truly chosen versus what was inherited from familial or societal conditioning.',
        },
        {
          phase: 'Phase 02',
          title: 'The Zone of Genius Inventory',
          description: 'Deep dive into your rare combination of innate talents, life lessons, and passions that command value in the market.',
        },
        {
          phase: 'Phase 03',
          title: 'Low-Risk Pilot Experimentation',
          description: 'Designing small-scale experiments, advisory pilots, and market conversations before making permanent resignations.',
        },
        {
          phase: 'Phase 04',
          title: 'Financial Runway & Launch Roadmap',
          description: 'Solidifying your 12-month energetic budget, timeline, positioning narrative, and confident transition launch.',
        },
      ],
      includedFeatures: [
        'Four 90-minute intensive deep-dive strategy sessions',
        'Comprehensive Career Matrix & Skills Valuation Framework template',
        'Curated personal positioning narrative for LinkedIn, networking, and investor dialogues',
        'Weekly asynchronous accountability check-ins to prevent procrastination',
        'Access to private network of vetted alumni in varied industries across Southeast Asia',
      ],
    },
    {
      slug: 'holistic-wellness-immersion',
      title: 'Holistic Wellness & Breathwork Immersion',
      subtitle: 'Nervous System Restoration & Mind-Body Integration',
      tagline: 'Release somatic stress and restore inner calm from the inside out.',
      duration: '4-Week Deep Reset',
      price: '₱38,000 / $680 USD',
      priceNumeric: 38000,
      category: 'Somatic Wellness',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=85',
      summary: 'A restorative sanctuary focused on resetting accumulated chronic fatigue, vagal nerve deregulation, and mental depletion.',
      description: 'You cannot think your way out of a nervous system that feels perpetually under siege. Chronic hurry sickness, shallow breathing, neck tension, and fragmented sleep are the physical markers of an overwhelmed life. This 4-week immersion pairs cognitive coaching with evidence-backed somatic practices, restorative conscious connected breathwork, and circadian rhythm harmonization. In our peaceful Sorsogon studio or live virtual sanctum, you will learn to down-regulate your stress response in under three minutes and rediscover ease.',
      whoItsFor: [
        'Individuals dealing with persistent burnout, insomnia, or restless physical tension',
        'People experiencing emotional numbness or feeling chronically on edge',
        'Professionals recovering from intense project launches or major life grief',
        'Anyone eager to deepen their mind-body connection with guided somatic tools',
      ],
      curriculum: [
        {
          phase: 'Phase 01',
          title: 'Vagal Tone & Circadian Reset',
          description: 'Understanding your autonomic nervous system states and resetting sleep, morning sunlight, and grounding rhythms.',
        },
        {
          phase: 'Phase 02',
          title: 'Conscious Breathwork Foundations',
          description: 'Mastering functional breathing mechanics (diaphragmatic, coherent 5.5s breath) for instantaneous stress relief.',
        },
        {
          phase: 'Phase 03',
          title: 'Releasing Stored Emotional Charge',
          description: 'Guided somatic release sessions to dissolve physical armor in the chest, throat, and solar plexus.',
        },
        {
          phase: 'Phase 04',
          title: 'The Daily Sanctuary Blueprint',
          description: 'Integrating effortless 10-minute micro-rituals into busy workdays for lasting calm and sustained vitality.',
        },
      ],
      includedFeatures: [
        'Four 90-minute in-person or live virtual somatic coaching & breathwork sessions',
        'High-fidelity binaural beats audio library for deep sleep and focus states',
        'Organic botanical wellness kit (essential oils, calming botanical tea blend, journal)',
        'Customized daily habit tracker designed to eliminate guilt and promote micro-consistency',
        'Direct WhatsApp access for breathwork guidance and daily accountability',
      ],
    },
  ],

  // In-Depth Journal Articles
  journal: [
    {
      slug: 'art-of-intentional-living-slowing-down',
      title: 'The Art of Intentional Living: Reclaiming Stillness in an Accelerating World',
      subtitle: 'Why relentless acceleration is not a virtue and how mindful pauses restore genuine creative power.',
      category: 'Mindful Living',
      readTime: '6 min read',
      date: 'November 8, 2026',
      datePublished: '2026-11-08T09:00:00+08:00',
      dateModified: '2026-11-08T09:00:00+08:00',
      author: 'E-yhan',
      image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=85',
      excerpt: 'Modern society glorifies perpetual motion, yet our greatest breakthroughs occur when we grant ourselves permission to pause, breathe, and listen to the quiet truth within.',
      content: [
        'In a culture that measures personal worth by calendar density and output speed, pausing can feel like an act of quiet rebellion. We have been conditioned to believe that rest must be earned through exhaustion, and that any quiet moment left unfilled is a wasted opportunity. Yet when we speak with senior leaders and entrepreneurs in Sorsogon, Manila, and across Southeast Asia during private coaching sessions, the recurring sentiment is unanimous: success achieved at the expense of presence is an empty victory.',
        'Intentional living is not an abandonment of ambition. Rather, it is the deliberate recalibration of your energy toward what genuinely matters. When your nervous system is in a state of chronic low-grade fight-or-flight, your decision-making narrows. You react to urgent trivialities rather than creating profound, enduring work. In contrast, when you cultivate sacred intervals of stillness—even a ten-minute morning tea ritual without a screen—you invite psychological spaciousness back into your daily rhythm.',
        'To begin integrating intentionality into your life, start with a simple diagnostic: the Energy Audit. For three consecutive days, observe what activities, conversations, and obligations fill your reservoir versus what systematically drains it. Notice where you say yes out of conditioned politeness rather than authentic conviction. Every boundary you refuse to set is a quiet betrayal of your future peace.',
        'Slowing down does not mean falling behind. In truth, the leaders who command the deepest respect in boardroom meetings and creative studios are rarely the loudest or the fastest. They are the ones anchored in calm certainty, able to hold nuance without panic, and discerning enough to choose the one essential path through the noise. Give yourself permission today to step off the conveyor belt of urgency and return home to yourself.',
      ],
      takeaways: [
        'Constant urgency diminishes cognitive clarity and triggers decision fatigue.',
        'Intentional living is about directing conscious attention rather than surrendering to default habits.',
        'A 10-minute morning boundary without digital screens creates an anchor of sovereignty for the entire day.',
      ],
    },
    {
      slug: 'overcoming-inner-critic-in-leadership',
      title: 'Transforming the Inner Critic: How Visionary Leaders Cultivate Grounded Self-Trust',
      subtitle: 'Moving from punitive self-talk to compassionate discernment without losing your competitive edge.',
      category: 'Leadership & Mindset',
      readTime: '7 min read',
      date: 'October 24, 2026',
      datePublished: '2026-10-24T10:00:00+08:00',
      dateModified: '2026-10-24T10:00:00+08:00',
      author: 'E-yhan',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85',
      excerpt: 'Imposter syndrome often attacks high achievers at the precipice of their biggest growth. Learn how mindful self-compassion strengthens executive presence.',
      content: [
        'Almost every client who steps into my coaching sanctuary in Sorsogon or connects via virtual session carries an invisible companion: a hyper-critical internal prosecutor. This voice whispers that their success is a lucky fluke, that their next keynote will expose them, or that if they drop their guard for a single second, everything they have painstakingly built will unravel.',
        'The common myth in corporate leadership is that harsh self-criticism is necessary to maintain high performance. We tell ourselves: "If I am gentle with myself, I will become lazy, complacent, and unmotivated." Yet clinical psychology and neuroscience reveal the exact opposite. Chronic self-flagellation floods the brain with cortisol, dampens the prefrontal cortex, and promotes risk aversion and perfectionist paralysis.',
        'The goal is not to silence the inner critic through force, because resistance only amplifies internal tension. Instead, we learn to recognize the critic for what it truly is: an overprotective, frightened guardian trying to shield you from social rejection or failure. When you acknowledge this impulse with compassionate neutrality—"I see you are trying to keep me safe, but I am capable of handling this challenge"—the emotional charge dissipates.',
        'Cultivating grounded self-trust requires shifting from performance-based identity to inherent self-worth. You are not your quarterly revenue, your title, or your social accolades. When your foundation is built upon deep self-awareness and steady ethical convictions, external criticism loses its power to shatter you, and internal doubt becomes merely a passing weather pattern in an otherwise expansive sky.',
      ],
      takeaways: [
        'Self-criticism activates the threat response, reducing creative problem-solving capacity.',
        'Self-compassion is an active mental discipline that enhances resilience and calculated risk-taking.',
        'Separate your intrinsic identity from temporary outcomes, metrics, and societal validation.',
      ],
    },
    {
      slug: 'five-signs-you-need-coaching-reset',
      title: '5 Subtle Signs You Are Ready for a Soulful Life & Career Reset',
      subtitle: 'Recognizing the quiet signals of transition before burnout forces an involuntary pause.',
      category: 'Personal Growth',
      readTime: '5 min read',
      date: 'October 10, 2026',
      datePublished: '2026-10-10T08:30:00+08:00',
      dateModified: '2026-10-10T08:30:00+08:00',
      author: 'E-yhan',
      image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=85',
      thumbnail: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=600&q=85',
      excerpt: 'Transition rarely announces itself with fanfare. Most often, it arrives as a gentle restlessness, whispering that the old season has run its course.',
      content: [
        'Have you ever reached a pinnacle of professional achievement, celebrated the milestone, and immediately felt a bewildering hollow ache? You look around at the life you spent a decade constructing, and while everything appears impeccable from the outside, something fundamental feels misaligned.',
        'This state is neither depression nor ingratitude. It is the unmistakable onset of an evolutionary threshold. When your internal values and spiritual maturity have outgrown the structures of your daily routine, continuing along the previous trajectory begins to generate immense friction. Here are five unmistakable indicators that you are standing at the threshold of a purposeful reset.',
        'First, your achievements no longer nourish you. Wins that once produced exhilaration now feel like checkboxes on an endless treadmill. Second, you feel chronic decision paralysis, second-guessing simple choices because you have lost touch with your intuitive compass. Third, you experience persistent energetic leakage—waking up exhausted regardless of how many hours of sleep you clocked.',
        'Fourth, you find yourself admiring people whose lifestyles are characterized by simplicity, depth, and creative presence rather than status symbols. Fifth, you feel a persistent whisper that there is a more authentic version of you waiting to be uncovered, if only you had the courage and guidance to step into the unknown. Partnering with a dedicated coach provides the mirror, the scaffolding, and the sanctuary needed to navigate this transition with elegance and courage.',
      ],
      takeaways: [
        'Restlessness is not a flaw; it is an intelligent summons from your deeper self.',
        'Exhaustion is often energetic misalignment rather than purely physical fatigue.',
        'A structured coaching container creates safety for reinvention without chaotic disruption.',
      ],
    },
  ],

  // Client Testimonials
  testimonials: [
    {
      id: 1,
      name: 'Camilla Reyes',
      role: 'Creative Director & Founder, Studio Sola',
      location: 'Makati & Sorsogon',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      quote: 'Working with E-yhan was the most profound inflection point of my career. She helped me untangle my chronic perfectionism and architect a creative studio that honors my well-being. My revenue doubled, but more importantly, I sleep in complete peace.',
      rating: 5,
      serviceUsed: 'Mindful Leadership & Executive Presence',
    },
    {
      id: 2,
      name: 'Julian Vance-Smith',
      role: 'Managing Partner, Altus Capital Group',
      location: 'Singapore & Manila',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      quote: 'In high-stakes venture capital, clarity under pressure is everything. E-yhan taught me somatic grounding and conscious listening that completely transformed how I lead board reviews and negotiations. Her discretion and wisdom are unmatched.',
      rating: 5,
      serviceUsed: 'Mindful Leadership & Executive Presence',
    },
    {
      id: 3,
      name: 'Isabella Tan-Del Rosario',
      role: 'Tech Executive & Philanthropist',
      location: 'Sorsogon & Manila',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      quote: 'I came to E-yhan during a severe identity crisis following a corporate acquisition. She held a compassionate, judgment-free sanctuary that allowed me to redefine who I am beyond my executive title. Truly life-altering work.',
      rating: 5,
      serviceUsed: 'Transformational Life Coaching',
    },
    {
      id: 4,
      name: 'Marcus Chen',
      role: 'Architect & Regenerative Designer',
      location: 'Cebu City, Philippines',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      quote: 'The career pivot container gave me the exact analytical and emotional scaffolding I needed to step away from corporate architecture and launch my studio. E-yhan was the calm anchor in the storm of change.',
      rating: 5,
      serviceUsed: 'Career Pivot & Purpose Exploration',
    },
    {
      id: 5,
      name: 'Sofia Mendoza-Sy',
      role: 'Author & Wellness Consultant',
      location: 'Bicol Region, Philippines',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      quote: 'The breathwork and somatic integration sessions unlocked nervous system regulation I didn’t know was possible. If you are feeling chronic burnout and mental fatigue, E-yhan’s holistic immersion is an essential blessing.',
      rating: 5,
      serviceUsed: 'Holistic Wellness & Breathwork Immersion',
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: 'what-is-coaching',
      question: 'How is transformational life coaching different from traditional therapy or consulting?',
      answer: 'While psychotherapy primarily explores the past to heal psychological wounds and consulting provides pre-packaged business answers, transformational coaching is a forward-focused inquiry into your current values, somatic states, and future alignment. We honor your lived history while focusing on cultivating self-sovereignty, dismantling conditioned behavioral scripts, and designing actionable structures for your life and career.',
    },
    {
      id: 'how-do-i-know',
      question: 'How do I know if 1-on-1 coaching with E-yhan is the right investment for me?',
      answer: 'Coaching is best suited for individuals who are self-aware, committed to personal integrity, and actively ready to take ownership of their inner growth and daily habits. If you are experiencing successful milestones on paper but feel disconnected, depleted, or uncertain of your authentic direction, a complimentary 25-minute Discovery Consultation will determine if our chemistry and goals align.',
    },
    {
      id: 'session-format',
      question: 'Are coaching sessions held in person or virtually?',
      answer: 'Both options are seamlessly accommodated. In-person sessions take place in our private, peaceful studio in Sorsogon City, Sorsogon, Philippines. For international and regional clients, sessions are conducted via secure, high-definition encrypted video with dedicated asynchronous voice messaging (Voxer/WhatsApp) between appointments.',
    },
    {
      id: 'duration-timeline',
      question: 'What is the typical time commitment and expected duration of a program?',
      answer: 'Meaningful neural and behavioral rewiring requires consistent dedication. Our foundational 1-on-1 containers span from 8 to 24 weeks. Clients typically invest 75 minutes every other week for deep-dive sessions, alongside 15 to 20 minutes daily for reflective integration, somatic breathwork, and boundary practices.',
    },
    {
      id: 'confidentiality',
      question: 'Is my personal and organizational information strictly confidential?',
      answer: 'Absolute discretion and strict confidentiality are the cornerstones of our practice. All engagements are safeguarded by formal non-disclosure agreements. We routinely counsel corporate executives, founders, and public figures whose careers demand flawless privacy.',
    },
  ],

  // Scrollytelling 4-Stage Pathway
  scrollytellingSteps: [
    {
      id: 'step-1',
      stage: '01',
      phaseName: 'The Exhaustion Threshold',
      quote: 'When outward success no longer replenishes the internal spirit.',
      subtitle: 'Recognizing the Hidden Toll of Perpetual Motion',
      description: 'You have achieved the titles, the quarterly targets, and the social accolades. Yet between hectic schedules and late-night messages, an insidious exhaustion lingers. You realize that continuing on default speed will cost you the very peace you worked so tirelessly to build.',
      highlightLabel: 'The Core Symptom',
      highlightValue: 'Chronic Urgency & Decision Fatigue',
      icon: 'Compass',
    },
    {
      id: 'step-2',
      stage: '02',
      phaseName: 'The Sanctuary of Stillness',
      quote: 'In quietness and confidence shall be your strength.',
      subtitle: 'Entering Confidential Inquiry & Somatic Regulation',
      description: 'Stepping into our 1-on-1 private coaching container with E-yhan. We silence the noise of expectations. Through evidence-based psychology and somatic nervous system regulation, your body learns that it is safe to down-regulate from fight-or-flight into profound clarity.',
      highlightLabel: 'The Practice',
      highlightValue: 'Values Excavation & Vagal Reset',
      icon: 'Heart',
    },
    {
      id: 'step-3',
      stage: '03',
      phaseName: 'Boundary Architecture',
      quote: 'Every unexamined yes is a quiet betrayal of your future.',
      subtitle: 'Reclaiming Calendar Sovereignty & Energy Alignment',
      description: 'We audit your calendar, your commitments, and your leadership habits. We dismantle habitual people-pleasing and design non-negotiable boundaries, allowing you to say courageous nos to the non-essential so your true priorities flourish.',
      highlightLabel: 'The Transformation',
      highlightValue: 'Calendar Sovereignty & Clear Mandates',
      icon: 'Award',
    },
    {
      id: 'step-4',
      stage: '04',
      phaseName: 'Embodied Quiet Mastery',
      quote: 'Leading with unwavering presence, wisdom, and ease.',
      subtitle: 'Flourishing Without Sacrificing Your Well-Being',
      description: 'You re-enter your world anchored in unshakeable self-trust. You lead teams, negotiate complex transitions, and scale creative enterprises not through frantic hustle, but through magnetic, grounded presence.',
      highlightLabel: 'The Result',
      highlightValue: 'Durable Impact & Lasting Inner Peace',
      icon: 'Flower',
    },
  ],
};

// Direct convenience exports for clean imports across pages
export const profile = mockData.profile;
export const contactInfo = mockData.contact;
export const siteInfo = mockData.site;
export const navLinks = mockData.navLinks;
export const primaryCTA = mockData.primaryCTA;
export const socialLinks = mockData.socialLinks;
export const services = mockData.services;
export const journalPosts = mockData.journal;
export const testimonials = mockData.testimonials;
export const faqs = mockData.faqs;
export const scrollytellingSteps = mockData.scrollytellingSteps;

export default mockData;
