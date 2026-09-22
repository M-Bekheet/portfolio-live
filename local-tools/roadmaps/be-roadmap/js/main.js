// Active roadmap state (default to V2)
let currentRoadmap = roadmapDataV2;
let currentVersion = "v2";

// State management
let progressData = {
  tasks: {},
  notes: {},
  timeSpent: {},
  progress: {}, // Learning progress percentage (0-100)
  lastUpdated: null,
  sessions: {},
  resourceCompleted: {},
  resourceProgress: {},
  gates: { project1: {}, project2: {} },
};

// Utility: Robust Base64 for IDs (Handles Unicode)
function safeB64(str) {
  if (!str) return "na";
  try {
    return btoa(str).replace(/=/g, "");
  } catch (e) {
    return btoa(unescape(encodeURIComponent(str))).replace(/=/g, "");
  }
}

// Chart instances
let phaseChart = null;
let timeChart = null;
let importData = null;
const GATES = [
  "testing",
  "apiDocs",
  "security",
  "reliability",
  "ops",
  "design",
];

// Initialize the application
function init() {
  loadProgressFromStorage();

  // Try to restore version from storage if exists, otherwise default to V3
  if (progressData.version) {
    switchVersion(progressData.version, false);
  } else {
    switchVersion("v3", false);
  }

  // Load problems solved count
  const psInput = document.getElementById("problemsSolvedInput");
  if (psInput && progressData.problemsSolved) {
    psInput.value = progressData.problemsSolved;
  }

  reconcileProgressWithTasks();
  recomputeAllTopicProgressFromResources();

  // UI Render
  renderRoadmap();
  updateVisibilityForVersion();
  renderResourcesGrid();

  // Only render specific sections for V1
  if (currentVersion === "v1") {
    renderGates();
    renderAdvancedTopics();
    renderExpressNest();
    renderJobCoverage();
    updateReadinessUI();
    updateRoleFitUI();
  }

  updateStats();
  initCharts();

  // Collapse Competency Gates by default
  const gatesEl = document.getElementById("gates");
  if (gatesEl && !gatesEl.classList.contains("collapsed")) {
    gatesEl.classList.add("collapsed");
  }
}

function switchVersion(version, save = true) {
  currentVersion = version;
  document.getElementById("versionSelect").value = version;

  if (version === "v1") {
    currentRoadmap = roadmapDataV1;
    document.getElementById("heroTitle").innerText = "Backend-First Senior Roadmap";
    document.getElementById("heroSubtitle").innerText =
      "Core 12‑Week Track · Ship 2 backends by Weeks 8–10";
  } else if (version === "v2") {
    currentRoadmap = roadmapDataV2;
    document.getElementById("heroTitle").innerText =
      "Sophisticated Engineer Roadmap (Legacy)";
    document.getElementById("heroSubtitle").innerText =
      "Data Structures, Algorithms, and C++ Mastery - 6 Month Plan";
  } else {
    currentRoadmap = roadmapDataV3;
    document.getElementById("heroTitle").innerText = "DSA Mastery Roadmap";
    document.getElementById("heroSubtitle").innerText =
      "Master DSA in 4 Months · 150-200 Problems · Abdul Bari + NeetCode";
  }

  if (save) {
    if (!progressData) progressData = {};
    progressData.version = version;
    saveProgressToStorage();

    // Re-render everything
    renderRoadmap();
    updateVisibilityForVersion();
    renderResourcesGrid();

    if (currentVersion === "v1") {
      renderGates();
      renderAdvancedTopics();
      renderExpressNest();
      renderJobCoverage();
      updateReadinessUI();
      updateRoleFitUI();
    }

    updateStats();
    updateCharts(); // Re-init charts with new data
  }
}

