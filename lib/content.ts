/**
 * All site copy lives here, in Hebrew, exactly as published on tdrone.co.il.
 * Only the presentation was redesigned — the wording is unchanged.
 */

export const site = {
  name: 'TDrone',
  phone: '050-6922-729',
  phoneHref: 'tel:0506922729',
  email: 'doron@tdron.co.il',
  emailHref: 'mailto:doron@tdron.co.il',
  credentials: ['אישורי רת״א', 'הסמכת יצרן', 'ביטוח אווירי'],
};

export const externalLinks = {
  services: 'https://www.tdrone.co.il/services',
  portfolio: 'https://www.tdrone.co.il/services#Portfolio',
  why: 'https://www.tdrone.co.il/why',
  partnerships: 'https://www.tdrone.co.il/partnerships',
  knowledge: 'https://www.tdrone.co.il/knowledge',
  about: 'https://www.tdrone.co.il/about',
};

export const navLinks = [
  { label: 'שירותי ניקוי', href: '#services' },
  { label: 'למה טידרון', href: '#why' },
  { label: 'תהליך העבודה', href: '#process' },
  { label: 'שותפים', href: externalLinks.partnerships },
  { label: 'מרכז ידע', href: externalLinks.knowledge },
  { label: 'אודות', href: externalLinks.about },
];

export const hero = {
  kicker: 'TDrone',
  headline: ['הדור החדש של', 'ניקיון בגבהים'],
  copy: 'ניקוי מקצועי ובטוח באמצעות רחפנים מתקדמים. פתרון חדשני לניקוי מבנים, חזיתות ומערכות סולאריות בגובה.',
  primaryCta: 'קבלו הצעת מחיר',
  secondaryCta: 'הצטרפו כשותפים',
  portfolioLink: 'לצפייה בפרויקטים מהשטח',
};

export const trustItems = [
  'ניקוי חזיתות זכוכית',
  'שטיפת פאנלים סולאריים',
  'מתקני תעשייה ותשתיות',
  'עבודה ללא פיגומים',
  'תיעוד מלא של הביצוע',
  'ביטוח צד ג׳ אווירי',
];

export const services = {
  heading: 'השירותים שלנו',
  copy: 'שלושה מתארי עבודה, אותה שיטה: רחפן ייעודי, צוות מוסמך ותיעוד מלא — בלי פיגומים ובלי עבודה מסוכנת בגובה.',
  link: 'לצפייה בפרויקטים מהשטח',
  cardLink: 'בדיקת התכנות לאתר שלכם',
  items: [
    {
      title: 'תעשייה ותשתיות',
      copy: 'פתרונות ניקוי למבנים, מתקנים ותשתיות שבהם הגישה מורכבת, יקרה או מסוכנת.',
      image: '/service-industrial.avif',
      alt: 'רחפן TDrone שוטף גג מתקן תעשייתי',
    },
    {
      title: 'מערכות אנרגיה מתחדשת',
      copy: 'ניקוי פנלים סולריים, טורבינות רוח ומערכות אנרגיה גדולות ביעילות ובבטיחות.',
      image: '/service-solar.avif',
      alt: 'רחפן TDrone שוטף מערך פאנלים סולאריים',
    },
    {
      title: 'מבנים / חזיתות / חלונות',
      copy: 'ניקוי מקצועי של חלונות, קירות, מבנים חיצוניים, פינות ומשטחים גדולים של מבנים.',
      image: '/service-buildings.avif',
      alt: 'צוות TDrone מנקה חזית זכוכית של מבנה משרדים',
    },
  ],
};

export const why = {
  heading: 'מדוע TDrone?',
  link: 'מה חשוב לבדוק לפני שמזמינים?',
  items: [
    { icon: 'shield', title: 'בטיחות', copy: 'הפחתת הצורך בעבודה מסוכנת בגובה.' },
    { icon: 'bolt', title: 'מהירות', copy: 'פחות ציוד, פחות הפרעה לפעילות באתר.' },
    { icon: 'badge', title: 'מקצועיות', copy: 'פעילות בהתאם לאישורי רת״א הנדרשים.' },
    { icon: 'insurance', title: 'ביטוח', copy: 'כיסוי ביטוחי מקצועי המותאם לפעילות רחפנים.' },
  ],
};

