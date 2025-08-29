"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Zap, BarChart3, FileText, Layers, ArrowRight, Github, Mail, Users, Brain, Code, TrendingUp } from "lucide-react";

export default function LandingPage() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Background glow - more subtle */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">MetaEval</span>
            <br />
            <span className="text-white">Benchmark smarter. Build faster.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI evaluation made simple, fast, and reliable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button size="lg" variant="gradient" className="glow text-lg px-8 py-4">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" onClick={scrollToFeatures} className="text-lg px-8 py-4 border-gray-700 hover:bg-gray-900">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to evaluate and compare AI models effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/30 hover:glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Compare AI Models</CardTitle>
                <CardDescription className="text-gray-400">
                  Side-by-side comparison of multiple AI models with detailed metrics and performance analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/30 hover:glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Use Pre-built Templates</CardTitle>
                <CardDescription className="text-gray-400">
                  Ready-to-use templates for common evaluation tasks like summarization, coding, and Q&A.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/30 hover:glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">View Detailed Reports</CardTitle>
                <CardDescription className="text-gray-400">
                  Generate comprehensive reports with detailed insights, rankings, and recommendations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why AI Benchmarking Matters</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              In today's rapidly evolving AI landscape, choosing the right model can make or break your project's success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Research & Development</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Researchers and developers need reliable benchmarks to evaluate model performance, 
                    compare different architectures, and make informed decisions about which AI models 
                    to integrate into their applications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Developer Productivity</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Developers can save countless hours by quickly identifying the best AI model for 
                    their specific use case, whether it's natural language processing, code generation, 
                    or creative content creation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Building AI Applications</h3>
                  <p className="text-gray-400 leading-relaxed">
                    When building AI-powered applications, understanding model performance, cost, 
                    and speed is crucial for creating scalable and efficient solutions that meet 
                    user expectations and business requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Cost Optimization</h3>
                  <p className="text-gray-400 leading-relaxed">
                    With the rising costs of AI model usage, businesses need to carefully evaluate 
                    performance-to-cost ratios to optimize their AI infrastructure and ensure 
                    maximum return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">MetaEval</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI evaluation made simple, fast, and reliable. Compare LLMs, generate benchmark reports, and use prebuilt templates.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                <li><Link href="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="https://github.com" target="_blank" className="flex items-center hover:text-white transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="mailto:contact@metaeval.com" className="flex items-center hover:text-white transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="flex items-center hover:text-white transition-colors">
                    <Users className="w-4 h-4 mr-2" />
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MetaEval. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