function updateVisibilityForVersion() {
  const v1Elements = document.querySelectorAll(".v1-only");
  v1Elements.forEach((el) => {
    if (currentVersion === "v1") {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  const v3Elements = document.querySelectorAll(".v3-only");
  v3Elements.forEach((el) => {
    if (currentVersion === "v3") {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  const advSection = document.getElementById("advanced-section");
  if (currentVersion === "v2" || currentVersion === "v3") {
    advSection.classList.add("hidden");
  } else {
    advSection.classList.remove("hidden");
  }
}

// Render the roadmap structure
function renderRoadmap() {
  const container = document.getElementById("roadmapContent");
  container.innerHTML = "";

  document.getElementById("roadmap-track-title").innerText =
    currentRoadmap.learningObjectives[0].title;

  currentRoadmap.learningObjectives.forEach((objective) => {
    const objectiveElement = createObjectiveElement(objective);
    container.appendChild(objectiveElement);
  });
}

// Create learning objective element
function createObjectiveElement(objective) {
  const objectiveDiv = document.createElement("div");
  objectiveDiv.className = "phase";
  // Auto-expand if V2
  if (currentVersion === "v2") objectiveDiv.className = "phase"; // Not collapsed

  objectiveDiv.innerHTML = `
                <div class="phase-header" onclick="togglePhase('${
                  objective.id
                }')">
                    <div class="phase-header-content">
                        <div class="phase-title">
                            <span class="phase-icon">${objective.icon}</span>
                            <span class="expand-icon">▼</span>
                            ${objective.title}
                        </div>
                        <div class="phase-progress" id="progress-${
                          objective.id
                        }">0% Complete</div>
                    </div>
                </div>
                <div class="phase-content" id="content-${objective.id}">
                    <div class="objective-description">${
                      objective.description
                    }</div>
                    ${objective.topics
                      .map((topic) => createTopicElement(topic, objective.id))
                      .join("")}
                </div>
            `;
  return objectiveDiv;
}

// Create topic element
function createTopicElement(topic, objectiveId) {
  const isCompleted = progressData.tasks[topic.id] || false;
  const sessions = (progressData.sessions && progressData.sessions[topic.id]) || 0;
  const learningProgress =
    typeof progressData.progress[topic.id] === "number"
      ? progressData.progress[topic.id]
      : 0;
  const notes = progressData.notes[topic.id] || "";
  const completedClass = isCompleted ? "completed" : "";

  return `
                <div class="topic ${completedClass}" id="topic-${topic.id}">
                    <div class="topic-header">
                        <div class="checkbox-container">
                            <input type="checkbox" class="checkbox" id="task-${
                              topic.id
                            }" 
                                   ${isCompleted ? "checked" : ""} 
                                   onchange="updateTaskProgress('${topic.id}')">
                            <label for="task-${topic.id}" class="topic-title">${
    topic.title
  }</label>
                        </div>
                        <span class="priority-badge priority-${
                          topic.priority
                        }">${topic.priority}</span>
                        ${
                          topic.pacing
                            ? `<span class="pacing-badge ${
                                topic.pacing === "accelerate"
                                  ? "pacing-accelerate"
                                  : "pacing-needstime"
                              }">${
                                topic.pacing === "accelerate"
                                  ? "⚡ Can Accelerate"
                                  : "⏰ Needs Time"
                              }</span>`
                            : ""
                        }
                        ${
                          topic.isPrerequisites
                            ? '<span class="pacing-badge prereq-badge">Prerequisites</span>'
                            : ""
                        }
                    </div>
                    <div class="topic-description">${topic.description}</div>
                    
                    ${
                      topic.engineeringLogic
                        ? `
                        <div class="engineering-logic">
                            <span class="engineering-logic-title">💡 Engineering Logic</span>
                            ${topic.engineeringLogic}
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      topic.successMetric
                        ? `
                        <div class="success-metric">
                            <strong>🎯 Success Metric:</strong> ${topic.successMetric}
                        </div>
                    `
                        : ""
                    }

                    ${
                      topic.focusAreas
                        ? `
                        <div class="focus-areas">
                            <strong>📎 Focus Areas:</strong> ${topic.focusAreas}
                        </div>
                    `
                        : ""
                    }
                    
                    ${
                      topic.keyTopics && topic.keyTopics.length
                        ? `
                        <div class="focus-areas" style="margin-top:0.5rem">
                            <strong>🔑 Key Topics:</strong>
                            <ul style="padding-left: 1.2rem; margin-top: 0.25rem">
                                ${topic.keyTopics.map((t) => `<li>${t}</li>`).join("")}
                            </ul>
                        </div>
                    `
                        : ""
                    }

                    <div class="time-tracker">
                        <div class="time-item">
                            <div class="time-label">Planned</div>
                            <div class="time-value">${
                              topic.plannedSessions || 0
                            } session${
    (topic.plannedSessions || 0) === 1 ? "" : "s"
  }</div>
                        </div>
                        <div class="time-item">
                            <div class="time-label">Sessions</div>
                            <input type="number" id="sess-${
                              topic.id
                            }" class="time-input" 
                                   value="${sessions}" min="0" step="1" 
                                   onchange="updateSessions('${
                                     topic.id
                                   }', this.value)">
                        </div>
                        <div class="time-item">
                            <div class="time-label">Learning Progress</div>
                            <div class="time-value" id="topicprog-${
                              topic.id
                            }">${learningProgress}%</div>
                        </div>
                    </div>
                    ${
                      Array.isArray(topic.resources) && topic.resources.length
                        ? `
                        <div class="resources">
                            <div class="resources-title">📚 Resources (per‑resource progress drives this topic)</div>
                            <div>
                                ${topic.resources
                                  .map((r, i) => {
                                    const rid = `${topic.id}-r${i}`;
                                    const checked =
                                      progressData.resourceCompleted &&
                                      progressData.resourceCompleted[rid]
                                        ? "checked"
                                        : "";
                                    const rprog =
                                      progressData.resourceProgress &&
                                      typeof progressData.resourceProgress[rid] ===
                                        "number"
                                        ? progressData.resourceProgress[rid]
                                        : checked
                                        ? 100
                                        : 0;
                                    const hoursLabel =
                                      typeof r.hours === "number"
                                        ? ` <span class="time-label">~${r.hours}h</span>`
                                        : "";
                                    return `<div class="resource-row">
                                        <input type="checkbox" id="reschk-${rid}" ${checked} onchange="toggleResource('${rid}','${topic.id}')">
                                        <a href="${r.url}" target="_blank" class="resource-link">${r.name}</a>
                                        <input type="range" min="0" max="100" step="5" class="resource-slider" value="${rprog}" onchange="updateResourceProgress('${rid}','${topic.id}', this.value)">
                                        <span class="resource-progress" id="resprog-${rid}">${rprog}%</span>${hoursLabel}
                                    </div>`;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    `
                        : ""
                    }
                    ${
                      Array.isArray(topic.optionalResources) &&
                      topic.optionalResources.length
                        ? `
                        <div class="resources">
                            <div class="resources-title">🧩 Optional</div>
                            <div>
                                ${topic.optionalResources
                                  .map((r, i) => {
                                    const rid = `${topic.id}-o${i}`;
                                    const checked =
                                      progressData.resourceCompleted &&
                                      progressData.resourceCompleted[rid]
                                        ? "checked"
                                        : "";
                                    const rprog =
                                      progressData.resourceProgress &&
                                      typeof progressData.resourceProgress[rid] ===
                                        "number"
                                        ? progressData.resourceProgress[rid]
                                        : checked
                                        ? 100
                                        : 0;
                                    const hoursLabel =
                                      typeof r.hours === "number"
                                        ? ` <span class="time-label">~${r.hours}h</span>`
                                        : "";
                                    return `<div class="resource-row">
                                        <input type="checkbox" id="reschk-${rid}" ${checked} onchange="toggleResource('${rid}','${topic.id}')">
                                        <a href="${r.url}" target="_blank" class="resource-link">${r.name}</a>
                                        <input type="range" min="0" max="100" step="5" class="resource-slider" value="${rprog}" onchange="updateResourceProgress('${rid}','${topic.id}', this.value)">
                                        <span class="resource-progress" id="resprog-${rid}">${rprog}%</span>${hoursLabel}
                                    </div>`;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    `
                        : ""
                    }
                    <div class="notes-container">
                        <textarea class="notes-input" id="notes-${topic.id}" 
                                  placeholder="📝 Add your learning notes, insights, or challenges here..." 
                                  onchange="updateNotes('${
                                    topic.id
                                  }', this.value)">${notes}</textarea>
                    </div>
                </div>
            `;
}

// Render advanced topics
function renderAdvancedTopics() {
  const container = document.getElementById("advancedTopics");
  if (!currentRoadmap.advancedTopics) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = currentRoadmap.advancedTopics
    .map(
      (topic) => `
                <div class="advanced-topic">
                    <div class="advanced-topic-title">🌟 ${topic.title}</div>
                    <div class="advanced-topic-desc">${topic.description}</div>
                    <div class="advanced-topic-importance"><strong>Why Important:</strong> ${
                      topic.importance
                    }</div>
                    ${
                      topic.resources
                        ? `
                        <div class="resources">
                            <div class="resources-title">📚 Learning Resources</div>
                            <div class="resource-links">
                                ${topic.resources
                                  .map(
                                    (resource) => `
                                    <a href="${resource.url}" target="_blank" class="resource-link">${resource.name}</a>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    `
                        : ""
                    }
                </div>
            `
    )
    .join("");
}

