import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Users, Heart, TrendingUp } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "סיטואציות חברתיות קשות",
      description: "נטייה להיקלע למצבים בינאישיים מסובכים ולהסיק מסקנות מוטעות"
    },
    {
      icon: Heart,
      title: "רגשות שליליים",
      description: "חוויית תחושות אכזבה ותסכול שחוזרות שוב ושוב"
    },
    {
      icon: TrendingUp,
      title: "תקיעות במחזורים",
      description: "מעגל של תגובות נוקשות ולא יעילות שמסלף את המציאות"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            האם זה מכיר לכם?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כולנו נופלים במלכודת של המחשבות השליליות שלנו: הכללות, נבואות שחורות, קריאת מחשבות ועוד.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="border-2 border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              המוח מספר לנו סיפור שהוא לא תמיד נכון
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              המחשבות הללו יוצרות פירוש שלילי שמסלף את המציאות, ומובילות אותנו שוב ושוב 
              למסקנות שגויות ולתגובות נוקשות ולא יעילות. דפוסי החשיבה האלה נקראים הטיות חשיבה 
              כי הם 'מטים' ומסלפים את הדרך בה אנו מפרשים את המציאות.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}