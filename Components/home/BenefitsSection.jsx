import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, BookOpen, Target, Lightbulb, Heart, Brain, Star } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Star,
      title: "הכלי היחיד מסוגו",
      description: "מאגר של שאלות אתגור ספציפיות לכל הטיית חשיבה"
    },
    {
      icon: Target,
      title: "מדויק ויעיל",
      description: "שאלות ממוקדות שמקדמות יותר מכל הסבר על המחשבות עצמן"
    },
    {
      icon: Brain,
      title: "תנועה פנימית אמיתית",
      description: "לא רק זיהוי של הטיות החשיבה, אלא יצירת שינוי אמיתי"
    },
    {
      icon: BookOpen,
      title: "פשוט ופרקטי",
      description: "מתאים לעבודה עצמית וחדר הטיפול בצורה פשוטה ונגישה"
    },
    {
      icon: Heart,
      title: "שפה נגישה",
      description: "נטולת ביקורת, מזמינה שיתוף ומקדמת את התהליך הטיפולי"
    },
    {
      icon: Lightbulb,
      title: "איורים הומוריסטיים",
      description: "משקפים את האבסורד שבהטיית החשיבה וכלי עוצמתי לתובנה"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            למה כדאי לכם?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ערכת הקלפים "במחשווה שנייה" היא כלי ייחודי שעושה שינוי אמיתי בדרך שבה אנו חושבים ומגיבים
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-100">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              מתאים למגוון רחב של אנשי מקצוע
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900">מטפלים CBT</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900">מטפלים זוגיים</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900">אנשי חינוך</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium text-gray-900">מאמנים אישיים</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}