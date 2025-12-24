import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Globe, 
  BarChart3, 
  Layers, 
  Users, 
  ArrowRight, 
  Flame, 
  Coins, 
  Lock, 
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  ExternalLink,
  Wallet
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solution', href: '#solution' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b10] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0b10]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:rotate-12 transition-transform">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">SYNDICATE<span className="text-indigo-500">GATEWAY</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors">{link.name}</a>
            ))}
            <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all shadow-lg active:scale-95">
              Whitepaper
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0f16] border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{link.name}</a>
            ))}
            <button className="bg-indigo-600 text-white w-full py-3 rounded-xl font-bold">Whitepaper</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold mb-8 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            WEB3 NATIVE PAYMENT INFRASTRUCTURE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Unifying Global Payments <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-600">
              Through Protocol Trust.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            A next-generation infrastructure designed for emerging markets. Transparent, trust-minimized, and community-driven.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all">
              Join Token Sale <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all">
              Merchant Dashboard
            </button>
          </div>

          {/* Trusted Badges */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Optimized for</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 text-xl font-bold text-white"><Shield className="w-6 h-6"/> BASE</div>
              <div className="flex items-center gap-2 text-xl font-bold text-white"><Layers className="w-6 h-6"/> ETHEREUM L2</div>
              <div className="flex items-center gap-2 text-xl font-bold text-white"><Wallet className="w-6 h-6"/> USDC NATIVE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Problem Section */}
      <section id="solution" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Breaking the Barrier for <span className="text-indigo-400">Emerging Markets.</span></h2>
              <p className="text-slate-400 mb-8 text-lg">
                Traditional payment providers centralize profits while externalizing risk. We replace opaque intermediaries with onchain revenue transparency.
              </p>
              <div className="space-y-4">
                {[
                  "Unified fiat + crypto gateway",
                  "Modular API-first infrastructure",
                  "Automated token burn mechanism",
                  "Community-funded expansion models"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-indigo-500 w-6 h-6 mt-1" />
                    <span className="text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-gradient-to-b from-white/10 to-transparent rounded-3xl border border-white/10">
                <div className="text-4xl font-extrabold text-white mb-2">100%</div>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Onchain Revenue</p>
              </div>
              <div className="p-8 bg-gradient-to-b from-white/10 to-transparent rounded-3xl border border-white/10 translate-y-8">
                <div className="text-4xl font-extrabold text-white mb-2">0%</div>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Equity Issuance</p>
              </div>
              <div className="p-8 bg-gradient-to-b from-white/10 to-transparent rounded-3xl border border-white/10">
                <div className="text-4xl font-extrabold text-white mb-2">40%</div>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Profit Burn</p>
              </div>
              <div className="p-8 bg-gradient-to-b from-white/10 to-transparent rounded-3xl border border-white/10 translate-y-8">
                <div className="text-4xl font-extrabold text-white mb-2">L2</div>
                <p className="text-sm text-slate-400 uppercase tracking-wider font-bold">Primary Scaling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Ecosystem Architecture</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built for scalability and modularity, Syndicate Gateway integrates with existing financial rails while leveraging the security of Ethereum.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <BarChart3 className="w-8 h-8"/>, title: "Merchant Dashboard", desc: "Real-time analytics, settlement tracking, and multi-currency management." },
              { icon: <Zap className="w-8 h-8"/>, title: "Payment APIs", desc: "Modular SDKs for seamless integration into SaaS, Gaming, and E-commerce." },
              { icon: <Globe className="w-8 h-8"/>, title: "Local PSP Mesh", desc: "Bridging banks in South Asia and SE Asia with global crypto liquidity." },
              { icon: <Layers className="w-8 h-8"/>, title: "Settlement Layer", desc: "Instant crypto settlements in USDC/USDT via Layer-2 networks." },
              { icon: <Shield className="w-8 h-8"/>, title: "Revenue Router", desc: "Smart contracts that automatically allocate profits to burn and rewards." },
              { icon: <Users className="w-8 h-8"/>, title: "DAO Governance", desc: "Transparent voting on fee structures and treasury expansion." }
            ].map((card, i) => (
              <div key={i} className="group p-8 bg-white/5 hover:bg-white/[0.08] border border-white/10 rounded-3xl transition-all hover:-translate-y-1">
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 bg-[#0d0f16] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-6 tracking-widest uppercase">
                Native Asset: $SGT
              </div>
              <h2 className="text-4xl font-bold text-white mb-8">Empowering the <br />Network Economy.</h2>
              <p className="text-slate-400 mb-10 text-lg">
                SGT is a utility and governance token with a fixed supply of 1,000,000,000. It drives value through a sustainable deflationary model and protocol participation.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Flame className="text-orange-500 w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Deflationary Burn Engine</h4>
                    <p className="text-sm text-slate-400">40% of all net platform revenue is used to buy back and burn $SGT from the market.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                  <Coins className="text-indigo-400 w-10 h-10 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Protocol Rewards</h4>
                    <p className="text-sm text-slate-400">40% of revenue flows to the reward pool for active $SGT stakers in USDC/ETH.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-[2.5rem] border border-white/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-xs font-mono text-slate-500">CONTRACT: 0xSGT...BASE</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <Layers className="text-indigo-500" /> Token Distribution
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Public Sale", value: "35%", color: "bg-indigo-500" },
                  { label: "Ecosystem & Rewards", value: "20%", color: "bg-purple-500" },
                  { label: "Team (Vested)", value: "15%", color: "bg-blue-500" },
                  { label: "Treasury", value: "15%", color: "bg-pink-500" },
                  { label: "Liquidity", value: "10%", color: "bg-emerald-500" },
                  { label: "Advisors", value: "5%", color: "bg-slate-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm font-bold text-slate-300 mb-2">
                      <span>{item.label}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color}`} style={{ width: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">The Growth Path</h2>
            <p className="text-slate-400">Our strategic vision for the next 18 months.</p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
            {[
              { phase: "Phase 1", title: "Foundation", items: ["MVP Launch", "Merchant Onboarding", "Public Token Sale"], status: "active" },
              { phase: "Phase 2", title: "Scale", items: ["Regional Expansion (South Asia)", "Affiliate Program", "DAO Activation"], status: "upcoming" },
              { phase: "Phase 3", title: "Unification", items: ["Full Web3 Settlement", "Onchain Escrow", "Global Expansion"], status: "upcoming" }
            ].map((step, i) => (
              <div key={i} className={`mb-16 relative pl-8 md:pl-0 ${i % 2 === 0 ? 'md:translate-x-[-100%] md:pr-12 md:text-right' : 'md:translate-x-0 md:pl-12'}`}>
                <div className={`absolute left-[-9px] md:left-[-9px] top-0 w-[18px] h-[18px] rounded-full border-4 border-[#0a0b10] ${step.status === 'active' ? 'bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-white/10'}`} />
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] transition-all">
                  <span className="text-indigo-400 font-bold text-xs tracking-widest uppercase">{step.phase}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-4">{step.title}</h3>
                  <ul className={`space-y-2 text-slate-400 text-sm ${i % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        {i % 2 === 0 ? (
                          <>
                            <span>{item}</span>
                            <ChevronRight className="w-4 h-4 text-indigo-500 hidden md:block" />
                          </>
                        ) : (
                          <>
                            <ChevronRight className="w-4 h-4 text-indigo-500" />
                            <span>{item}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Ready to build the future of <br />emerging market payments?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 relative z-10 font-medium">
              Join the Syndicate Gateway ecosystem today and be part of a transparent, community-owned financial network.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                Become a Merchant
              </button>
              <button className="bg-indigo-900/40 text-white backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-900/60 transition-all">
                Read the Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <Shield className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white uppercase italic">Syndicate Gateway</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                Empowering the next billion users in emerging markets with trustless payment infrastructure. Built on Base.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Discord', 'Telegram', 'Github'].map(platform => (
                  <a key={platform} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resou