// Toggle learning objective visibility
function togglePhase(objectiveId) {
  const objectiveElement = document.querySelector(
    `#content-${objectiveId}`
  ).parentElement;
  objectiveElement.classList.toggle("collapsed");
}

// Update task progress with gamification
function updateTaskProgress(taskId) {
  const checkbox = document.getElementById(`task-${taskId}`);
  const wasCompleted = progressData.tasks[taskId];

  progressData.tasks[taskId] = checkbox.checked;
  progressData.lastUpdated = new Date().toISOString();

  // Add visual feedback
  const topicElement = checkbox.closest(".topic");
  const topic = findTopicById(taskId);

  if (checkbox.checked) {
    topicElement.classList.add("completed");

    // 1. Set Topic Progress to 100
    progressData.progress[taskId] = 100;

    // 2. Update Topic UI Text
    const progressEl = document.getElementById(`topicprog-${taskId}`);
    if (progressEl) progressEl.textContent = "100%";

    // 3. Update All Resources (Data & UI) to 100%
    if (topic) {
      const markRes = (r, i, isOpt) => {
        const rid = isOpt ? `${taskId}-o${i}` : `${taskId}-r${i}`;
        
        // Data Update
        if (!progressData.resourceCompleted) progressData.resourceCompleted = {};
        if (!progressData.resourceProgress) progressData.resourceProgress = {};
        progressData.resourceCompleted[rid] = true;
        progressData.resourceProgress[rid] = 100;

        // UI Update - Checkbox
        const resChk = document.getElementById(`reschk-${rid}`);
        if (resChk) {
          resChk.checked = true;
          // UI Update - Slider (find relative to checkbox)
          const row = resChk.closest(".resource-row");
          if (row) {
            const slider = row.querySelector(".resource-slider");
            if (slider) slider.value = 100;
          }
        }

        // UI Update - Text Label
        const resLabel = document.getElementById(`resprog-${rid}`);
        if (resLabel) resLabel.textContent = "100%";
      };

      if (Array.isArray(topic.resources)) topic.resources.forEach((r, i) => markRes(r, i, false));
      if (Array.isArray(topic.optionalResources)) topic.optionalResources.forEach((r, i) => markRes(r, i, true));
    }

    if (!wasCompleted) {
      showAchievement("🎉 Challenge Completed!");
    }
  } else {
    topicElement.classList.remove("completed");
    // Reset learning progress when unchecking to reflect not learned
    progressData.progress[taskId] = 0;

    const progressEl = document.getElementById(`topicprog-${taskId}`);
    if (progressEl) progressEl.textContent = "0%";
  }

  saveProgressToStorage();
  updateStats();
  updateCharts();
}

// Update sessions
function updateSessions(taskId, value) {
  if (!progressData.sessions) progressData.sessions = {};
  progressData.sessions[taskId] = parseInt(value, 10) || 0;
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
  updateStats();
  updateCharts();
}

// Update problems solved count (V3 only)
function updateProblemsSolved(value) {
  progressData.problemsSolved = parseInt(value, 10) || 0;
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
}

// Update learning progress
function updateLearningProgress(taskId, progressPercent) {
  const progress = Math.max(0, Math.min(100, parseFloat(progressPercent) || 0));
  progressData.progress[taskId] = progress;
  progressData.lastUpdated = new Date().toISOString();

  // Auto-check the task if progress reaches 100%
  if (progress >= 100 && !progressData.tasks[taskId]) {
    progressData.tasks[taskId] = true;
    const checkbox = document.getElementById(`task-${taskId}`);
    if (checkbox) {
      checkbox.checked = true;
      const topicElement = checkbox.closest(".topic");
      topicElement.classList.add("completed");
      showAchievement("🎉 Challenge Completed!");
    }
  }

  saveProgressToStorage();
  updateStats();
  updateCharts();
}

// Update notes
function updateNotes(taskId, notes) {
  progressData.notes[taskId] = notes;
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
}

// Find topic by ID
function findTopicById(topicId) {
  for (const objective of currentRoadmap.learningObjectives) {
    for (const topic of objective.topics) {
      if (topic.id === topicId) {
        return topic;
      }
    }
  }
  return null;
}

// Show achievement notification
function showAchievement(message) {
  const achievement = document.createElement("div");
  achievement.className = "achievement";
  achievement.textContent = message;
  document.body.appendChild(achievement);

  setTimeout(() => achievement.classList.add("show"), 100);
  setTimeout(() => {
    achievement.classList.remove("show");
    setTimeout(() => document.body.removeChild(achievement), 500);
  }, 3000);
}

// Calculate statistics (Pure percentage based)
function calculateStats() {
  let totalTasks = 0;
  let completedTasks = 0;
  let totalSessions = 0;
  let totalPlannedSessions = 0;
  let progressSum = 0;

  currentRoadmap.learningObjectives.forEach((objective) => {
    objective.topics.forEach((topic) => {
      totalTasks++;

      // Keep tracking sessions for stats cards
      const plannedRaw = topic.plannedSessions || 0;
      const pacingFactor = topic.pacing === "accelerate" ? 0.5 : 1;
      const planned = Math.max(1, Math.round(plannedRaw * pacingFactor));
      totalPlannedSessions += planned;
      totalSessions += (progressData.sessions && progressData.sessions[topic.id]) || 0;

      if (progressData.tasks[topic.id]) {
        completedTasks++;
      }

      // Sum percentage directly (no weighting)
      // computeTopicProgressFromResources returns 0-100
      const topicProgress = computeTopicProgressFromResources(topic);
      progressSum += topicProgress;
    });
  });

  // Average of all topic percentages
  const overallProgress = totalTasks > 0 ? Math.round(progressSum / totalTasks) : 0;

  return {
    overallProgress,
    completedTasks,
    totalTasks,
    totalSessions,
    totalPlannedSessions,
  };
}

