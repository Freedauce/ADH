import os, re

# Files to process
pages_dir = r"d:\ADHI NEW\adhi-website\src\pages"
files = [
    os.path.join(pages_dir, f) for f in os.listdir(pages_dir) if f.endswith('.jsx')
]

# Replacement map - order matters (longer/more specific patterns first)
replacements = [
    # Background overrides
    ('bg-black/60', 'bg-white/60'),
    ('bg-black/50', 'bg-white/50'),
    ('bg-black/40', 'bg-black/20'),
    ('bg-black/70', 'bg-white/70'),
    ('bg-black/80', 'bg-white/90'),
    ('bg-black', 'bg-white'),
    ('bg-adhi-dark/50', 'bg-gray-50/50'),
    ('bg-adhi-dark/30', 'bg-gray-50'),
    ('bg-adhi-dark', 'bg-gray-50'),
    ('bg-adhi-gray-900', 'bg-gray-50'),
    ('bg-adhi-gray-800', 'bg-gray-100'),
    ('bg-adhi-gray-700', 'bg-gray-200'),
    
    # Text overrides  
    ('text-white/90', 'text-gray-800'),
    ('text-white/80', 'text-gray-700'),
    ('text-white/70', 'text-gray-600'),
    ('text-white/60', 'text-gray-500'),
    ('text-white/50', 'text-gray-400'),
    ('text-white', 'text-gray-900'),
    ('text-adhi-gray-400', 'text-gray-500'),
    ('text-adhi-gray-500', 'text-gray-400'),
    ('text-adhi-gray-300', 'text-gray-600'),
    
    # Border overrides
    ('border-white/5', 'border-gray-200'),
    ('border-white/10', 'border-gray-200'),
    ('border-white/20', 'border-gray-300'),
    ('border-white/[0.06]', 'border-gray-200'),
    
    # Background with white alpha
    ('bg-white/5', 'bg-gray-100'),
    ('bg-white/10', 'bg-gray-100'),
    ('bg-white/[0.02]', 'bg-gray-50'),
    ('bg-white/[0.03]', 'bg-gray-100'),
    ('bg-white/[0.04]', 'bg-gray-100'),
    ('bg-white/[0.01]', 'bg-gray-50'),
    
    # Gradient overrides
    ('from-black/70', 'from-white/70'),
    ('from-black', 'from-white'),
    ('via-black', 'via-white'),
    ('to-black', 'to-white'),
    ('from-adhi-dark', 'from-gray-50'),
    ('via-adhi-dark', 'via-white'),
    ('to-adhi-dark', 'to-white'),
    
    # Shadow overrides for dark context
    ('shadow-adhi-orange/5', 'shadow-adhi-orange/10'),
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {os.path.basename(filepath)}")

print("\nDone! All pages updated to light theme.")
