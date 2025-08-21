<template>
  <div class="p-8 bg-gray-50 rounded-lg">
    <h3 class="text-xl font-bold mb-4">Image Usage Examples</h3>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Team Member Example -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h4 class="font-semibold mb-2">Team Member Photo</h4>
        <div class="w-32 h-32 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-gray-500 text-sm">400x400px</span>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Upload to: <code>/public/images/team/</code>
        </p>
      </div>

      <!-- Portfolio Example -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h4 class="font-semibold mb-2">Portfolio Project</h4>
        <div class="w-full h-24 mb-2 bg-gray-200 rounded flex items-center justify-center">
          <span class="text-gray-500 text-sm">800x600px</span>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Upload to: <code>/public/images/portfolio/</code>
        </p>
      </div>

      <!-- Logo Example -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h4 class="font-semibold mb-2">Company Logo</h4>
        <div class="w-24 h-24 mx-auto mb-2 bg-gray-200 rounded flex items-center justify-center">
          <span class="text-gray-500 text-xs">200x200px</span>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Upload to: <code>/public/images/logo/</code>
        </p>
      </div>

      <!-- Hero Example -->
      <div class="bg-white p-4 rounded-lg shadow">
        <h4 class="font-semibold mb-2">Hero Background</h4>
        <div class="w-full h-16 mb-2 bg-gray-200 rounded flex items-center justify-center">
          <span class="text-gray-500 text-xs">1920x1080px</span>
        </div>
        <p class="text-sm text-gray-600 text-center">
          Upload to: <code>/public/images/hero/</code>
        </p>
      </div>
    </div>

    <div class="mt-6 p-4 bg-blue-50 rounded-lg">
      <h4 class="font-semibold mb-2">How to Use Images in Components:</h4>
      <pre class="text-sm bg-gray-800 text-green-400 p-3 rounded overflow-x-auto"><code>&lt;template&gt;
  &lt;!-- Team member photo --&gt;
  &lt;img src="/images/team/team-member-1.jpg" alt="Team Member Name" /&gt;
  
  &lt;!-- Portfolio project --&gt;
  &lt;img src="/images/portfolio/ecommerce-project.jpg" alt="E-commerce Project" /&gt;
  
  &lt;!-- Logo --&gt;
  &lt;img src="/images/logo/company-logo.svg" alt="RatIT Logo" /&gt;
&lt;/template&gt;</code></pre>
    </div>
  </div>
</template>
