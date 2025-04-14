import { motion } from 'framer-motion';

interface VersionCardProps {
  version: string;
  name: string;
  baseVersion: string;
  features: string[];
  color: string;
  delay: number;
}

const VersionCard = ({ version, name, baseVersion, features, color, delay }: VersionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className={`${color} p-6 text-white`}>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-gilroy font-bold">{name}</h3>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{version}</span>
        </div>
        <p className="mt-2 opacity-90">Based on {baseVersion}</p>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-gilroy font-semibold mb-4">Key Features</h4>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={`${name}-${feature.substring(0, 10)}`} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${color.replace('bg-', 'text-')} mt-0.5 mr-2 shrink-0`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-incredible-text/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const VersionsSection = () => {
  const versions = [
    {
      version: "v1",
      name: "IncredibleOS v1",
      baseVersion: "One UI 4.1.1 Android 12",
      color: "bg-incredible-v1",
      features: [
        "Material You theming for dynamic color palettes",
        "Improved privacy dashboard for better control",
        "Smarter widgets with stackable functionality",
        "Improved RAM management for smoother multitasking",
      ],
      delay: 0.1,
    },
    {
      version: "v2",
      name: "IncredibleOS v2",
      baseVersion: "One UI 5 Android 13",
      color: "bg-incredible-v2",
      features: [
        "Refined animations for a smoother experience",
        "Enhanced lock screen customization options",
        "Improved notification layout and controls",
        "Modes and Routines for personalized automation",
        "Privacy and security dashboard enhancements",
      ],
      delay: 0.25,
    },
    {
      version: "v3",
      name: "IncredibleOS v3",
      baseVersion: "One UI 6 Android 14",
      color: "bg-incredible-v3",
      features: [
        "Modernized Quick Panel with improved accessibility",
        "Enhanced camera features with Pro Mode",
        "New font and design language for a fresh look",
        "AI-powered Keyboard and Browser",
        "Smarter multitasking with split-screen improvements",
        "Advanced battery optimization and usage insights",
      ],
      delay: 0.4,
    }
  ];

  return (
    <section id="versions" className="py-16 bg-incredible-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-gilroy font-bold mb-4">
            Choose Your <span className="text-incredible-primary">Version</span>
          </h2>
          <p className="text-incredible-muted max-w-2xl mx-auto">
            IncredibleOS comes in three different versions, each based on a different version of One UI.
            Choose the one that best fits your needs and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {versions.map((version) => (
            <VersionCard
              key={version.version}
              version={version.version}
              name={version.name}
              baseVersion={version.baseVersion}
              features={version.features}
              color={version.color}
              delay={version.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VersionsSection;
