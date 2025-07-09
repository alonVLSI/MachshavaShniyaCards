import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Target, Lightbulb, CheckCircle } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-lg px-4 py-2 rounded-full mb-6">
            הפתרון
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            שאלות אתגור פשוטות – לפעמים זה כל מה שצריך
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            ערכת הקלפים "במחשווה שנייה" מפתחת מודעות להטיות החשיבה, מאמנת לגמישות מחשבתית, 
            מחזקת קולות פנימיים מאוזנים והופכת את המחשבה האוטומטית הבלתי נראית לגלויה ומדוברת.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              איך זה עובד?
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">זיהוי הטיות החשיבה</h4>
                  <p className="text-gray-600">האדם לומד להציב סימן שאלה על המחשבות האוטומטיות שלו</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">שאלות אתגור ממוקדות</h4>
                  <p className="text-gray-600">כל הטיית חשיבה מקבלת שאלות ספציפיות שמעוררות תנועה פנימית</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">פיתוח חשיבה גמישה</h4>
                  <p className="text-gray-600">"אולי יש דרך אחרת לחשוב על האירוע?" - יצירת אלטרנטיבות</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                מהמחשבה האוטומטית...
              </h4>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium">"אני תמיד נכשל"</p>
                <p className="text-red-600 text-sm mt-1">מחשבה אוטומטית שלילית</p>
              </div>
              <div className="text-3xl font-bold text-gray-400 mb-6">↓</div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">"באילו מצבים כן הצלחתי?"</p>
                <p className="text-green-600 text-sm mt-1">שאלת אתגור ממוקדת</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            התוצאה: התנהגות גמישה, מאוזנת ומציאותית יותר
          </h3>
          <p className="text-lg opacity-90">
            שאלות האתגור מחוללות תנועה בחשיבה ועוזרות לשחרר דפוסי חשיבה שליליים
          </p>
        </div>
      </div>
    </section>
  );
}