// Update statistics display
function updateStats() {
  const stats = calculateStats();
  const { completedResources, totalResources } = computeResourceStats();

  document.getElementById("overallProgress").textContent = stats.overallProgress + "%";
  // Show resources completed count in the Resources Completed card
  const rcEl = document.getElementById("completedTasks");
  if (rcEl) rcEl.textContent = `${completedResources}/${totalResources}`;
  const tsEl = document.getElementById("totalSessions");
  const psEl = document.getElementById("plannedSessions");
  if (tsEl) tsEl.textContent = stats.totalSessions;
  if (psEl) psEl.textContent = stats.totalPlannedSessions;

  // Update progress ring (r=34 matches SVG)
  const circumference = 2 * Math.PI * 34;
  const progressCircle = document.getElementById("progressCircle");
  if (progressCircle) {
    const offset = circumference - (stats.overallProgress / 100) * circumference;
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = offset;
  }

  // Update learning objective progress
  currentRoadmap.learningObjectives.forEach((objective) => {
    const objectiveStats = calculateObjectiveStats(objective);
    const progressElement = document.getElementById(`progress-${objective.id}`);
    if (progressElement) {
      progressElement.textContent = `${objectiveStats.progress}% Complete`;
    }
    // Also update per-topic displayed value
    objective.topics.forEach((topic) => {
      const el = document.getElementById(`topicprog-${topic.id}`);
      if (el) {
        const topicPct = computeTopicProgressFromResources(topic);
        el.textContent = `${topicPct}%`;
      }
    });
  });

  // Update readiness gauge (Only visible in V1)
  if (currentVersion === "v1") {
    updateReadinessUI();
    updateRoleFitUI();
  }
}

// Compute resource completion counts across all topics (core + optional)
function computeResourceStats() {
  let totalResources = 0;
  let completedResources = 0;
  (currentRoadmap.learningObjectives || []).forEach((objective) => {
    (objective.topics || []).forEach((topic) => {
      const check = (r, i, isOpt) => {
        totalResources += 1;
        const rid = isOpt ? `${topic.id}-o${i}` : `${topic.id}-r${i}`;
        const checked = progressData.resourceCompleted && !!progressData.resourceCompleted[rid];
        const val = progressData.resourceProgress && typeof progressData.resourceProgress[rid] === "number"
          ? progressData.resourceProgress[rid]
          : checked ? 100 : 0;
        if (val >= 100 || checked) completedResources += 1;
      };

      if (Array.isArray(topic.resources)) topic.resources.forEach((r, i) => check(r, i, false));
      if (Array.isArray(topic.optionalResources)) topic.optionalResources.forEach((r, i) => check(r, i, true));
    });
  });
  return { completedResources, totalResources };
}

// Calculate learning objective statistics (session-weighted)
function calculateObjectiveStats(objective) {
  let totalTasks = 0;
  let completedTasks = 0;
  let totalSessions = 0;
  let totalPlanned = 0;
  let weightedProgressSum = 0;

  objective.topics.forEach((topic) => {
    totalTasks++;
    const pacingFactor = topic.pacing === "accelerate" ? 0.5 : 1;
    const planned = Math.max(
      1,
      Math.round((topic.plannedSessions || 0) * pacingFactor)
    );
    totalPlanned += planned;
    totalSessions += (progressData.sessions && progressData.sessions[topic.id]) || 0;
    if (progressData.tasks[topic.id]) {
      completedTasks++;
    }
    const topicProgress = computeTopicProgressFromResources(topic);
    weightedProgressSum += (planned || 1) * (Math.max(0, Math.min(100, topicProgress)) / 100);
  });

  const weightedProgress =
    totalPlanned > 0 ? Math.round((weightedProgressSum / totalPlanned) * 100) : 0;

  return {
    progress: weightedProgress,
    completedTasks,
    totalTasks,
    totalSessions,
    totalPlanned,
  };
}

// Gate-based readiness
function getGateCounts() {
  const gates = progressData.gates || {};
  const p1 = gates.project1 || {};
  const p2 = gates.project2 || {};
  const p1Passed = GATES.filter((g) => !!p1[g]).length;
  const p2Passed = GATES.filter((g) => !!p2[g]).length;
  const totalPassed = p1Passed + p2Passed;
  const totalGates = GATES.length * 2;
  return { p1Passed, p2Passed, totalPassed, totalGates };
}

function calculateReadiness() {
  const { totalPassed, totalGates } = getGateCounts();
  const pct = totalGates > 0 ? Math.round((totalPassed / totalGates) * 100) : 0;
  return Math.max(0, Math.min(100, pct));
}

function updateReadinessUI() {
  const readiness = calculateReadiness();
  const valueEl = document.getElementById("readinessValue");
  const circle = document.getElementById("readinessCircle");
  if (valueEl) valueEl.textContent = readiness + "%";
  if (circle) {
    const circumference = 2 * Math.PI * 50;
    const offset = circumference - (readiness / 100) * circumference;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
  }
}

function calculateReadinessTracks() {
  const gates = progressData.gates || {};
  const p1 = gates.project1 || {};
  const p2 = gates.project2 || {};
  const p1Ratio = GATES.filter((g) => !!p1[g]).length / GATES.length;
  const p2Ratio = GATES.filter((g) => !!p2[g]).length / GATES.length;
  const avg = (p1Ratio + p2Ratio) / 2;
  const feHeavy = Math.round(Math.max(p1Ratio, p2Ratio) * 100);
  const backendMid = Math.round(avg * 100);
  const bothAll = p1Ratio === 1 && p2Ratio === 1;
  const perfWin = !!p1.perfWin || !!p2.perfWin;
  const fsBalanced = bothAll && perfWin ? 100 : Math.round(avg * 100);
  return { feHeavy, backendMid, fsBalanced };
}

function updateRoleFitUI() {
  const { feHeavy, backendMid, fsBalanced } = calculateReadinessTracks();

  const feHeavyScore = document.getElementById("rf-fe-heavy-score");
  const backendMidScore = document.getElementById("rf-backend-mid-score");
  const fsBalancedScore = document.getElementById("rf-fs-balanced-score");

  if (feHeavyScore) feHeavyScore.textContent = feHeavy + "%";
  if (backendMidScore) backendMidScore.textContent = backendMid + "%";
  if (fsBalancedScore) fsBalancedScore.textContent = fsBalanced + "%";
}

