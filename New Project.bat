xcopy /e/i "gulp\src\*.*" %1\src
xcopy "gulp\gulpfile.js" %1

echo gulp> %1\start-gulp.bat
echo atom src\index.html> %1/start-atom(once).bat

xcopy "gulp\make-sass(once).bat" %1

mklink /d "%~1\node_modules" "..\gulp\node_modules"
rem mklink /d "%~1\gulpfile.js" "..\gulp\gulpfile.js"