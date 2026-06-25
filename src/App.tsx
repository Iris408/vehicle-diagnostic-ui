import { useMemo, useState } from "react";
import "./App.css";
import {
  diagnosticAlerts,
  vehicleModules,
  type AlertSeverity,
  type DiagnosticAlert,
} from "./data/diagnostics";

const severityFilters: Array<AlertSeverity | "All"> = [
  "All",
  "Critical",
  "Warning",
  "Info",
  "Resolved",
];

function getSeverityClass(severity: AlertSeverity) {
  return severity.toLowerCase();
}

function App() {
  const [selectedSeverity, setSelectedSeverity] =
    useState<AlertSeverity | "All">("All");

  const [selectedAlert, setSelectedAlert] = useState<DiagnosticAlert>(
    diagnosticAlerts[0]
  );

  const filteredAlerts = useMemo(() => {
    if (selectedSeverity === "All") {
      return diagnosticAlerts;
    }

    return diagnosticAlerts.filter(
      (alert) => alert.severity === selectedSeverity
    );
  }, [selectedSeverity]);

  const criticalCount = diagnosticAlerts.filter(
    (alert) => alert.severity === "Critical"
  ).length;

  const warningCount = diagnosticAlerts.filter(
    (alert) => alert.severity === "Warning"
  ).length;

  const resolvedCount = diagnosticAlerts.filter(
    (alert) => alert.severity === "Resolved"
  ).length;

  const averageHealth = Math.round(
    vehicleModules.reduce((total, module) => total + module.health, 0) /
      vehicleModules.length
  );

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Vehicle Diagnostic UI Demo</p>
          <h1>Vehicle Health Monitoring Dashboard</h1>
          <p className="hero-copy">
            A frontend diagnostic dashboard that simulates vehicle alert triage,
            module health tracking, and technician-focused review actions using
            mock vehicle data.
          </p>
        </div>

        <div className="vehicle-card">
          <span>Demo Vehicle</span>
          <strong>DEMO-VEHICLE-001</strong>
          <p>Overall health: {averageHealth}%</p>
        </div>
      </section>

      <section className="stats-grid">
        <article className="stat-card">
          <span>Active alerts</span>
          <strong>{diagnosticAlerts.length}</strong>
        </article>

        <article className="stat-card critical-border">
          <span>Critical</span>
          <strong>{criticalCount}</strong>
        </article>

        <article className="stat-card warning-border">
          <span>Warnings</span>
          <strong>{warningCount}</strong>
        </article>

        <article className="stat-card resolved-border">
          <span>Resolved</span>
          <strong>{resolvedCount}</strong>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <h2>Diagnostic Alerts</h2>
              <p>Filter and review current vehicle diagnostic messages.</p>
            </div>
          </div>

          <div className="filter-row">
            {severityFilters.map((severity) => (
              <button
                key={severity}
                type="button"
                className={selectedSeverity === severity ? "active" : ""}
                onClick={() => setSelectedSeverity(severity)}
              >
                {severity}
              </button>
            ))}
          </div>

          <div className="alert-list">
            {filteredAlerts.map((alert) => (
              <button
                key={alert.id}
                type="button"
                className={
                  selectedAlert.id === alert.id
                    ? "alert-card selected"
                    : "alert-card"
                }
                onClick={() => setSelectedAlert(alert)}
              >
                <div>
                  <span
                    className={`severity-pill ${getSeverityClass(
                      alert.severity
                    )}`}
                  >
                    {alert.severity}
                  </span>
                  <h3>{alert.title}</h3>
                  <p>{alert.module}</p>
                </div>

                <small>{alert.timestamp}</small>
              </button>
            ))}
          </div>
        </article>

        <article className="panel detail-panel">
          <div className="panel-heading">
            <div>
              <h2>Alert Detail</h2>
              <p>Technician-focused review information.</p>
            </div>
          </div>

          <span
            className={`severity-pill ${getSeverityClass(
              selectedAlert.severity
            )}`}
          >
            {selectedAlert.severity}
          </span>

          <h3>{selectedAlert.title}</h3>

          <div className="detail-grid">
            <div>
              <span>Module</span>
              <strong>{selectedAlert.module}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{selectedAlert.status}</strong>
            </div>

            <div>
              <span>Timestamp</span>
              <strong>{selectedAlert.timestamp}</strong>
            </div>
          </div>

          <section className="detail-box">
            <h4>Description</h4>
            <p>{selectedAlert.description}</p>
          </section>

          <section className="detail-box action-box">
            <h4>Suggested technician action</h4>
            <p>{selectedAlert.suggestedAction}</p>
          </section>
        </article>
      </section>

      <section className="panel module-section">
        <div className="panel-heading">
          <div>
            <h2>Vehicle Module Status</h2>
            <p>Mock health status across major vehicle systems.</p>
          </div>
        </div>

        <div className="module-grid">
          {vehicleModules.map((module) => (
            <article className="module-card" key={module.id}>
              <div>
                <h3>{module.name}</h3>
                <span>{module.status}</span>
              </div>

              <strong>{module.health}%</strong>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${module.health}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;