// Initialize charts
function initCharts() {
  // Cleanup existing
  if (phaseChart) phaseChart.destroy();
  if (timeChart) timeChart.destroy();

  const brandColors = {
    crail: "#C15F3C",
    blue: "#6A9BCC",
    moss: "#788C5D",
    charcoal: "#141413",
    muted: "#6B6B6B",
    border: "#D1D1CB",
  };

  if (currentVersion === "v1") {
    const phaseCtx = document.getElementById("phaseChart").getContext("2d");
    phaseChart = new Chart(phaseCtx, {
      type: "doughnut",
      data: {
        labels: ["Project 1", "Project 2"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: [brandColors.crail, brandColors.blue],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: brandColors.charcoal,
              font: { family: "Inter", size: 10, weight: "500" },
            },
          },
        },
      },
    });
  }

  const topics = (currentRoadmap.learningObjectives[0]?.topics || []).filter(
    (t) => !t.isPrerequisites && !/week 15/i.test(t.title)
  );
  const weeks = topics.map((_, i) => `W${i + 1}`);

  const timeCtx = document.getElementById("timeChart").getContext("2d");
  timeChart = new Chart(timeCtx, {
    type: "bar",
    data: {
      labels: weeks,
      datasets: [
        {
          label: "Planned",
          data: topics.map((t) => t.plannedSessions || 0),
          backgroundColor: "rgba(177, 173, 161, 0.2)",
          borderColor: brandColors.border,
          borderWidth: 1,
        },
        {
          label: "Completed",
          data: topics.map(() => 0),
          backgroundColor: brandColors.crail,
          borderColor: brandColors.crail,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Sessions",
            color: brandColors.muted,
          },
          ticks: { color: brandColors.muted },
          grid: { color: "rgba(0, 0, 0, 0.05)" },
        },
        x: {
          ticks: { color: brandColors.muted, maxRotation: 45 },
          grid: { display: false },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: brandColors.charcoal,
            font: { family: "Inter", size: 12, weight: "500" },
          },
        },
      },
    },
  });

  updateCharts();
}

// Update charts with current data
function updateCharts() {
  // Update gate passes chart (V1 only)
  if (currentVersion === "v1" && phaseChart) {
    const { p1Passed, p2Passed } = getGateCounts();
    phaseChart.data.datasets[0].data = [p1Passed, p2Passed];
    phaseChart.update();
  }

  // Update time chart with week data
  if (timeChart) {
    const topics = (currentRoadmap.learningObjectives[0]?.topics || []).filter(
      (t) => !t.isPrerequisites && !/week 15/i.test(t.title)
    );
    const actualSessions = topics.map(
      (t) => (progressData.sessions && progressData.sessions[t.id]) || 0
    );
    const plannedSessions = topics.map((t) => t.plannedSessions || 0);
    timeChart.data.labels = topics.map((_, i) => `P${i + 1}`); // Use P for Phase in V2? Or just W.
    if (currentVersion === "v2") {
      timeChart.data.labels = topics.map((_, i) => `Ph${i + 1}`);
    }

    timeChart.data.datasets[0].data = plannedSessions;
    timeChart.data.datasets[1].data = actualSessions;
    timeChart.update();
  }
}

// Storage functions
function saveProgressToStorage() {
  localStorage.setItem("roadmapProgress", JSON.stringify(progressData));
}

function loadProgressFromStorage() {
  const saved = localStorage.getItem("roadmapProgress");
  if (saved) {
    progressData = JSON.parse(saved);
    // Ensure progress field exists for backward compatibility
    if (!progressData.progress) {
      progressData.progress = {};
    }
    if (!progressData.gates) {
      progressData.gates = { project1: {}, project2: {} };
    }
    if (!progressData.sessions) {
      progressData.sessions = {};
    }
    if (!progressData.resourceCompleted) {
      progressData.resourceCompleted = {};
    }
    if (!progressData.resourceProgress) {
      progressData.resourceProgress = {};
    }
    if (typeof progressData.problemsSolved !== "number") {
      progressData.problemsSolved = 0;
    }
  }
}

// Reconcile imported/saved data:
function reconcileProgressWithTasks() {
  // Loop through BOTH versions if possible, or just current?
  // Best to reconcile current.

  currentRoadmap.learningObjectives.forEach((objective) => {
    objective.topics.forEach((topic) => {
      const id = topic.id;
      const checked = !!progressData.tasks[id];
      if (!checked) {
        progressData.progress[id] = 0;
      } else if (typeof progressData.progress[id] !== "number") {
        progressData.progress[id] = 100;
      }
      if (typeof progressData.timeSpent[id] !== "number") {
        progressData.timeSpent[id] = 0;
      }
    });
  });
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
}

// Gates UI
function renderGates() {
  if (!progressData.gates) {
    progressData.gates = { project1: {}, project2: {} };
  }
  const container = document.getElementById("gatesContent");
  const gates = progressData.gates;
  const remediation = {
    testing: "Add Jest+Supertest, isolate DB, publish coverage",
    apiDocs: "Serve OpenAPI at /api-docs; validate with Spectral in CI",
    security: "Add Zod validators, helmet headers, rate limiter (ioredis)",
    reliability: "Idempotent Stripe webhooks; retries/backoff; DLQ documented",
    ops: "docker-compose.yml, .env.example, seed, GH Actions deploy",
    design: "One‑page Mermaid diagram + 2 ADRs per project",
  };
  const label = {
    testing: "Testing",
    apiDocs: "API Docs",
    security: "Security",
    reliability: "Reliability",
    ops: "Ops",
    design: "Design",
  };
  function projectBlock(pid, title) {
    const state = gates[pid] || {};
    const chips = GATES.map((g) => {
      const passed = !!state[g];
      const color = passed ? "var(--accent-green)" : "var(--accent-pink)";
      const txt = passed ? "Pass" : "Fail";
      return `<div style="display:flex;align-items:center;gap:.5rem;margin:.25rem 0;">
                        <span class="week-progress" role="button" tabindex="0" style="cursor:pointer;color:${color}" onclick="toggleGate('${pid}','${g}')">${
        label[g]
      }: ${txt}</span>
                        <span style="color:var(--text-muted);font-size:.85rem;">${
                          passed ? "" : remediation[g]
                        }</span>
                    </div>`;
    }).join("");
    const perfColor = state.perfWin ? "var(--accent-green)" : "var(--accent-pink)";
    const perfTxt = state.perfWin ? "Recorded" : "Missing";
    const perf = `<div style="display:flex;align-items:center;gap:.5rem;margin:.5rem 0;">
                    <span class="week-progress" role="button" tabindex="0" style="cursor:pointer;color:${perfColor}" onclick="togglePerf('${pid}')">Performance Win: ${perfTxt}</span>
                    <span style="color:var(--text-muted);font-size:.85rem;">Indexing/cache improvement with timings</span>
                </div>`;
    return `<div class="topic"><div class="topic-header"><div class="checkbox-container"><label class="topic-title">${title}</label></div></div>${chips}${perf}</div>`;
  }
  container.innerHTML = [
    projectBlock("project1", "Project 1 – Task/Project SaaS API"),
    projectBlock("project2", "Project 2 – Headless E‑commerce API"),
  ].join("");
}

