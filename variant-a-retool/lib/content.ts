export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const pillars = [
  {
    icon: "Eye",
    title: "Vision Systems",
    blurb: "Machine vision and quality-inspection pipelines for production lines.",
    detail:
      "We build the computer-vision layer that watches your line: defect detection, part counting, and real-time inspection wired directly into your existing PLCs and MES.",
  },
  {
    icon: "Cpu",
    title: "Embedded & IoT",
    blurb: "Firmware-adjacent software for connected devices and sensor fleets.",
    detail:
      "From edge gateways to fleet telemetry, we ship the software that sits between your hardware and your dashboards — reliable, low-latency, built to run unattended.",
  },
  {
    icon: "Sun",
    title: "Green Energy Software",
    blurb: "Monitoring and control software for solar and wind assets.",
    detail:
      "Asset performance monitoring, inverter and turbine telemetry, alerting, and control interfaces for teams operating distributed renewable generation.",
  },
  {
    icon: "Network",
    title: "Web App Integrations",
    blurb: "Connecting internal tools, ERPs, and dashboards across your stack.",
    detail:
      "We stitch together the web apps your teams already depend on — single sign-on, data sync, and custom middleware so nothing lives on an island.",
  },
] as const;

export const industries = [
  {
    title: "Vision on the line",
    body:
      "A manufacturing client needed real-time defect detection without replacing existing line hardware. We deployed a vision pipeline that reads from their current cameras and flags defects before the part reaches packaging.",
  },
  {
    title: "Energy assets, monitored",
    body:
      "A solar operator managing sites across multiple regions needed one view of inverter health. We built a monitoring layer that pulls telemetry from mixed-vendor hardware into a single operational dashboard.",
  },
];

export const process = [
  { title: "Scope", body: "We start on-site or on a call, mapping your existing hardware and software before proposing anything." },
  { title: "Build", body: "Small team, direct communication, working software in weeks — not a multi-quarter program." },
  { title: "Run", body: "We stay on for support and iteration once the system is live in production." },
];
