let cart = [];

const loader_spiner = `<div class="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div class="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>
                    <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                    <div class="bg-gray-300 h-3 w-full rounded mb-1"></div>
                    <div class="bg-gray-300 h-3 w-2/3 rounded mb-4"></div>
                    <div class="flex justify-between mb-4">
                        <div class="bg-gray-300 h-6 w-16 rounded"></div>
                        <div class="bg-gray-300 h-6 w-10 rounded"></div>
                    </div>
                    <div class="bg-gray-300 h-8 w-full rounded"></div>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div class="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>
                    <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                    <div class="bg-gray-300 h-3 w-full rounded mb-1"></div>
                    <div class="bg-gray-300 h-3 w-2/3 rounded mb-4"></div>
                    <div class="flex justify-between mb-4">
                        <div class="bg-gray-300 h-6 w-16 rounded"></div>
                        <div class="bg-gray-300 h-6 w-10 rounded"></div>
                    </div>
                    <div class="bg-gray-300 h-8 w-full rounded"></div>
                </div>
                <div class="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div class="bg-gray-300 h-32 w-full rounded-lg mb-4"></div>
                    <div class="bg-gray-300 h-4 w-3/4 rounded mb-2"></div>
                    <div class="bg-gray-300 h-3 w-full rounded mb-1"></div>
                    <div class="bg-gray-300 h-3 w-2/3 rounded mb-4"></div>
                    <div class="flex justify-between mb-4">
                        <div class="bg-gray-300 h-6 w-16 rounded"></div>
                        <div class="bg-gray-300 h-6 w-10 rounded"></div>
                    </div>
                    <div class="bg-gray-300 h-8 w-full rounded"></div>
                </div>`;
document.getElementById("trees").innerHTML = loader_spiner;