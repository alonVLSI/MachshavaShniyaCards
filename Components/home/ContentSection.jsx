import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CreditCard, Star, FileText } from 'lucide-react';

export default function ContentSection() {
  const contents = [
    {
      icon: BookOpen,
      title: "11 קלפי הטיות חשיבה",
      description: "בגודל A5. בצידו האחד של הקלף איור שממחיש את הטיית החשיבה, ובצידו השני שאלות אתגור מותאמות להטיית החשיבה הרלוונטית."
    },
    {
      icon: CreditCard,
      title: "קלף 'המחיר'",
      description: "רשימת מחירים אישיים, רגשיים ותפקודיים שאנו משלמים על הטיות החשיבה."
    },
    {
      icon: Star,
      title: "קלף 'המומחה'",
      description: "רשימת המלצות לדרכי הסתכלות נוספות לפיתוח חשיבה גמישה, מאוזנת ומציאותית יותר."
    },
    {
      icon: FileText,
      title: "דף הסבר לשימוש",
      description: "מדריך מפורט לשימוש בערכת הקלפים בעבודה עצמית ובחדר הטיפול."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 border-green-200 text-lg px-4 py-2 rounded-full mb-6">
            מה בערכה?
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            במחשווה שנייה – כלי פשוט שעושה שינוי גדול
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ערכת הקלפים "במחשווה שנייה" מפתחת מודעות להטיות החשיבה, מאמנת לגמישות מחשבתית, 
            מחזקת קולות פנימיים מאוזנים והופכת את המחשבה האוטומטית הבלתי נראית לגלויה ומדוברת.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contents.map((content, index) => (
            <Card key={index} className="border-2 border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <content.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{content.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{content.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            שאלות אתגור פשוטות – לפעמים זה כל מה שצריך
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            באמצעות שאלות אתגור פשוטות וישירות, האדם לומד להציב סימן שאלה על המחשבות האוטומטיות שלו, 
            לזהות את הטיות החשיבה, לעצור ולשאול: "אולי יש דרך אחרת לחשוב על האירוע?"
          </p>
        </div>
      </div>
    </section>
  );
}