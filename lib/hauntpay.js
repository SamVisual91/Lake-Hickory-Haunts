const HAUNTPAY_DATE_URLS = {
  "2026-09-12": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789287",
  "2026-09-18": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789289",
  "2026-09-19": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789291",
  "2026-09-25": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789313",
  "2026-09-26": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789316",
  "2026-10-02": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789319",
  "2026-10-03": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789338",
  "2026-10-09": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789323",
  "2026-10-10": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789342",
  "2026-10-11": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789297",
  "2026-10-16": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789324",
  "2026-10-17": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789343",
  "2026-10-18": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789362",
  "2026-10-23": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789331",
  "2026-10-24": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789344",
  "2026-10-25": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789335",
  "2026-10-29": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789300",
  "2026-10-30": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789358",
  "2026-10-31": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789345",
  "2026-11-01": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789303",
  "2026-11-06": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789309",
  "2026-11-07": "https://app.hauntpay.com/events/lhh-2026/event_times?et_id=1789311",
};

export function submitHauntPayDateSelection(eventDate) {
  if (typeof window === "undefined" || !eventDate) {
    return;
  }

  const targetUrl = HAUNTPAY_DATE_URLS[eventDate];

  if (targetUrl) {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  }
}
