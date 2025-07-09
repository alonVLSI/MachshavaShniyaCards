import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Heart, MessageSquare } from 'lucide-react';

export default function TestimonialsSection() {
  const targetGroups = [
    {
      icon: Users,
      title: "מטפלים קוגניטיביים-התנהגותיים",
      description: "עבורם ליבת העבודה הטיפולית היא עבודה על זיהוי ושינוי דפוסי חשיבה אוטומטיים שליליים"
    },
    {
      icon: Heart,
      title: "אנשי טיפול בגישות שונות",
      description: "העוסקים בטיפול פרטני וקבוצתי במתבגרים ומבוגרים"
    },
    {
      icon: MessageSquare,
      title: "מטפלים זוגיים ומשפחתיים",
      description: "לעבודה עם זוגות ומשפחות על דפוסי חשיבה במערכות יחסים"
    },
    {
      icon: Star,
      title: "אנשי חינוך ומאמנים",
      description: "מדריכי הורים, אנשי ייעוץ, מאמנים אישיים ומנחי סדנאות"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 border-purple-200 text-lg px-4 py-2 rounded-full mb-6">
            למי מתאים?
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            לאילו מטפלים וסוגי התערבויות מתאימה ערכת הקלפים?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כלי רב-תכליתי המתאים למגוון רחב של אנשי מקצוע בתחומי הטיפול והחינוך
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {targetGroups.map((group, index) => (
            <Card key={index} className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <group.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{group.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{group.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            מתאים גם לעבודה עצמית
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            מתבגרים, צעירים ומבוגרים שמעוניינים להכיר ולשנות דפוסי חשיבה שליליים – 
            מחשיבה נוקשה ומעכבת לחשיבה גמישה ומקדמת
          </p>
        </div>
      </div>
    </section>
  );
}