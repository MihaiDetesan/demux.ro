export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const pillars = [
  {
    icon: "Eye",
    title: "Vision Systems",
    blurb:
      "We give production lines eyes — real-time defect detection and quality inspection built on the cameras you already have.",
    detail:
      "We build the computer-vision layer that watches your line: defect detection, part counting, and real-time inspection wired directly into your existing PLCs and MES.",
  },
  {
    icon: "Cpu",
    title: "Embedded & IoT",
    blurb:
      "Software for the devices you've already deployed — fleets, sensors, and the gateways that tie them together.",
    detail:
      "From edge gateways to fleet telemetry, we ship the software that sits between your hardware and your dashboards — reliable, low-latency, built to run unattended.",
  },
  {
    icon: "Sun",
    title: "Green Energy Software",
    blurb:
      "Keep an eye on every panel and turbine, no matter whose hardware it is, from one place.",
    detail:
      "Asset performance monitoring, inverter and turbine telemetry, alerting, and control interfaces for teams operating distributed renewable generation.",
  },
  {
    icon: "Network",
    title: "Web App Integrations",
    blurb:
      "The tools your team already uses, finally talking to each other.",
    detail:
      "We stitch together the web apps your teams already depend on — single sign-on, data sync, and custom middleware so nothing lives on an island.",
  },
] as const;

export const benefits = [
  { title: "Fast to start", body: "We scope in days, not months, and get working software in front of you early." },
  { title: "Built to your stack", body: "No rip-and-replace. We work with the hardware and systems you already run." },
  { title: "Ongoing support", body: "We stay on after launch — the people who built it are the people who answer the phone." },
];

export const process = [
  { title: "Say hello", body: "Tell us what you're running and what's not working yet." },
  { title: "We scope it", body: "A short, honest proposal — what we'd build, and what it'd take." },
  { title: "We build it", body: "Small team, direct access, working software you can see as it comes together." },
];
