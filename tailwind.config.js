module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      'bg-orange-100',
      'bg-green-200',
      'text-orange-600',
      'text-red-600',
      'bg-orange-600',
      'bg-red-600',
      'hover:bg-orange-700',
      'hover:bg-red-700',
      'text-white',
      // …and any other theme classes you defined
    ],
    theme: {
      extend: {}
    },
    plugins: []
  }
  