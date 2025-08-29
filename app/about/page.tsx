"use client";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Shield, 
  TrendingUp, 
  Globe, 
  Award, 
  Lightbulb,
  BarChart3,
  Code,
  FileText,
  Layers,
  ArrowRight,
  Mail,
  Github,
  Linkedin
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10"></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About MetaEval</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionizing AI model evaluation with cutting-edge benchmarking technology and comprehensive analytics.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white">Our Mission</CardTitle>
                <CardDescription className="text-xl text-gray-300">
                  To democratize AI model evaluation and empower developers, researchers, and businesses to make informed decisions about AI technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                                  <p className="text-gray-400 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                    In the rapidly evolving landscape of artificial intelligence, choosing the right model can make or break your project&apos;s success. 
                    MetaEval provides the tools, insights, and expertise needed to navigate this complex ecosystem with confidence.
                  </p>
              </CardContent>
            </Card>
          </section>

          {/* What We Do */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">AI Model Benchmarking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Comprehensive evaluation of AI models across multiple dimensions including performance, accuracy, speed, and cost efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Detailed Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Generate in-depth reports with actionable insights, performance comparisons, and recommendations for optimal model selection.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center mb-4">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Custom Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Pre-built evaluation templates for common use cases, saving time and ensuring consistent benchmarking methodologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Why Choose MetaEval */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose MetaEval</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Trusted & Reliable</h3>
                    <p className="text-gray-400">
                      Built on rigorous scientific methodologies and trusted by leading AI researchers and developers worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Always Up-to-Date</h3>
                    <p className="text-gray-400">
                      Continuously updated with the latest AI models and evaluation metrics to ensure you&apos;re always working with current data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Global Community</h3>
                    <p className="text-gray-400">
                      Join a community of AI enthusiasts, researchers, and developers sharing insights and best practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Industry Recognition</h3>
                    <p className="text-gray-400">
                      Recognized by leading tech companies and research institutions for our innovative approach to AI evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-16">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-center text-white">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  MetaEval was born from a simple observation: the AI landscape was becoming increasingly complex, 
                  with new models emerging almost daily, each claiming to be the best at various tasks. 
                  Developers and researchers were spending countless hours manually testing and comparing models, 
                  often with inconsistent methodologies and incomplete data.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our team of AI researchers, software engineers, and data scientists came together with a shared vision: 
                  to create a comprehensive, automated platform that would standardize AI model evaluation and make 
                  the process accessible to everyone, from individual developers to large enterprises.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, MetaEval serves thousands of users worldwide, helping them make informed decisions about AI technology 
                  and accelerating the development of innovative AI applications. We continue to push the boundaries of what&apos;s 
                  possible in AI evaluation, always with the goal of making AI more accessible, transparent, and effective.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-800 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white">AI Researchers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Leading experts in machine learning and artificial intelligence, driving innovation in model evaluation methodologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white">Software Engineers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Experienced developers building robust, scalable platforms that handle millions of model evaluations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-white">Data Scientists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Analytics experts ensuring accurate, meaningful insights from complex model performance data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Ready to Get Started?</CardTitle>
                <CardDescription className="text-xl text-gray-300">
                  Join thousands of developers and researchers using MetaEval to make better AI decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup">
                    <Button size="lg" variant="gradient" className="glow">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-900">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="flex justify-center space-x-6">
              <Link href="mailto:contact@metaeval.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </Link>
              <Link href="https://github.com" target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
