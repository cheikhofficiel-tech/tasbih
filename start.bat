@echo off
cd /d "%~dp0"
where py >nul 2>nul
if not errorlevel 1 (
  py -m http.server 8000
) else (
  where python >nul 2>nul
  if not errorlevel 1 (
    python -m http.server 8000
  ) else (
    echo Python n'est pas installe sur cette machine.
    echo Installez Python puis relancez ce fichier.
    pause
  )
)
