import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Copyright, Scale } from 'lucide-react';
import { Button } from '../components/ui/button';
import Footer from '../components/Footer';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="p-2 hover:bg-surface-hover"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-primary">KahaaniVerse</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto p-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Page Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6"
            >
              <Shield className="h-10 w-10 text-primary" />
            </motion.div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Content Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important information about the content and intellectual property rights on KahaaniVerse
            </p>
          </div>

          {/* Main Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-2xl p-8 mb-8 border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Copyright className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  KahaaniVerse Content Disclaimer
                </h2>
                <p className="text-muted-foreground">
                  Please read this disclaimer carefully before using our platform
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                All content on KahaaniVerse is <strong>original and AI-assisted</strong>, 
                created and curated by KahaaniVerse. Any reproduction, redistribution, 
                or unauthorized use of the content without explicit permission is 
                <strong> strictly prohibited</strong>.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                All AI-generated content is guided, edited, and published by KahaaniVerse, 
                making it the <strong>intellectual property of KahaaniVerse</strong>. 
                Any false or fraudulent copyright claims will be legally challenged.
              </p>

              <p className="text-foreground leading-relaxed">
                By using this website, you acknowledge that all books and materials are 
                <strong> original creations</strong> and any attempt to misrepresent 
                ownership may result in legal action.
              </p>
            </div>
          </motion.div>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Copyright Protection */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Copyright Protection
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our content is protected under international copyright laws. 
                    We actively monitor and enforce our intellectual property rights 
                    to ensure creators are properly credited and compensated.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    User Responsibilities
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Users must respect our content policies and may not copy, 
                    distribute, or claim ownership of any materials found on 
                    this platform without written permission.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mt-8 text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Questions About Our Content?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about our content policies, copyright protection, 
              or would like to request permission for content use, please don't hesitate to contact us.
            </p>
            <Button
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Contact Us
            </Button>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-8 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;