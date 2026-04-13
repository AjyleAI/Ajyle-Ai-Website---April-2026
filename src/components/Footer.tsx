import { Send } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-outline-variant/15 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <a href="/" className="text-xl font-bold text-on-surface mb-6 block font-headline">Ajyle AI</a>
          <p className="text-on-surface-variant leading-relaxed">
            Protecting growth through responsible AI.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 font-headline">Connect</h4>
          <a 
            href="https://www.linkedin.com/in/ade-shokoya/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-on-surface-variant hover:text-primary transition-colors block"
          >
            LinkedIn
          </a>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 font-headline">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/solutions" className="text-on-surface-variant hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-on-surface-variant hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/privacy-policy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 font-headline text-primary-container">Newsletter</h4>
          <p className="text-on-surface-variant text-sm mb-4">Monthly strategic insights for SME founders.</p>
          <div className="flex bg-surface rounded-lg p-1 border border-outline-variant/20 focus-within:border-primary-container transition-all">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-none focus:ring-0 text-sm flex-1 px-3"
            />
            <button className="bg-primary text-white p-2 rounded-md hover:brightness-110 transition-all">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-outline-variant/10 text-center md:text-left text-on-surface-variant text-sm">
        © 2026 Ajyle AI. All rights reserved.
      </div>
    </footer>
  );
}
