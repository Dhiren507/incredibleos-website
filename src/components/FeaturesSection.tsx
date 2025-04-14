import { motion } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-start space-x-4">
        <div className="bg-incredible-background rounded-full p-3 shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-gilroy font-semibold mb-2">{title}</h3>
          <p className="text-incredible-muted text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-incredible-background/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-gilroy font-bold mb-4">
            Incredible <span className="text-incredible-secondary">Features</span>
          </h2>
          <p className="text-incredible-muted max-w-2xl mx-auto">
            IncredibleOS comes packed with amazing features designed specifically for your Galaxy M30s.
            Experience the perfect balance of performance, battery life, and customization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-incredible-primary" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
            }
            title="Custom Kernel"
            description="Specially optimized kernel for the Galaxy M30s Exynos 9611 processor, delivering improved performance and battery life."
            delay={0.1}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-incredible-secondary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            }
            title="Battery Optimizations"
            description="Advanced power management features that maximize the battery life of your device without compromising performance."
            delay={0.2}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-incredible-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            }
            title="Camera Enhancements"
            description="Improved camera algorithms and added features that take full advantage of the M30s' triple camera system."
            delay={0.3}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-incredible-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            }
            title="Deep Customization"
            description="Extensive theming options, system UI tweaks, and personalization features to make your phone truly yours."
            delay={0.4}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-incredible-secondary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v8H5V6zm6 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            }
            title="Performance Boosting"
            description="System-level optimizations that remove bloatware and streamline processes for a faster, smoother experience."
            delay={0.5}
          />
          <Feature
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-incredible-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            }
            title="Security & Privacy"
            description="Enhanced security features and privacy controls to keep your data safe and give you peace of mind."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
