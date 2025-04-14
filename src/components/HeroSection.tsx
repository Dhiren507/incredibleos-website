import { motion } from 'framer-motion';

const FloatingObject = ({
  src,
  size,
  delay,
  top,
  left,
  right,
  bottom,
  rotate = true,
  className = ''
}: {
  src: string;
  size: string;
  delay: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: boolean;
  className?: string;
}) => {
  return (
    <motion.img
      src={src}
      alt="Floating object"
      className={`absolute ${size} z-0 ${className}`}
      style={{ top, left, right, bottom }}
      initial={{ y: 0, rotateZ: 0 }}
      animate={{
        y: [0, -10, 0, 10, 0],
        rotateZ: rotate ? [0, 10, 0, -10, 0] : 0
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop',
        ease: 'easeInOut'
      }}
    />
  );
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    // Add extra offset for specific sections
    const additionalOffset = id === 'download' ? 50 : 0; // Adjust for "Download" section
    const offsetPosition = elementPosition - navbarHeight + additionalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 max-w-screen-lg relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-gilroy font-bold mb-2">
                <span className="text-incredible-primary">Incredible</span>
                <span className="text-incredible-secondary">OS</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-gilroy font-light mb-6">
                Unleash your <span className="text-incredible-accent">Galaxy M30s</span>
              </h2>
              <p className="text-incredible-muted mb-8 max-w-lg mx-auto md:mx-0">
                Experience the ultimate custom ROM with three amazing versions based on One UI 4.1.1, One UI 5, and One UI 6.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <button onClick={() => scrollToSection('download')} className="primary-button">
                  Download Now
                </button>
                <button onClick={() => scrollToSection('versions')} className="secondary-button">
                  Explore Versions
                </button>
              </div>
            </motion.div>
          </div>
          <div className="relative mb-8 md:mb-0 order-1 md:order-2">
            <motion.div
              className="relative h-64 sm:h-80 md:h-96 w-full flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Phone mockup */}
              <motion.img
                src="/samsung-m30s.png"
                alt="Galaxy M30s with IncredibleOS"
                className="h-full object-contain relative z-10"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0, 10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'loop',
                  ease: 'easeInOut'
                }}
              />

              {/* Floating objects - colored shapes for IncredibleOS */}
              <FloatingObject
                src="/shapes/circle-purple.svg"
                size="w-12 h-12 md:w-16 md:h-16"
                delay={0}
                top="10%"
                right="15%"
                className="hidden sm:block"
              />
              <FloatingObject
                src="/shapes/square-orange.svg"
                size="w-10 h-10 md:w-14 md:h-14"
                delay={1}
                top="15%"
                left="15%"
                className="hidden sm:block"
              />
              <FloatingObject
                src="/shapes/triangle-indigo.svg"
                size="w-14 h-14 md:w-18 md:h-18"
                delay={2}
                bottom="20%"
                right="20%"
                className="hidden sm:block"
              />
              <FloatingObject
                src="/shapes/diamond-blue.svg"
                size="w-12 h-12 md:w-16 md:h-16"
                delay={1.5}
                bottom="15%"
                left="18%"
                className="hidden sm:block"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
