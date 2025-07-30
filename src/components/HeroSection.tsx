import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Next-Gen IT Solutions for Tomorrow's Challenges",
  subtitle = "Empowering businesses with cutting-edge technology services, innovative solutions, and expert support to drive digital transformation.",
  ctaText = "Explore Our Services",
  onCtaClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full min-h-[700px] bg-background flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 opacity-10 animate-pulse">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-64 h-64 rounded-full bg-primary/30"
          />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-pulse">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.3 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="w-80 h-80 rounded-full bg-blue-500/30"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <motion.div
            initial={{ scale: 0.9, opacity: 0.2 }}
            animate={{
              scale: [0.9, 1.3, 0.9],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          />
        </div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            {subtitle}
          </p>
          <Button
            size="lg"
            onClick={onCtaClick}
            className="group text-md px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* 3D animated illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative w-full h-[400px] flex items-center justify-center">
            {/* Central hub */}
            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute z-10 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Globe className="w-16 h-16 text-white" />
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-blue-300/30"
            >
              <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-purple-300/30"
            >
              <motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-blue-200/20"
            >
              <motion.div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
                <Database className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
