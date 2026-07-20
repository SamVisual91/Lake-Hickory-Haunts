import { NextResponse } from "next/server";

const legacyRedirects = new Map([
  ["/tickets.html", "/tickets"],
  ["/schedule.html", "/hours-events"],
  ["/hours-and-events", "/hours-events"],
  ["/hours-and-events.html", "/hours-events"],
  ["/attractions.html", "/attractions"],
  ["/characters.html", "/characters"],
  ["/about.html", "/about-us"],
  ["/awards-and-reviews", "/about-us"],
  ["/awards-and-reviews.html", "/about-us"],
  ["/new.html", "/characters"],
  ["/get-directions", "/directions"],
  ["/about", "/about-us"],
  ["/disclaimers-and-rules", "/faq#disclaimers-rules"],
  ["/warnings-and-disclaimers", "/faq"],
  ["/tix", "/tickets"],
  ["/tickets/{{ selectedReview.source.url }}", "/tickets"],
  ["/tickets/{{ testimonial.source.url }}", "/tickets"],
  ["/employment.html", "/jobs"],
  ["/attractions/mangler", "/attractions/chop-shop"],
  ["/character-bios/boss-the-clown", "/characters"],
  ["/employment", "/jobs"],
  ["/character-bios/deadly-dangerous-delilah", "/characters"],
  ["/character-bios/charles-the-midnight-murderer", "/characters"],
  ["/pictures/lhh-construction", "/about-us"],
  ["/pdf/employeehandbook.pdf", "/jobs"],
  ["/{{ testimonial.source.url }}", "/"],
  ["/{{ selectedReview.source.url }}", "/"],
  ["/Special", "/"],
  ["/tickets.html/1000", "/tickets"],
  ["/character-zone", "/characters"],
  ["/contact", "/contact"],
  ["/contact.html", "/contact"],
  ["/contact-us", "/contact"],
  ["/index.html", "/"],
  ["/pictures/lhh-2014", "/about-us"],
  ["/photos", "/about-us"],
  ["/photos.html", "/about-us"],
  ["/videos/profiles-season-1", "/characters"],
  ["/videos", "/"],
  ["/videos.html", "/"],
  ["/pdf/lakehickoryhauntsapplicationofemployment-01.pdf", "/jobs"],
  ["/www.XscapeNC.com", "/"],
  ["/warnings.html/1000", "/faq"],
  ["/photos-alt", "/about-us"],
  ["/schedule.html/1000", "/hours-events"],
  ["/gallery.html", "/about-us"],
  ["/covid", "/faq"],
  ["/covid.html", "/"],
  ["/videos/{{ selectedReview.source.url }}", "/"],
  ["/videos/{{ testimonial.source.url }}", "/"],
  ["/embrace-the-thrills-of-haunt-season-at-lake-hickory-haunts", "/"],
  ["/characters/{{ testimonial.source.url }}", "/characters"],
  ["/characters/{{ selectedReview.source.url }}", "/characters"],
  ["/links.html", "/"],
  ["/faq.html", "/faq"],
  ["/warnings.html", "/faq"],
]);

function normalizePath(pathname) {
  if (!pathname) {
    return "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function getRedirectDestination(pathname) {
  const candidates = new Set([normalizePath(pathname)]);

  try {
    candidates.add(normalizePath(decodeURIComponent(pathname)));
  } catch {
    // Keep the raw pathname when decoding fails.
  }

  for (const candidate of candidates) {
    if (/^\/wp-.*\.php$/i.test(candidate)) {
      return "/";
    }
  }

  for (const candidate of candidates) {
    const destination = legacyRedirects.get(candidate);

    if (destination) {
      return destination;
    }
  }

  return null;
}

export function proxy(request) {
  const normalizedPath = normalizePath(request.nextUrl.pathname);
  const legacyDestination = getRedirectDestination(request.nextUrl.pathname);
  const destination = legacyDestination ?? normalizedPath;
  const shouldRedirectHost = request.nextUrl.hostname === "lakehickoryhaunts.com";
  const shouldRedirectPath = destination !== request.nextUrl.pathname;

  if (!shouldRedirectHost && !shouldRedirectPath) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.url);

  if (shouldRedirectHost) {
    redirectUrl.hostname = "www.lakehickoryhaunts.com";
  }

  redirectUrl.pathname = destination;

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
