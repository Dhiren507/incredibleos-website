import { motion } from 'framer-motion';
import { useState } from 'react';

interface DownloadOption {
  name: string;
  description: string;
  icon: string;
  url: string;
}

interface VersionDownloadProps {
  version: string;
  name: string;
  color: string;
  description: string;
  options: DownloadOption[];
  isActive: boolean;
}

const VersionDownload = ({ version, name, color, description, options, isActive }: VersionDownloadProps) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <div className={`${color} p-6 text-white`}>
        <h3 className="text-2xl font-gilroy font-bold mb-1">{name}</h3>
        <p className="opacity-90">{description}</p>
      </div>
      <div className="p-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-incredible-primary transition-colors"
            >
              <div className="text-incredible-muted">
                {option.icon === 'google-drive' && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png"
                    alt="Google Drive"
                    className="h-7 w-7"
                  />
                )}
                {option.icon === 'telegram' && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                    alt="Telegram"
                    className="h-7 w-7"
                  />
                )}
                {option.icon === 'github' && (
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub"
                    className="h-7 w-7"
                  />
                )}
                {option.icon === 'xda' && (
                  <img
                    src="/xda-logo.png" // Use local XDA logo
                    alt="XDA"
                    className="h-7 w-13"
                  />
                )}
              </div>
              <div>
                <div className="font-semibold text-incredible-text">{option.name}</div>
                <div className="text-incredible-muted text-sm">{option.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const DownloadSection = () => {
  const [activeVersion, setActiveVersion] = useState('v3'); // Default to v3

  const versions = [
    {
      id: 'v1',
      name: 'IncredibleOS v1',
      color: 'bg-incredible-v1',
      description: 'Based on One UI 4.1.1 with Samsung experience',
      options: [
        {
          name: 'Google Drive',
          description: 'Fastest download option',
          icon: 'google-drive',
          url: 'https://drive.google.com/file/d/1q99CK4kRSzJuu4FVQ4kmQWi6WLDLg3vM/view?pli=1',
        },
        {
          name: 'Telegram Channel',
          description: 'Join our community',
          icon: 'telegram',
          url: 'https://t.me/incredibleOSUpdates/3',
        },
        {
          name: 'GitHub',
          description: 'Source code and releases',
          icon: 'github',
          url: 'https://github.com/Dhiren507/incredibleOS-A12-m30s',
        },
        {
          name: 'XDA Thread',
          description: 'Discussion and support',
          icon: 'xda',
          url: 'https://xdaforums.com/t/rom-12-oneui-4-1-1-stable-incredible-os-for-m30s.4718976/',
        },
      ],
    },
    {
      id: 'v2',
      name: 'IncredibleOS v2',
      color: 'bg-incredible-v2',
      description: 'Based on One UI 5 with improved features',
      options: [
        {
          name: 'Google Drive',
          description: 'Fastest download option',
          icon: 'google-drive',
          url: 'https://drive.google.com/file/d/1zj-YzBcXLvwqEhFTzGx5UOSVQi4Jy6Yq/view',
        },
        {
          name: 'Telegram Channel',
          description: 'Join our community',
          icon: 'telegram',
          url: 'https://t.me/incredibleOSUpdates/14',
        },
        {
          name: 'GitHub',
          description: 'Source code and releases',
          icon: 'github',
          url: 'https://github.com/Dhiren507/incredibleOS-A13-m30s',
        },
        {
          name: 'XDA Thread',
          description: 'Discussion and support',
          icon: 'xda',
          url: 'https://xdaforums.com/t/rom-13-one-ui-5-1-stable-incredible-os-v2-for-galaxy-m30s.4725635/',
        },
      ],
    },
    {
      id: 'v3',
      name: 'IncredibleOS v3',
      color: 'bg-incredible-v3',
      description: 'Latest version based on One UI 6',
      options: [
        {
          name: 'Google Drive',
          description: 'Fastest download option',
          icon: 'google-drive',
          url: 'https://drive.google.com/file/d/1QJjdS2KQVvCWoWgk4-cbAYschKV8vY70/view',
        },
        {
          name: 'Telegram Channel',
          description: 'Join our community',
          icon: 'telegram',
          url: 'https://t.me/incredibleOSUpdates/34',
        },
        {
          name: 'GitHub',
          description: 'Source code and releases',
          icon: 'github',
          url: 'https://github.com/Dhiren507/incredibleOS-A14-One-Ui-6.1-Beta/tree/main',
        },
        {
          name: 'XDA Thread',
          description: 'Discussion and support',
          icon: 'xda',
          url: 'https://xdaforums.com/t/rom-14-one-ui-6-1-stable-incredible-os-v3-for-galaxy-m30s.4728388/',
        },
      ],
    },
  ];

  return (
    <section id="download" className="py-16 bg-incredible-background">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-gilroy font-bold mb-4">
            Download <span className="text-incredible-secondary">IncredibleOS</span>
          </h2>
          <p className="text-incredible-muted max-w-2xl mx-auto mb-8">
            Select the version you want to download and choose your preferred download method.
            Make sure to follow the installation instructions for your specific device.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {versions.map((version) => (
              <button
                key={version.id}
                onClick={() => setActiveVersion(version.id)} // Update active version
                className={`px-6 py-2 rounded-full font-gilroy font-semibold transition-all duration-300
                  ${activeVersion === version.id
                    ? `${version.color} text-white`
                    : 'bg-white text-incredible-text border border-gray-200 hover:border-incredible-primary'
                  }`}
              >
                {version.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {versions.map((version) => (
            <VersionDownload
              key={version.id}
              version={version.id}
              name={version.name}
              color={version.color}
              description={version.description}
              options={version.options}
              isActive={activeVersion === version.id} // Pass correct isActive prop
            />
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-gilroy font-semibold mb-4 text-incredible-primary">Installation Instructions</h3>
          <ol className="list-decimal list-inside space-y-3 text-incredible-text/80">
            <li>Back up your data before installing IncredibleOS.</li>
            <li>Download the ROM file for your preferred version.</li>
            <li> IMPORTANT!! -&gt; Downloading the ROM File and Flashing from Internal Storage is Recommended.</li>
            <li>Boot into recovery mode.</li>
            <li>Wipe Dalvik, Cache, Data, Product, System, and Vendor Partitions.</li>
            <li>Flash the ROM file. And then Format Data</li>
            <li>Reboot and enjoy your new IncredibleOS!</li>
          </ol>
          <div className="mt-4 text-sm text-incredible-muted">
            For detailed instructions, please visit our <a href="https://t.me/incredibleOSChat" target="_blank" rel="noopener noreferrer" className="text-incredible-primary underline">Telegram channel</a> or <a href="https://xdaforums.com/t/rom-12-oneui-4-1-1-stable-incredible-os-for-m30s.4718976/" target="_blank" rel="noopener noreferrer" className="text-incredible-primary underline">XDA thread</a>.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
