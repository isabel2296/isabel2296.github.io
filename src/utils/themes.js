function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    // localStorage.setItem('key', 'theme'); // Set the key property
    document.documentElement.className = themeName;
    window.dispatchEvent(new Event('storage'));
}

function keepTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    }
  } else {
    setTheme('theme-dark')
  }
}

module.exports = {
  setTheme,
  keepTheme
}
