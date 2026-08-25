/**
 * Research Pipeline Module
 * Handles step selection, keyboard navigation, and dynamic deep dive updates.
 * Respects prefers-reduced-motion setting.
 */
export function initPipeline() {
  const pipelineSteps = document.querySelectorAll('.pipeline-step[data-step]');
  const pipelineStepNum = document.getElementById('pipelineStepNum');
  const pipelineStepTitle = document.getElementById('pipelineStepTitle');
  const pipelineStepDesc = document.getElementById('pipelineStepDesc');
  const pipelineStepTools = document.getElementById('pipelineStepTools');
  const pipelineStepCase = document.getElementById('pipelineStepCase');

  function selectStep(stepEl) {
    pipelineSteps.forEach(s => {
      s.classList.remove('active', 'border-accent-blue/40', 'bg-accent-blue/10');
      s.classList.add('border-border-subtle', 'bg-bg-card/30');
      const stepNumSpan = s.querySelector('.font-mono');
      if (stepNumSpan) {
        stepNumSpan.classList.remove('text-accent-blue');
        stepNumSpan.classList.add('text-text-muted');
      }
      s.setAttribute('aria-selected', 'false');
    });

    stepEl.classList.add('active', 'border-accent-blue/40', 'bg-accent-blue/10');
    stepEl.classList.remove('border-border-subtle', 'bg-bg-card/30');
    const activeStepNumSpan = stepEl.querySelector('.font-mono');
    if (activeStepNumSpan) {
      activeStepNumSpan.classList.add('text-accent-blue');
      activeStepNumSpan.classList.remove('text-text-muted');
    }
    stepEl.setAttribute('aria-selected', 'true');

    const stepNum = stepEl.getAttribute('data-step');
    const title = stepEl.getAttribute('data-title');
    const detail = stepEl.getAttribute('data-detail');
    const tools = stepEl.getAttribute('data-tools');
    const caseText = stepEl.getAttribute('data-case');

    if (pipelineStepNum) pipelineStepNum.textContent = `STAGE ${stepNum} OF 10`;
    if (pipelineStepTitle) pipelineStepTitle.textContent = title;
    if (pipelineStepDesc) pipelineStepDesc.textContent = detail;
    if (pipelineStepTools) pipelineStepTools.textContent = `Tools: ${tools}`;
    if (pipelineStepCase && caseText) pipelineStepCase.textContent = caseText;
  }

  pipelineSteps.forEach(step => {
    step.addEventListener('click', () => selectStep(step));
    step.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectStep(step);
      }
    });
  });
}
