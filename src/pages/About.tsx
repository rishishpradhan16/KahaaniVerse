import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-primary">About KahaaniVerse</h1>
            <p className="text-xl text-muted-foreground">Your gateway to infinite stories</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                KahaaniVerse is a revolutionary digital reading platform built for everyone. We started our journey in 2024 with a simple vision: to make quality literature accessible to readers worldwide through an intuitive, beautiful, and immersive reading experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our platform combines cutting-edge technology with timeless storytelling, offering readers a seamless way to discover, read, and engage with books across all genres. From fantasy epics to contemporary romance, from thrilling mysteries to thought-provoking science fiction - we have something for every reader.
              </p>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that great stories have the power to transport, inspire, and transform lives. Our mission is to create a vibrant ecosystem where readers can:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                <li>Discover new authors and hidden literary gems</li>
                <li>Enjoy personalized reading recommendations</li>
                <li>Track their reading progress and build their digital library</li>
                <li>Connect with a community of fellow book lovers</li>
                <li>Access books anytime, anywhere, on any device</li>
              </ul>
            </section>

            <section className="bg-card p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why Choose KahaaniVerse?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Curated Collections</h3>
                  <p className="text-muted-foreground">Our expert team carefully selects and categorizes books to help you find exactly what you're looking for.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Smart Features</h3>
                  <p className="text-muted-foreground">Bookmarking, progress tracking, and intelligent search make your reading journey smooth and enjoyable.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Beautiful Design</h3>
                  <p className="text-muted-foreground">Our clean, modern interface ensures nothing distracts you from the joy of reading.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Always Growing</h3>
                  <p className="text-muted-foreground">We continuously add new features and expand our library based on reader feedback and preferences.</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