function toggleGate(projectId, gate) {
  if (!progressData.gates) progressData.gates = { project1: {}, project2: {} };
  const state = progressData.gates[projectId] || {};
  state[gate] = !state[gate];
  progressData.gates[projectId] = state;
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
  renderGates();
  updateReadinessUI();
  updateRoleFitUI();
  updateCharts();
}

function togglePerf(projectId) {
  if (!progressData.gates) progressData.gates = { project1: {}, project2: {} };
  const state = progressData.gates[projectId] || {};
  state.perfWin = !state.perfWin;
  progressData.gates[projectId] = state;
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
  renderGates();
  updateReadinessUI();
  updateRoleFitUI();
}

// Express vs NestJS guidance
function renderExpressNest() {
  const el = document.getElementById("expressNestContent");
  if (!el) return;
  el.innerHTML = `
                <div class="topic">
                    <div class="topic-description">
                        <strong>Recommendation</strong>: Use <em>Express + TypeScript + Prisma</em> for Projects 1–2 to ship faster. After interviews begin, add an optional <em>NestJS</em> project to showcase DI, guards, pipes, and filters.
                        <ul style="margin-top:.75rem;">
                            <li><strong>Express</strong>: minimal ceremony, fastest iteration, best for shipping artifacts.</li>
                            <li><strong>NestJS</strong>: strong architecture signal (modules/providers/guards) once artifacts exist.</li>
                        </ul>
                    </div>
                </div>`;
}

// Resources grid
function renderResourcesGrid() {
  const grid = document.getElementById("resourcesGrid");
  if (!grid) return;
  // Aggregate per-week resources as curated set
  const items = [];
  (currentRoadmap.learningObjectives || []).forEach((objective) => {
    (objective.topics || []).forEach((topic) => {
      const weekLabel = topic.title || topic.id;
      const pushRes = (r, tag) =>
        items.push({
          name: `${r.name} — ${tag}`,
          url: r.url,
          meta: `${typeof r.hours === "number" ? `~${r.hours}h` : ""} · ${weekLabel}`,
        });
      if (Array.isArray(topic.resources)) topic.resources.forEach((r) => pushRes(r, "Core"));
      if (Array.isArray(topic.optionalResources))
        topic.optionalResources.forEach((r) => pushRes(r, "Optional"));
    });
  });
  grid.innerHTML = items
    .map(
      (r) => `
              <div class="advanced-topic">
                <div class="advanced-topic-title">🔗 <a href="${r.url}" target="_blank" class="resource-link" style="background:none;border:none;padding:0;">${r.name}</a></div>
                <div class="advanced-topic-desc">${r.meta}</div>
              </div>`
    )
    .join("");
}

