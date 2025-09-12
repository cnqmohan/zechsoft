'use client';

import { Button } from '@/components/ui/button';
import { Bot, Phone, MessageSquare, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Chatbot } from './chatbot';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      d="M16.75 13.96c.25.13.43.2.5.28.08.08.16.18.18.25.03.08.05.15.05.23c0 .1-.03.2-.08.3s-.15.2-.28.3c-.13.1-.3.2-.5.28c-.2.08-.43.14-.7.18c-.28.04-.58.06-1 .06c-.4 0-.8-.03-1.18-.1c-.38-.06-.78-.18-1.2-.34c-.4-.16-.8-.38-1.2-.64c-.4-.26-.78-.56-1.14-.9c-.35-.35-.68-.72-1-1.1c-.3-.4-.58-.8-.8-1.23c-.24-.42-.4-1-.5-1.5c-.1-1.1.26-2.04.8-2.58c.18-.18.4-.3.68-.36c.28-.05.58-.06.85.03c.28.1.5.25.68.45c.18.2.3.42.38.65c.08.23.13.48.1.72c-.04.25-.1.48-.2.7c-.1.2-.2.38-.34.52c-.13.15-.28.3-.45.43c-.18.14-.3.2-.4.24c-.1.04-.2.06-.23.06c-.03 0-.08-.02-.13-.05c-.05-.03-.1-.08-.18-.15c-.08-.08-.14-.15-.2-.23c-.18-.25-.34-.52-.48-.8c-.14-.28-.23-.58-.28-.9c-.05-.3-.04-.6.04-.9c.08-.3.2-.58.4-.85c.2-.28.4-.5.7-.7c.28-.18.6-.3.9-.4c.3-.08.6-.13.9-.13c.33 0 .65.04.95.13c.3.1.58.2.8.38c.24.18.43.4.6.6s.3.4.4.65c.1.25.16.5.18.75c.03.25.03.5 0 .73c-.04.23-.1.48-.2.7c-.1.23-.23.45-.4.65c-.15.2-.33.38-.52.53c-.2.15-.4.28-.6.36c-.2.1-.4.16-.6.2c-.2.04-.38.06-.53.06c-.15 0-.3-.02-.45-.05c-.15-.03-.3-.1-.45-.18c-.15-.08-.3-.18-.4-.3c-.1-.1-.2-.23-.28-.36c-.08-.13-.13-.25-.15-.35c-.02-.1-.02-.2 0-.3c.04-.1.1-.2.18-.28c.1-.08.2-.14.3-.2c.1-.04.2-.1.3-.13c.1-.03.2-.04.25-.04c.15 0 .3.03.45.1c.15.08.28.15.4.25z"
    />
  </svg>
);


export function FloatingActionButtons() {
    const [isChatOpen, setChatOpen] = useState(false);
  
    return (
      <>
        <div className="fixed bottom-4 left-4 z-50">
           <Button size="icon" className="rounded-full w-14 h-14 shadow-lg" onClick={() => setChatOpen(true)}>
             <Bot className="h-7 w-7" />
             <span className="sr-only">Open Chat</span>
           </Button>
        </div>

        <Chatbot isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
  
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
            <Button asChild size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg">
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon />
                    <span className="sr-only">Contact on WhatsApp</span>
                </Link>
            </Button>
            <Button asChild size="icon" className="rounded-full w-14 h-14 shadow-lg">
                 <Link href="tel:1234567890">
                    <Phone className="h-7 w-7" />
                    <span className="sr-only">Call Us</span>
                </Link>
            </Button>
        </div>
      </>
    );
  }
  