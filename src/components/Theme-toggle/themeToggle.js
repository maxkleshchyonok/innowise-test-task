export default function setupThemeToggle(
  themeToggleId = 'themeToggle',
  lightClass = 'light-theme'
) {
  const themeToggle = document.getElementById(themeToggleId);
  const { body } = document;

  if (!themeToggle) return;

  themeToggle.checked = body.classList.contains(lightClass);

  themeToggle.addEventListener('change', () => {
    body.classList.toggle(lightClass, themeToggle.checked);
  });
}
