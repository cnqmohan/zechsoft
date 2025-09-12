'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Bot, Send, User, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export function Chatbot({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessages: Message[] = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages([...newMessages, { sender: 'bot', text: "Thanks for your message. A representative will get back to you shortly." }]);
    }, 1000);
  };

  return (
    <div ref={chatRef} className={cn("fixed bottom-20 left-4 z-50 transition-transform duration-300 ease-in-out", isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+2rem)]')}>
        <Card className="w-80 h-[500px] shadow-2xl flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
                <div className="flex items-center gap-3">
                    <Bot className="h-7 w-7" />
                    <CardTitle className="text-lg">Zechsoft Assistant</CardTitle>
                </div>
                 <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/80" onClick={onClose}>
                    <X className="h-5 w-5" />
                </Button>
            </CardHeader>
            <CardContent className="flex-grow p-4 overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                            {message.sender === 'bot' && <AvatarIcon><Bot className="h-6 w-6 text-primary" /></AvatarIcon>}
                            <div className={`rounded-lg px-3 py-2 max-w-[80%] ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                <p className="text-sm">{message.text}</p>
                            </div>
                            {message.sender === 'user' && <AvatarIcon><User className="h-6 w-6 text-muted-foreground" /></AvatarIcon>}
                        </div>
                    ))}
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t">
                 <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex w-full items-center space-x-2"
                    >
                    <Input
                        id="message"
                        placeholder="Type your message..."
                        className="flex-1"
                        autoComplete="off"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit" size="icon">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
            </CardFooter>
        </Card>
    </div>
  );
}

function AvatarIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
            {children}
        </div>
    )
}
