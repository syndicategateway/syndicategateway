<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syndicate Gateway | Web3-Native Payment Infrastructure</title>
    
    <!-- React & ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Babel for JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Framer Motion -->
    <script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        syndicate: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            900: '#0c4a6e',
                            950: '#082f49',
                        },
                        dark: {
                            bg: '#030712', // Slate 950 base
                            card: '#111827', // Gray 900
                            border: '#1f2937', // Gray 800
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: #030712;
            color: #f8fafc;
            overflow-x: hidden;
        }

        .gradient-text {
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .glass-nav {
            background: rgba(3, 7, 18, 0.7);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glow-card {
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.05);
            transition: all 0.3s ease;
        }
        
        .glow-card:hover {
            box-shadow: 0 0 30px rgba(14, 165, 233, 0.15);
            transform: translateY(-5px);
            border-color: #38bdf8;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0f172a; 
        }
        ::-webkit-scrollbar-thumb {
            background: #334155; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #475569; 
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;
        const { motion, AnimatePresence } = window.Motion;
        
        // Icons
        const Icons = {
            ArrowRight: () => <i data-lucide="arrow-right"></i>,
            Shield: () => <i data-lucide="shield-check"></i>,
            Globe: () => <i data-lucide="globe"></i>,
            Zap: () => <i data-lucide="zap"></i>,
            PieChart: () => <i data-lucide="pie-chart"></i>,
            Flame: () => <i data-lucide="flame"></i>,
            Users: () => <i data-lucide="users"></i>,
            Coins: () => <i data-lucide="coins"></i>,
            Menu: () => <i data-lucide="menu"></i>,
            X: () => <i data-lucide="x"></i>,
            Layers: () => <i data-lucide="layers"></i>,
            TrendingUp: () => <i data-lucide="trending-up"></i>
        };

        // --- Components ---

        const Nav = () => {
            const [isOpen, setIsOpen] = useState(false);

            useEffect(() => {
                lucide.createIcons();
            }, [isOpen]);

            const links = [
                { name: "Solution", href: "#solution" },
                { name: "Architecture", href: "#architecture" },
                { name: "Tokenomics", href: "#tokenomics" },
                { name: "Roadmap", href: "#roadmap" },
            ];

            return (
                <nav className="fixed top-0 w-full z-50 glass-nav">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="font-bold text-white text-lg">S</span>
                                </div>
                                <span className="font-bold text-xl tracking-tight text-white">Syndicate Gateway</span>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-8">
                                    {links.map((link) => (
                                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                            {link.name}
                                        </a>
                                    ))}
                                    <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                                        Whitepaper
                                    </button>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
                                    {isOpen ? <Icons.X /> : <Icons.Menu />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="md:hidden bg-dark-bg border-b border-gray-800"
                            >
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {links.map((link) => (
                                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            );
        };

        const Hero = () => {
            return (
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-700/50 text-blue-400 text-sm font-semibold mb-6">
                                The Future of Web3 Payments
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                                Unifying Local & Global <br />
                                <span className="gradient-text">Payment Rails</span>
                            </h1>
                            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                                Syndicate Gateway is a trust-minimized protocol built for emerging markets. 
                                Accept crypto and fiat seamlessly while participating in a deflationary economy.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2">
                                    Launch App <Icons.ArrowRight />
                                </button>
                                <button className="px-8 py-4 bg-transparent border border-gray-700 rounded-full text-gray-300 font-semibold text-lg hover:border-gray-500 hover:text-white transition-all">
                                    Read Documentation
                                </button>
                            </div>
                        </motion.div>

                        {/* Stats Strip */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-10"
                        >
                            {[
                                { label: "Target Network", value: "Base (L2)" },
                                { label: "Revenue Share", value: "80%" },
                                { label: "Token Model", value: "Deflationary" },
                                { label: "Security", value: "Audited" },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            );
        };

        const ProblemSolution = () => {
            return (
                <section id="solution" className="py-24 bg-dark-bg relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bridging the Gap</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Traditional payment gateways centralize profit and externalize risk. Syndicate Gateway flips the model.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Problem */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-red-900/10 border border-red-900/30 p-8 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                                        <Icons.X />
                                    </div>
                                    <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
                                </div>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        Fragmented payment gateways with high fees.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        Limited cross-border access for emerging markets.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        Centralized intermediaries hoarding revenue.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">•</span>
                                        Zero user participation in platform growth.
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Solution */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-emerald-900/10 border border-emerald-900/30 p-8 rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                                        <Icons.Shield />
                                    </div>
                                    <h3 className="text-2xl font-bold text-emerald-400">The Solution</h3>
                                </div>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        Unified Fiat + Crypto payment rails.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        Onchain revenue transparency & distribution.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        Modular API-first infrastructure.
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-emerald-500 mt-1">✓</span>
                                        Community-funded expansion via SGT token.
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>
            );
        };

        const Architecture = () => {
            const features = [
                { icon: <Icons.Layers />, title: "Merchant Dashboard", desc: "Real-time analytics, API key management, and settlement tracking." },
                { icon: <Icons.Globe />, title: "Revenue Router", desc: "Smart contracts automatically split net revenue to Burn, Rewards, and Treasury." },
                { icon: <Icons.Zap />, title: "Settlement Layer", desc: "Instant crypto settlement (USDC/USDT) with local fiat payout rails." },
                { icon: <Icons.Users />, title: "DAO Governance", desc: "SGT holders vote on fee structures and regional expansion." },
            ];

            return (
                <section id="architecture" className="py-24 border-t border-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-16">
                            <span className="text-blue-500 font-semibold tracking-wide uppercase">Infrastructure</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2">Product Architecture</h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-dark-card border border-dark-border p-6 rounded-xl glow-card hover:bg-gray-900"
                                >
                                    <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-lg flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        
                        <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-900/30 text-center">
                            <h3 className="text-2xl font-bold mb-4">Target Market Focus</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {["SaaS Platforms", "Digital Freelancers", "Web3 Apps", "South Asia", "Southeast Asia"].map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-black/40 border border-gray-700 rounded-full text-sm text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

  