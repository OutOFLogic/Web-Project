@echo off
cls
:start
set /p Input=Enter new sass file name:
type NUL > src/sass/_%Input%.sass
echo.@import %Input%.sass>> src/sass/styles.sass
goto start