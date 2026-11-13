import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Icon } from '../atoms/Icon.jsx';
import { Button } from '../atoms/Button.jsx';

export function ScrollytellingSection({
  steps = [
    {
      id: 'step-1',
      stage: '01',
      phaseName: 'The Exhaustion Threshold',
      quote: 'When outward success no longer replenishes the internal spirit.',
      subtitle: 'Recognizing the Hidden Toll of Perpetual Motion',
      description: 'You have achieved the titles, the quarterly targets, and the social accolades. Yet between boardroom meetings and late-night messages, an insidious exhaustion lingers. You realize that continuing on default speed will cost you the very peace you worked so tirelessly to build.',
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
      description: 'Stepping into our 1-on-1 private coaching container. We silence the noise of expectations. Through evidence-based psychology and somatic nervous system regulation, your body learns that it is safe to down-regulate from fight-or-flight into profound clarity.',
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
      description: 'We audit your calendar, your relationships, and your leadership habits. We dismantle habitual people-pleasing and design non-negotiable boundaries, allowing you to say courageous nos to the non-essential so your true priorities flourish.',
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
      description: 'You re-enter your high-stakes world anchored in unshakeable self-trust. You lead teams, negotiate complex transitions, and scale creative enterprises not through frantic hustle, but through magnetic, grounded presence.',
      highlightLabel: 'The Result',
      highlightValue: 'Durable Impact & Lasting Inner Peace',
      icon: 'Flower',
    },
  ],
}) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.45;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          setActiveStepIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <section className="py-24 md:py-36 bg-[#F4EDE4] border-y border-sand-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-serif italic text-sand-700 text-lg md:text-xl block mb-2">
            The Scrollytelling Experience
          </span>
          <Heading
            level={2}
            className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-widest text-sand-950 mb-4"
          >
            THE PATHWAY TO QUIET MASTERY
          </Heading>
          <Text variant="lead" className="text-sand-800/80 font-light text-sm sm:text-base">
            Scroll to follow the evolution of leaders who journey from chronic overwhelm into grounded personal sovereignty.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Pinned / Sticky Left Column (Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 bg-sand-50/90 border border-sand-300 p-8 sm:p-10 shadow-sm rounded-xs">
            
            {/* Step Counter Tracker */}
            <div className="flex items-center justify-between border-b border-sand-200 pb-4 mb-6">
              <span className="font-display text-xs uppercase tracking-ultra text-sand-600">
                Current Threshold
              </span>
              <span className="font-display text-base tracking-widest text-sand-950 font-medium">
                STAGE {activeStep.stage} / 0{steps.length}
              </span>
            </div>

            {/* Botanical Animation Motif */}
            <div className="flex items-center justify-center my-6 text-sand-600">
              <motion.div
                key={activeStep.stage}
                initial={{ rotate: -20, scale: 0.85, opacity: 0.5 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Icon name={activeStep.icon || 'Flower'} size={64} />
              </motion.div>
            </div>

            {/* Active Stage Heading & Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.stage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-center space-y-3"
              >
                <Heading level={3} className="text-xl sm:text-2xl uppercase tracking-widest text-sand-950">
                  {activeStep.phaseName}
                </Heading>
                <p className="font-serif italic text-sand-700 text-sm leading-relaxed">
                  "{activeStep.quote}"
                </p>
                
                <div className="pt-4 border-t border-sand-200/80">
                  <span className="text-[10px] font-display uppercase tracking-widest text-sand-500 block mb-0.5">
                    {activeStep.highlightLabel}
                  </span>
                  <span className="font-display text-xs tracking-wider uppercase text-sand-900 font-medium">
                    {activeStep.highlightValue}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stepper Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Jump to stage ${s.stage}: ${s.phaseName}`}
                  onClick={() => {
                    const el = stepRefs.current[idx];
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    activeStepIndex === idx
                      ? 'w-8 bg-sand-900'
                      : 'w-2 bg-sand-300 hover:bg-sand-500'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Scrolling Story Cards (Right Column) */}
          <div className="lg:col-span-7 space-y-16 lg:space-y-28">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[idx] = el)}
                className={`p-8 sm:p-12 border transition-all duration-500 rounded-xs ${
                  activeStepIndex === idx
                    ? 'bg-sand-50 border-sand-400 shadow-md scale-[1.01]'
                    : 'bg-sand-100/40 border-sand-200 opacity-60'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-xs uppercase tracking-ultra px-3 py-1 bg-sand-200 text-sand-800">
                    Stage {step.stage}
                  </span>
                  <span className="text-sand-400">&bull;</span>
                  <span className="font-display text-xs uppercase tracking-widest text-sand-600">
                    {step.phaseName}
                  </span>
                </div>

                <Heading level={3} className="text-2xl sm:text-3xl uppercase tracking-wider text-sand-950 mb-3 leading-snug">
                  {step.subtitle}
                </Heading>

                <Text variant="body" className="text-sand-800 text-base font-light leading-relaxed mb-6">
                  {step.description}
                </Text>

                <div className="p-4 bg-sand-100/80 border-l-2 border-sand-700 flex items-center justify-between text-xs font-display uppercase tracking-widest text-sand-800">
                  <span>{step.highlightLabel}:</span>
                  <span className="font-medium text-sand-950">{step.highlightValue}</span>
                </div>
              </div>
            ))}

            {/* Bottom Story Culmination */}
            <div className="text-center pt-8">
              <Button to="/contact" variant="primary" size="lg">
                READY TO BEGIN STAGE 01? &rarr;
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

ScrollytellingSection.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      stage: PropTypes.string.isRequired,
      phaseName: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      highlightLabel: PropTypes.string.isRequired,
      highlightValue: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
};

ScrollytellingSection.defaultProps = {
  steps: undefined,
};

export default ScrollytellingSection;
