const tailwind = '/*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.ml-4{margin-left:1rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.flex{display:flex}.min-h-\\[100dvh\\]{min-height:100dvh}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:1px;border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:#d1d5db;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:#9ca3af;border-color:rgb(156 163 175/var(--tw-border-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:#1f2937;background-color:rgb(31 41 55/var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:#22c55e;background-color:rgb(34 197 94/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:#ef4444;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-yellow-500{--tw-bg-opacity:1;background-color:#eab308;background-color:rgb(234 179 8/var(--tw-bg-opacity))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:#3b82f6 var(--tw-gradient-from-position);--tw-gradient-to:rgba(59,130,246,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-violet-500{--tw-gradient-to:#8b5cf6 var(--tw-gradient-to-position)}.p-1{padding:.25rem}.p-2{padding:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-4{padding-bottom:1rem;padding-top:1rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-6xl{font-size:3.75rem;line-height:1}.font-bold{font-weight:700}.text-gray-700{--tw-text-opacity:1;color:#374151;color:rgb(55 65 81/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:#22c55e;color:rgb(34 197 94/var(--tw-text-opacity))}.text-green-600{--tw-text-opacity:1;color:#16a34a;color:rgb(22 163 74/var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity:1;color:#4f46e5;color:rgb(79 70 229/var(--tw-text-opacity))}.text-transparent{color:transparent}.text-white{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-green-600:hover{--tw-bg-opacity:1;background-color:#16a34a;background-color:rgb(22 163 74/var(--tw-bg-opacity))}.focus\\:border-blue-300:focus{--tw-border-opacity:1;border-color:#93c5fd;border-color:rgb(147 197 253/var(--tw-border-opacity))}.focus\\:border-green-300:focus{--tw-border-opacity:1;border-color:#86efac;border-color:rgb(134 239 172/var(--tw-border-opacity))}.focus\\:border-green-500:focus{--tw-border-opacity:1;border-color:#22c55e;border-color:rgb(34 197 94/var(--tw-border-opacity))}.focus\\:border-red-300:focus{--tw-border-opacity:1;border-color:#fca5a5;border-color:rgb(252 165 165/var(--tw-border-opacity))}.focus\\:border-yellow-300:focus{--tw-border-opacity:1;border-color:#fde047;border-color:rgb(253 224 71/var(--tw-border-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}@media (min-width:768px){.md\\:mb-0{margin-bottom:0}.md\\:flex-row{flex-direction:row}}';

const entryStyles_B17leCIE = [tailwind];

export { entryStyles_B17leCIE as default };
//# sourceMappingURL=entry-styles.B17leCIE.mjs.map
