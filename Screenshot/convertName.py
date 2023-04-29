import os
import glob
from PIL import Image

# Get a list of all .png files in the current directory
png_files = glob.glob('*.png')

# Sort the list in natural order
png_files.sort(key=lambda f: int(''.join(filter(str.isdigit, f))))

# Iterate over the list and convert each .png file
for i, file in enumerate(png_files, start=1):
    # Open the image using PIL
    img = Image.open(file)

    # Save the image with a new name as a .png file
    img.save(f'{i}.png')

    # Close the image
    img.close()

    # Remove the original file
    os.remove(file)