// Export progress
function exportProgress() {
  const exportData = {
    ...progressData,
    exportDate: new Date().toISOString(),
    version: "2.0",
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `roadmap-progress-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showAchievement("💾 Progress Exported Successfully!");
}

// Import progress
function importProgress() {
  document.getElementById("fileModal").classList.add("show");
}

// Process file import
function processFileImport() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file to import.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);

      // Validate imported data
      if (!validateImportData(data)) {
        return;
      }

      importData = data;

      // Close file modal but keep importData
      document.getElementById("fileModal").classList.remove("show");
      document.getElementById("fileInput").value = "";

      // Check if user has existing progress
      const hasExistingProgress =
        Object.keys(progressData.tasks).length > 0 ||
        Object.keys(progressData.notes).length > 0 ||
        Object.keys(progressData.timeSpent).length > 0 ||
        Object.keys(progressData.progress).length > 0;

      if (hasExistingProgress) {
        document.getElementById("importModal").classList.add("show");
      } else {
        handleImport("overwrite");
      }
    } catch (error) {
      alert(
        "Error reading file. Please ensure it's a valid JSON file.\n\nError: " +
          error.message
      );
    }
  };
  reader.readAsText(file);
}

// Validate import data
function validateImportData(data) {
  if (!data || typeof data !== "object") {
    return false;
  }

  const requiredFields = ["tasks", "notes", "timeSpent"];
  const missingFields = requiredFields.filter((field) => !data.hasOwnProperty(field));

  if (missingFields.length > 0) {
    alert(`Missing required fields: ${missingFields.join(", ")}`);
    return false;
  }

  // Validate that fields are objects
  if (
    typeof data.tasks !== "object" ||
    typeof data.notes !== "object" ||
    typeof data.timeSpent !== "object"
  ) {
    alert("Invalid field types - all progress fields must be objects");
    return false;
  }

  // Progress field is optional for backward compatibility
  if (data.progress && typeof data.progress !== "object") {
    alert("Invalid progress field type - must be an object");
    return false;
  }

  // Optional new fields
  if (data.resourceCompleted && typeof data.resourceCompleted !== "object") {
    alert("Invalid resourceCompleted field type - must be an object");
    return false;
  }
  if (data.resourceProgress && typeof data.resourceProgress !== "object") {
    alert("Invalid resourceProgress field type - must be an object");
    return false;
  }

  return true;
}

// Handle import with user preference
function handleImport(action) {
  if (!importData) {
    alert("Import failed: No data available. Please try importing again.");
    return;
  }

  if (action === "overwrite") {
    progressData = {
      tasks: importData.tasks || {},
      notes: importData.notes || {},
      timeSpent: importData.timeSpent || {},
      progress: importData.progress || {},
      resourceCompleted: importData.resourceCompleted || {},
      resourceProgress: importData.resourceProgress || {},
      problemsSolved: importData.problemsSolved || 0,
      lastUpdated: new Date().toISOString(),
      version: importData.version || "v3",
    };
  } else if (action === "merge") {
    progressData.tasks = { ...progressData.tasks, ...importData.tasks };
    progressData.notes = { ...progressData.notes, ...importData.notes };
    progressData.timeSpent = {
      ...progressData.timeSpent,
      ...importData.timeSpent,
    };
    progressData.progress = {
      ...progressData.progress,
      ...(importData.progress || {}),
    };
    progressData.resourceCompleted = {
      ...(progressData.resourceCompleted || {}),
      ...(importData.resourceCompleted || {}),
    };
    progressData.resourceProgress = {
      ...(progressData.resourceProgress || {}),
      ...(importData.resourceProgress || {}),
    };
    if (typeof importData.problemsSolved === "number") {
      progressData.problemsSolved = importData.problemsSolved;
    }
    progressData.lastUpdated = new Date().toISOString();
  }

  saveProgressToStorage();
  closeModal();
  showAchievement("📥 Progress Imported Successfully!");
  location.reload();
}

// Reset all progress
function resetProgress() {
  if (
    confirm(
      "🔄 Are you sure you want to reset your entire quest? This will clear all progress and cannot be undone!"
    )
  ) {
    progressData = {
      tasks: {},
      notes: {},
      timeSpent: {},
      progress: {},
      problemsSolved: 0,
      lastUpdated: null,
      version: "v3",
    };
    saveProgressToStorage();
    showAchievement("🔄 Quest Reset - Ready for a Fresh Start!");
    location.reload();
  }
}

// Close modal
function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.remove("show");
  });
  document.getElementById("fileInput").value = "";
  importData = null;
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);

// Add some keyboard shortcuts for power users
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "e":
        e.preventDefault();
        exportProgress();
        break;
      case "i":
        e.preventDefault();
        importProgress();
        break;
    }
  }
});

function toggleResource(resourceId, topicId) {
  // Accept optional topicId for immediate topic progress recompute
  updateResourceCompletion(resourceId, topicId || null);
}

// NEW: Resource progress + completion handling
function updateResourceCompletion(resourceId, topicId) {
  if (!progressData.resourceCompleted) progressData.resourceCompleted = {};
  if (!progressData.resourceProgress) progressData.resourceProgress = {};

  const wasChecked = !!progressData.resourceCompleted[resourceId];
  const checkbox = document.getElementById(`reschk-${resourceId}`);
  const nowChecked = checkbox ? checkbox.checked : !wasChecked;
  progressData.resourceCompleted[resourceId] = nowChecked;

  // If checked => set progress 100. If unchecked: keep last numeric unless it was 100, then reset to 0
  const prev =
    typeof progressData.resourceProgress[resourceId] === "number"
      ? progressData.resourceProgress[resourceId]
      : wasChecked
      ? 100
      : 0;
  const newVal = nowChecked ? 100 : (prev === 100 ? 0 : prev);
  progressData.resourceProgress[resourceId] = newVal;

  // Reflect UI - slider and label
  const row = checkbox ? checkbox.closest(".resource-row") : null;
  if (row) {
    const slider = row.querySelector(".resource-slider");
    if (slider) slider.value = newVal;
  }
  const label = document.getElementById(`resprog-${resourceId}`);
  if (label) label.textContent = `${newVal}%`;

  // Recompute topic progress if we know the topic
  if (topicId) {
    const topic = findTopicById(topicId);
    if (topic) {
      const pct = computeTopicProgressFromResources(topic);
      progressData.progress[topicId] = pct;
      const el = document.getElementById(`topicprog-${topicId}`);
      if (el) el.textContent = `${pct}%`;
    }
  }

  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
  updateStats();
  updateCharts();

  if (currentVersion === "v1") {
    updateReadinessUI();
    updateRoleFitUI();
  }
}

function updateResourceProgress(resourceId, topicId, value) {
  if (!progressData.resourceProgress) progressData.resourceProgress = {};
  const val = Math.max(0, Math.min(100, parseInt(value, 10) || 0));
  progressData.resourceProgress[resourceId] = val;

  // If slider hits 100, auto-check; if it drops from 100 and box is checked, keep checked per rule? We only auto-check on 100.
  const chk = document.getElementById(`reschk-${resourceId}`);
  if (chk) {
    if (val >= 100) chk.checked = true;
    // Keep existing check otherwise; do not auto-uncheck on <100
    progressData.resourceCompleted[resourceId] = chk.checked;
  }

  const label = document.getElementById(`resprog-${resourceId}`);
  if (label) label.textContent = `${val}%`;

  // Recompute topic progress
  const topic = findTopicById(topicId);
  if (topic) {
    const pct = computeTopicProgressFromResources(topic);
    progressData.progress[topicId] = pct;
    const el = document.getElementById(`topicprog-${topicId}`);
    if (el) el.textContent = `${pct}%`;
  }

  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
  updateStats();
  updateCharts();
  if (currentVersion === "v1") {
    updateReadinessUI();
    updateRoleFitUI();
  }
}

function computeTopicProgressFromResources(topic) {
  if (!Array.isArray(topic.resources) || topic.resources.length === 0) {
    return Math.max(0, Math.min(100, progressData.progress[topic.id] || 0));
  }
  const weights = topic.resources.map((r) => {
    const hrs = typeof r.hours === "number" ? r.hours : 1;
    return Math.max(0.5, hrs); // minimum weight to avoid zero
  });
  const ids = topic.resources.map((r, i) => `${topic.id}-r${i}`);
  const progresses = ids.map((rid, i) => {
    const checked =
      progressData.resourceCompleted && progressData.resourceCompleted[rid];
    const val =
      progressData.resourceProgress &&
      typeof progressData.resourceProgress[rid] === "number"
        ? progressData.resourceProgress[rid]
        : checked
        ? 100
        : 0;
    return { val, w: weights[i] };
  });
  // Include optional resources at half-weight
  if (Array.isArray(topic.optionalResources) && topic.optionalResources.length) {
    const optIds = topic.optionalResources.map((r, i) => `${topic.id}-o${i}`);
    const optWeights = topic.optionalResources.map((r) => {
      const hrs = typeof r.hours === "number" ? r.hours : 1;
      return Math.max(0.25, hrs * 0.5);
    });
    optIds.forEach((rid, i) => {
      const checked =
        progressData.resourceCompleted && progressData.resourceCompleted[rid];
      const val =
        progressData.resourceProgress &&
        typeof progressData.resourceProgress[rid] === "number"
          ? progressData.resourceProgress[rid]
          : checked
          ? 100
          : 0;
      progresses.push({ val, w: optWeights[i] });
    });
  }
  const sumW = progresses.reduce((a, p) => a + p.w, 0);
  const sum = progresses.reduce((a, p) => a + (p.val / 100) * p.w, 0);
  const pct = sumW > 0 ? Math.round((sum / sumW) * 100) : 0;
  return Math.max(0, Math.min(100, pct));
}

function recomputeAllTopicProgressFromResources() {
  currentRoadmap.learningObjectives.forEach((objective) => {
    objective.topics.forEach((topic) => {
      const pct = computeTopicProgressFromResources(topic);
      // Use best estimate policy: resource-driven overrides manual
      progressData.progress[topic.id] = pct;
    });
  });
  progressData.lastUpdated = new Date().toISOString();
  saveProgressToStorage();
}

// Job Coverage rendering
function renderJobCoverage() {
  const container = document.getElementById("jobCoverage");
  if (!container) return;
  const items = [
    {
      id: "coverage-mid",
      title: 'Mid-Level "Feature Owner" (95% Coverage)',
      percent: 95,
      bullets: [
        {
          label: "Strong Node.js/TypeScript/Express (Weeks 1-3, 8-12)",
          weeks: [
            "w1-express-prisma-docker",
            "w2-testing-ci",
            "w3-auth-security",
            "w8-ship-project-1",
            "w11-system-design",
            "w12-interview-prep",
          ],
        },
        { label: "API Development (Week 4)", weeks: ["w4-openapi"] },
        {
          label: "Database Management (Weeks 1, 6, 11)",
          weeks: [
            "w1-express-prisma-docker",
            "w6-caching-performance",
            "w11-system-design",
          ],
        },
        {
          label: "Testing (Weeks 2, 7, 12)",
          weeks: ["w2-testing-ci", "w7-realtime", "w12-interview-prep"],
        },
        { label: "CI/CD + Docker (Week 2)", weeks: ["w2-testing-ci"] },
        {
          label: "Security (Weeks 3, 7)",
          weeks: ["w3-auth-security", "w7-realtime"],
        },
        {
          label: "Ownership (Weeks 8, 12)",
          weeks: ["w8-ship-project-1", "w12-interview-prep"],
        },
        { label: "Collaboration (All weeks)", weeks: [] },
      ],
    },
    {
      id: "coverage-senior",
      title: 'Senior "System Owner" (90% Coverage)',
      percent: 90,
      bullets: [
        {
          label: "All Mid-Level Skills (Weeks 1-12)",
          weeks: [
            "w1-express-prisma-docker",
            "w2-testing-ci",
            "w3-auth-security",
            "w4-openapi",
            "w5-payments-workers",
            "w6-caching-performance",
            "w7-realtime",
            "w8-ship-project-1",
            "w9-ecommerce-part1",
            "w10-ecommerce-part2",
            "w11-system-design",
            "w12-interview-prep",
          ],
        },
        {
          label: "System Design (Week 11)",
          weeks: ["w11-system-design"],
        },
        {
          label:
            "Advanced Patterns: Idempotency, Concurrency, Caching, Rate Limiting, Database, API, Authorization, Error Handling (Weeks 2-7, 11)",
          weeks: [
            "w2-testing-ci",
            "w3-auth-security",
            "w4-openapi",
            "w5-payments-workers",
            "w6-caching-performance",
            "w7-realtime",
            "w11-system-design",
          ],
        },
        {
          label: "Database Expertise (Weeks 1, 6, 11)",
          weeks: [
            "w1-express-prisma-docker",
            "w6-caching-performance",
            "w11-system-design",
          ],
        },
        {
          label: "Advanced Security (Week 3)",
          weeks: ["w3-auth-security"],
        },
        { label: "Leadership (Weeks 13+)", weeks: [] },
        { label: "Trade-off Communication (ADRs all weeks)", weeks: [] },
      ],
    },
  ];

  container.innerHTML = items
    .map((group) => {
      const list = group.bullets
        .map((b) => {
          const linkSpan =
            b.weeks && b.weeks.length
              ? `<span style="display:flex;gap:.3rem;margin-left:.35rem;flex-wrap:wrap;">${b.weeks
                  .map(
                    (w) =>
                      `<a href="#topic-${w}" class="resource-link" style="padding:.15rem .5rem;">${w
                        .toUpperCase()
                        .slice(0, 2)}</a>`
                  )
                  .join("")}</span>`
              : "";
          return `<div class="coverage-item" onclick="scrollToWeeks('${(
            b.weeks || []
          ).join(",")}')">✅ ${b.label}${linkSpan}</div>`;
        })
        .join("");
      return `
              <div class="topic">
                <div class="topic-header">
                  <div class="checkbox-container">
                    <label class="topic-title">${group.title}</label>
                  </div>
                </div>
                <div class="coverage-title">Coverage</div>
                <div class="coverage-progress"><div class="coverage-bar" style="width:${group.percent}%\"></div></div>
                <div class="notes-container" style="margin-top:1rem;">
                  <div class="coverage-list">${list}</div>
                </div>
              </div>`;
    })
    .join("");
}

function scrollToWeeks(weekIdsCsv) {
  if (!weekIdsCsv) return;
  const ids = weekIdsCsv.split(",").filter(Boolean);
  if (ids.length === 0) return;
  const el = document.getElementById(`topic-${ids[0]}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("completed");
    setTimeout(() => el.classList.remove("completed"), 1200);
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);

// Add some keyboard shortcuts for power users
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case "e":
        e.preventDefault();
        exportProgress();
        break;
      case "i":
        e.preventDefault();
        importProgress();
        break;
    }
  }
});

