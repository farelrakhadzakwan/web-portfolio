/**
 * Research Pipeline Module
 * Handles step selection, keyboard navigation, expand/minimize toggle,
 * and updates detail view dynamically.
 */
export function initPipeline() {
  const pipelineSteps = document.querySelectorAll('.pipeline-step[data-step]');
  const pipelineStepNum = document.getElementById('pipelineStepNum');
  const pipelineStepTitle = document.getElementById('pipelineStepTitle');
  const pipelineStepDesc = document.getElementById('pipelineStepDesc');
  const pipelineStepTools = document.getElementById('pipelineStepTools');
  const pipelineToggleBtn = document.getElementById('pipelineToggleBtn');
  const pipelineStepsWrapper = document.getElementById('pipelineStepsWrapper');

  function selectStep(stepEl) {
    pipelineSteps.forEach(s => {
      s.classList.remove('active', 'bg-accent-blue/10', 'text-text-primary');
      s.classList.add('text-text-secondary');
      s.setAttribute('aria-selected', 'false');
    });

    stepEl.classList.add('active', 'bg-accent-blue/10', 'text-text-primary');
    stepEl.classList.remove('text-text-secondary');
    stepEl.setAttribute('aria-selected', 'true');

    const stepNum = stepEl.getAttribute('data-step');
    const title = stepEl.getAttribute('data-title');
    const detail = stepEl.getAttribute('data-detail');
    const tools = stepEl.getAttribute('data-tools');

    if (pipelineStepNum) pipelineStepNum.textContent = `STEP ${stepNum}`;
    if (pipelineStepTitle) pipelineStepTitle.textContent = title;
    if (pipelineStepDesc) pipelineStepDesc.textContent = detail;
    if (pipelineStepTools) pipelineStepTools.textContent = `Tools: ${tools}`;
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

  if (pipelineToggleBtn && pipelineStepsWrapper) {
    pipelineToggleBtn.addEventListener('click', () => {
      const isExpanded = pipelineStepsWrapper.classList.contains('expanded');
      const toggleLabel = pipelineToggleBtn.querySelector('.toggle-label');
      const chevron = pipelineToggleBtn.querySelector('.toggle-chevron');

      if (isExpanded) {
        pipelineStepsWrapper.classList.remove('expanded');
        pipelineStepsWrapper.classList.add('max-h-[160px]');
        pipelineStepsWrapper.classList.remove('max-h-[800px]');
        if (toggleLabel) toggleLabel.textContent = 'Expand (10 Steps)';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
        pipelineToggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        pipelineStepsWrapper.classList.add('expanded');
        pipelineStepsWrapper.classList.remove('max-h-[160px]');
        pipelineStepsWrapper.classList.add('max-h-[800px]');
        if (toggleLabel) toggleLabel.textContent = 'Minimize';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
        pipelineToggleBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }
}
