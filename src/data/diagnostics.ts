export type AlertSeverity = "Critical" | "Warning" | "Info" | "Resolved";

export type DiagnosticAlert = {
  id: number;
  title: string;
  module: string;
  severity: AlertSeverity;
  status: "Active" | "Monitoring" | "Resolved";
  description: string;
  suggestedAction: string;
  timestamp: string;
};

export type VehicleModule = {
  id: number;
  name: string;
  health: number;
  status: "Healthy" | "Monitor" | "Needs Review";
};

export const diagnosticAlerts: DiagnosticAlert[] = [
  {
    id: 1,
    title: "Battery temperature variance detected",
    module: "Battery System",
    severity: "Critical",
    status: "Active",
    description:
      "Battery temperature readings are outside the expected range for the current drive cycle.",
    suggestedAction:
      "Review battery thermal logs and inspect cooling system performance.",
    timestamp: "2026-06-25 09:12",
  },
  {
    id: 2,
    title: "Front camera calibration warning",
    module: "ADAS Camera System",
    severity: "Warning",
    status: "Monitoring",
    description:
      "Front camera alignment is slightly outside the preferred calibration range.",
    suggestedAction:
      "Run camera calibration check and confirm sensor alignment.",
    timestamp: "2026-06-25 09:28",
  },
  {
    id: 3,
    title: "Charging connector communication delay",
    module: "Charging System",
    severity: "Warning",
    status: "Active",
    description:
      "Charging connector handshake response time is slower than expected.",
    suggestedAction:
      "Inspect charging connector communication logs and retry charge session.",
    timestamp: "2026-06-25 09:44",
  },
  {
    id: 4,
    title: "Connectivity signal restored",
    module: "Connectivity",
    severity: "Resolved",
    status: "Resolved",
    description:
      "Temporary connectivity drop has recovered and data sync is operating normally.",
    suggestedAction:
      "No immediate action required. Continue passive monitoring.",
    timestamp: "2026-06-25 10:03",
  },
  {
    id: 5,
    title: "Thermal management efficiency notice",
    module: "Thermal Management",
    severity: "Info",
    status: "Monitoring",
    description:
      "Thermal management system is operating within range but showing reduced efficiency.",
    suggestedAction:
      "Monitor trend data and review cooling cycle behaviour if repeated.",
    timestamp: "2026-06-25 10:18",
  },
];

export const vehicleModules: VehicleModule[] = [
  {
    id: 1,
    name: "Battery System",
    health: 74,
    status: "Needs Review",
  },
  {
    id: 2,
    name: "ADAS Camera System",
    health: 82,
    status: "Monitor",
  },
  {
    id: 3,
    name: "Thermal Management",
    health: 88,
    status: "Monitor",
  },
  {
    id: 4,
    name: "Brake System",
    health: 96,
    status: "Healthy",
  },
  {
    id: 5,
    name: "Drive Unit",
    health: 93,
    status: "Healthy",
  },
  {
    id: 6,
    name: "Connectivity",
    health: 91,
    status: "Healthy",
  },
  {
    id: 7,
    name: "Charging System",
    health: 79,
    status: "Monitor",
  },
];