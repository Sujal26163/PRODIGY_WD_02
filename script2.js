<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Stopwatch</title>
    <!-- Tailwind CSS CDN for modern styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style2.css">
</head>
<body class="bg-[#0e111a] text-white flex items-center justify-center min-h-screen p-4 font-sans">

    <div class="bg-[#1a202c] p-8 rounded-2xl shadow-2xl w-full max-w-lg text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-8 text-[#4a90e2]">Stopwatch</h1>
        
        <!-- Stopwatch Display -->
        <div class="bg-gray-800 p-6 rounded-xl mb-8 border border-gray-700 shadow-inner">
            <span id="display" class="text-5xl md:text-6xl font-mono text-[#33d47d] tracking-wide">00:00:00.00</span>
        </div>

        <!-- Control Buttons -->
        <div class="flex justify-center space-x-4 mb-8">
            <button id="start-btn" class="bg-[#33d47d] text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#2cb266] focus:outline-none">
                Start
            </button>
            <button id="pause-btn" class="bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-yellow-500 focus:outline-none hidden">
                Pause
            </button>
            <button id="reset-btn" class="bg-red-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-red-600 focus:outline-none">
                Reset
            </button>
            <button id="lap-btn" class="bg-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none">
                Lap
            </button>
        </div>

        <!-- Lap Times List -->
        <div>
            <h2 class="text-2xl font-bold text-gray-300 mb-4 border-b border-gray-700 pb-2">Lap Times</h2>
            <ul id="lap-list" class="space-y-2">
                <!-- Lap times will be inserted here by JavaScript -->
            </ul>
        </div>
    </div>

    <!-- Link to the JavaScript file -->
    <script src="script2.js"></script>

</body>
</html>
