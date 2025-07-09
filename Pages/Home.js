import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Users, 
  CheckCircle, 
  Star, 
  ArrowLeft, 
  ArrowRight,
  MessageSquare,
  Target,
  Lightbulb,
  Heart,
  BookOpen,
  Phone,
  Mail,
  ShoppingCart,
  Sparkles,
  Award,
  TrendingUp
} from 'lucide-react';

import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import SolutionSection from '../components/home/SolutionSection';
import BenefitsSection from '../components/home/BenefitsSection';
import ContentSection from '../components/home/ContentSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AuthorSection from '../components/home/AuthorSection';
import PricingSection from '../components/home/PricingSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <ContentSection />
      <TestimonialsSection />
      <AuthorSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}