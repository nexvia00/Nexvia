export const WHATSAPP_NUMBER = "5219995115178";
export const EMAIL = "nexvia.00@gmail.com";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61564734551037";
export const INSTAGRAM = "https://www.instagram.com/";
export const PHONE_DISPLAY = "999 511 5178";

export const waLink = (planName?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!planName) return `${base}?text=${encodeURIComponent("Hola Nexvia, me interesa conocer más sobre sus soluciones.")}`;
  return `${base}?text=${encodeURIComponent(`Hola Nexvia, me interesa el plan ${planName}`)}`;
};

export const mailLink = `mailto:${EMAIL}`;
