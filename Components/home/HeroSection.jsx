
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, ArrowLeft, Target, Lightbulb } from 'lucide-react';

export default function HeroSection() {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  const backgroundStyle = {
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="absolute inset-0 opacity-30" style={backgroundStyle}></div>
      
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-6 h-32">
            <div className="relative w-32 h-32">
                {/* Back card - representing the "biased/cloudy thought" */}
                <div className="absolute w-20 h-28 bg-gray-200 rounded-xl shadow-md transform -rotate-12 top-4 left-4 border-2 border-gray-300 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                </div>
                {/* Front card - representing the "clear/analyzed thought" */}
                <div className="absolute w-20 h-28 bg-white rounded-xl shadow-xl transform rotate-6 top-2 left-10 border-2 border-blue-300 flex flex-col items-center justify-center p-2">
                    <Brain className="w-12 h-12 text-blue-600" />
                </div>
            </div>
        </div>
        <div className="mb-8">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-lg px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 ml-2" />
            כלי טיפולי חדשני
          </Badge>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-blue-600">במחשווה שנייה</span>
          <br />
          <span className="text-3xl md:text-4xl font-normal text-gray-700">
            ערכת קלפים לזיהוי ואתגור הטיות חשיבה
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          כלי טיפולי פשוט ויעיל לשינוי דפוסי חשיבה שליליים אצל מתבגרים, צעירים ומבוגרים. 
          מפתח חשיבה גמישה ומאוזנת באמצעות שאלות אתגור ממוקדות.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToPricing}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            הזמן עכשיו ב-120 ₪
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full"
            onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
          >
            למה זה עובד?
          </Button>
        </div>

        {/* Cards Image Placeholder */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border-2 border-gray-100 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">תמונת הקלפים תגיע בקרוב</p>
                <p className="text-sm text-gray-500 mt-2">11 קלפי הטיות חשיבה + קלפי עזר</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">זיהוי הטיות</h3>
            <p className="text-gray-600">מודעות למחשבות שליליות וזיהוי דפוסי חשיבה מעכבים</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">אתגור ממוקד</h3>
            <p className="text-gray-600">שאלות ספציפיות לכל הטיית חשיבה ליצירת תנועה פנימית</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">חשיבה גמישה</h3>
            <p className="text-gray-600">פיתוח דרכי חשיבה חדשות ומאוזנות יותר</p>
          </div>
        </div>
      </div>
    </section>
  );
}