export const process = {
  heading: 'תהליך העבודה עם TDrone',
  copy: 'חמישה שלבים ברורים — מהנתונים הראשוניים ועד תיעוד הביצוע.',
  steps: [
    { title: 'הכנה ונתונים', copy: 'השלמת פרטי האתר, בדיקת הגישה והצורך בסיוע טכנולוגי.' },
    { title: 'בדיקת סיכונים', copy: 'בחינת תנאי השטח, סביבת העבודה והדרישות התפעוליות.' },
    { title: 'הצעת מחיר', copy: 'קבלת הצעת מחיר לאחר בדיקת האתר והסיכונים.' },
    { title: 'תכנון ואישור', copy: 'התאמת הרחפן, הציוד, שיטת העבודה והאישורים הנדרשים.' },
    { title: 'ביצוע ותיעוד', copy: 'ביצוע העבודה בהתאם לתכנון ולדרישות הבטיחות.' },
  ],
};

export const checklist = {
  label: "צ'ק ליסט למזמין העבודה",
  heading: 'המחיר הוא לא השאלה היחידה',
  copy: "לא כל אישורי רת״א מתירים הטסה במתאר שטיפה בסביבה אורבנית. ביטוח צד ג' כשלעצמו אינו בהכרח מכסה את מזמין העבודה. רוצים ללמוד איך לנהל את הסיכון בתבונה?",
  points: [
    'אילו אישורי רת״א קיימים למפעיל — ולמתאר שטיפה בפרט',
    'האם הפוליסה מכסה גם את מזמין העבודה',
    'מי אחראי על סקר הסיכונים ועל תיעוד הביצוע',
  ],
  knowledgePrefix: 'עוד בנושא ב',
  knowledgeLink: 'דף מרכז המידע',
  knowledgeSuffix: ' שלנו',
  primaryCta: 'מה חשוב לבדוק לפני שמזמינים?',
  secondaryCta: "צ'ק ליסט למזמין העבודה",
};

export const contact = {
  heading: 'צור קשר',
  copy: 'רוצים לבדוק אם ניקוי באמצעות רחפן מתאים לפרויקט שלכם? שלחו לנו מספר פרטים ונבצע בדיקת התכנות ראשונית.',
  fields: {
    fullname: 'שם ושם משפחה',
    company: 'שם החברה',
    phone: 'טלפון',
    email: 'דואר אלקטרוני',
    assetType: 'סוג הנכס / מתקן לניקוי',
    height: 'גובה משוער לשטיפה (במטרים)',
    city: 'עיר',
    notes: 'פרטים נוספים שעלינו לדעת',
  },
  assetTypes: ['מבנה / חזית / חלונות', 'מערכת אנרגיה מתחדשת', 'תעשייה / תשתית', 'אחר'],
  note: 'הפרטים נשמרים לצורך בדיקת התכנות בלבד.',
  submit: 'שלח טופס',
  success: 'תודה — הפרטים התקבלו. נחזור אליכם לבדיקת התכנות ראשונית.',
};

export const footer = {
  tagline: 'ניקוי מקצועי ובטוח באמצעות רחפנים מתקדמים — למבנים, חזיתות ומערכות סולאריות בגובה.',
  columns: [
    {
      title: 'שירותים',
      links: [
        { label: 'מבנים וחזיתות', href: '#services' },
        { label: 'מערכות סולאריות', href: '#services' },
        { label: 'תעשייה ותשתיות', href: '#services' },
      ],
    },
    {
      title: 'חוקי',
      links: [
        { label: 'מדיניות פרטיות', href: externalLinks.knowledge },
        { label: 'תנאים ותקנון אתר', href: externalLinks.knowledge },
        { label: 'אישורים ורגולציה', href: externalLinks.knowledge },
      ],
    },
    {
      title: 'התקשרות',
      links: [
        { label: site.phone, href: site.phoneHref },
        { label: site.email, href: site.emailHref },
        { label: 'קבלו הצעת מחיר', href: '#contact' },
      ],
    },
  ],
  rights: 'כל הזכויות שמורות ל־TDrone 2026 ©',
  credentials: 'אישורי רת״א · הסמכת יצרן · ביטוח אווירי',
};
