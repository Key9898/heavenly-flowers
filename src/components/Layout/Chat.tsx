import { useState } from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import styles from './SocialMedia.module.css';

const socialIcons = [
    {
        name: 'Facebook',
        icon: (
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
        href: 'https://facebook.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-blue-600/90'
    },
    {
        name: 'Line',
        icon: (
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
        ),
        href: 'https://line.me',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-green-600/90'
    },
    {
        name: 'WhatsApp',
        icon: (
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
        ),
        href: 'https://whatsapp.com',
        target: '_blank',
        rel: 'noopener noreferrer',
        color: 'bg-green-600/90'
    },
]

const Chat = () => {
    const [socialMenuOpen, setSocialMenuOpen] = useState(false);

    return (
        <div className="fixed bottom-6 left-6 z-40">
            {/* Social Media Icons */}
            <div className={`flex flex-col space-y-3 mb-3 transition-all duration-300 ${socialMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                {socialIcons.map((social, index) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target={social.target}
                        rel={social.rel}
                        className={`${styles.socialMediaLink} ${social.color} ${styles[`socialDelay${index}`]}`}
                        title={social.name}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Main Chat Icon */}
            <button
                type="button"
                onClick={() => setSocialMenuOpen(!socialMenuOpen)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-600/70 via-blue-600/75 to-indigo-600/70 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl hover:from-cyan-500/70 hover:via-blue-500/75 hover:to-indigo-500/70 transition-all duration-200 transform"
                aria-label="Open social media menu"
            >
                <ChatBubbleLeftRightIcon className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 ${socialMenuOpen ? 'rotate-360' : ''}`} />
            </button>
        </div>
    );
};

export default Chat;